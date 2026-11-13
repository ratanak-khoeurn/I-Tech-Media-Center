(function () {
    var form = document.getElementById('enroll-form');
    if (!form) return;

    var endpoint = 'itechmediabusiness@gmail.com';

    var copy = {
        en: {
            subject: 'Enrollment application',
            sending: 'Sending your application...',
            success: 'Thank you! Your application has been received. Our team will contact you soon.',
            error: 'Sorry, we could not send your application. Please email us directly at'
        },
        km: {
            subject: 'ពាក្យសុំចុះឈ្មោះ',
            sending: 'កំពុងផ្ញើពាក្យសុំរបស់អ្នក...',
            success: 'សូមអរគុណ! ពាក្យសុំរបស់អ្នកត្រូវបានទទួលរួចហើយ។ ក្រុមការងាររបស់យើងនឹងទាក់ទងអ្នកឆាប់ៗនេះ។',
            error: 'សូមអភ័យទោស យើងមិនអាចផ្ញើពាក្យសុំរបស់អ្នកបានទេ។ សូមផ្ញើអ៊ីមែលមកយើងផ្ទាល់តាម'
        }
    };

    var button = form.querySelector('button[type="submit"]');
    var status = document.getElementById('enroll-form-status');
    var sending = false;

    function showStatus(kind, text, address) {
        status.className = 'enroll-form-status is-' + kind;
        status.textContent = '';

        var message = document.createElement('span');
        message.textContent = text;
        status.appendChild(message);

        if (address) {
            var link = document.createElement('a');
            link.href = 'mailto:' + address;
            link.textContent = ' ' + address;
            status.appendChild(link);
        }
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        if (sending) return;

        var lang = document.documentElement.lang === 'km' ? 'km' : 'en';
        var labels = copy[lang];
        var value = function (id) {
            var el = document.getElementById(id);
            return el ? el.value.trim() : '';
        };
        var name = value('name');
        var email = value('email');
        var phone = value('phone');
        var startdate = value('startdate');
        var course = value('course');
        var message = value('message');
        var honey = form.querySelector('input[name="_honey"]');

        var payload = {
            name: name,
            email: email,
            phone: phone,
            start_date: startdate,
            course: course,
            message: message,
            _subject: '[Enrollment] ' + (course || labels.subject),
            _replyto: email,
            _template: 'table',
            _captcha: 'false',
            _honey: honey ? honey.value : ''
        };

        sending = true;
        var idleLabel = button.textContent;
        button.disabled = true;
        button.textContent = labels.sending;
        showStatus('sending', labels.sending);

        var controller = new AbortController();
        var timer = setTimeout(function () {
            controller.abort();
        }, 20000);

        fetch('https://formsubmit.co/ajax/' + endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(payload),
            signal: controller.signal
        })
            .then(function (response) {
                return response.json().catch(function () {
                    return {};
                });
            })
            .then(function (data) {
                var sent = data && (data.success === true || data.success === 'true');
                var needsActivation = data && /activat/i.test(data.message || '');
                if (sent) {
                    showStatus('success', labels.success);
                    form.reset();
                } else {
                    if (needsActivation) {
                        console.warn('[enroll] FormSubmit endpoint is not activated yet. Open the recipient inbox and click the "Activate Form" link from FormSubmit, then submit again.', endpoint);
                    } else {
                        console.warn('[enroll] FormSubmit rejected the submission:', data);
                    }
                    showStatus('error', labels.error, endpoint);
                }
            })
            .catch(function () {
                showStatus('error', labels.error, endpoint);
            })
            .then(function () {
                clearTimeout(timer);
                sending = false;
                button.disabled = false;
                button.textContent = idleLabel;
            });
    });
})();
