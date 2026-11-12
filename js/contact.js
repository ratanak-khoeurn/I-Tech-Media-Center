(function () {
    var form = document.getElementById('contact-form');
    if (!form) return;

    var departments = {
        general: {
            to: 'itechmediabusiness@gmail.com',
            cc: ''
        },
        hr: {
            to: 'h.kakada@itechmediakh.com',
            cc: 'k.sereykosal@itechmediakh.com,d.sakmai@itechmediakh.com'
        }
    };

    var copy = {
        en: {
            general: 'General Enquiry',
            hr: 'HR & Recruitment',
            subject: 'Website contact',
            send: 'Send Message',
            sending: 'Sending your message...',
            success: 'Thank you! Your message has been received. We will reply to your email soon.',
            error: 'Sorry, we could not send your message. Please email us directly at'
        },
        km: {
            general: 'ការសាកសួរទូទៅ',
            hr: 'ធនធានមនុស្ស និងការជ្រើសរើសបុគ្គលិក',
            subject: 'ទំនាក់ទំនងតាមគេហទំព័រ',
            send: 'ផ្ញើសារ',
            sending: 'កំពុងផ្ញើសាររបស់អ្នក...',
            success: 'សូមអរគុណ! សាររបស់អ្នកត្រូវបានទទួលរួចហើយ។ យើងនឹងឆ្លើយតបតាមអ៊ីមែលរបស់អ្នកឆាប់ៗនេះ។',
            error: 'សូមអភ័យទោស យើងមិនអាចផ្ញើសាររបស់អ្នកបានទេ។ សូមផ្ញើអ៊ីមែលមកយើងផ្ទាល់តាម'
        }
    };

    var button = form.querySelector('button[type="submit"]');
    var status = document.getElementById('contact-form-status');
    var sending = false;

    function showStatus(kind, text, addresses) {
        status.className = 'contact-form-status is-' + kind;
        status.textContent = '';

        var message = document.createElement('span');
        message.textContent = text;
        status.appendChild(message);

        if (addresses) {
            var link = document.createElement('a');
            link.href = 'mailto:' + addresses;
            link.textContent = ' ' + addresses;
            status.appendChild(link);
        }
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        if (sending) return;

        var lang = document.documentElement.lang === 'km' ? 'km' : 'en';
        var labels = copy[lang];
        var value = function (id) {
            return document.getElementById(id).value.trim();
        };
        var department = document.getElementById('department');
        var key = department && departments[department.value] ? department.value : 'general';
        var target = departments[key];
        var name = value('name');
        var email = value('email');
        var subject = value('subject');
        var message = value('message');
        var honey = document.querySelector('input[name="_honey"]');
        var recovery = [target.to, target.cc].filter(Boolean).join(', ');

        var payload = {
            name: name,
            email: email,
            department: labels[key],
            subject: subject,
            message: message,
            _subject: '[' + labels[key] + '] ' + (subject || labels.subject),
            _replyto: email,
            _template: 'table',
            _captcha: 'false',
            _honey: honey ? honey.value : ''
        };
        if (target.cc) payload._cc = target.cc;

        sending = true;
        button.disabled = true;
        button.textContent = labels.sending;
        showStatus('sending', labels.sending);

        var controller = new AbortController();
        var timer = setTimeout(function () {
            controller.abort();
        }, 20000);

        fetch('https://formsubmit.co/ajax/' + target.to, {
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
                if (sent || needsActivation) {
                    showStatus('success', labels.success);
                    form.reset();
                } else {
                    showStatus('error', labels.error, recovery);
                }
            })
            .catch(function () {
                showStatus('error', labels.error, recovery);
            })
            .then(function () {
                clearTimeout(timer);
                sending = false;
                button.disabled = false;
                button.textContent = labels.send;
            });
    });
})();
