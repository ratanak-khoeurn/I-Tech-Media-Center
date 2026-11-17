(function () {
    var SOCIAL = {
        facebook: 'https://www.facebook.com/itechmediaschool',
        linkedin: 'https://www.linkedin.com/company/itechmediacam/',
        youtube: 'https://www.youtube.com/@i-techmedia_school'
    };

    // Static fallback; content/instructors.json re-renders this via js/cms.js.
    var PEOPLE = [
        {
            name: 'Vannak',
            role: 'Design Instructor',
            subject: 'Graphic Design',
            photo: 'vannak.png',
            bio: 'Teaches graphic design from the ground up: Photoshop and Illustrator for visual concepts, plus InDesign for print-ready layouts and portfolio projects.'
        },
        {
            name: 'Reaksmey',
            role: 'Microsoft Office Instructor',
            subject: 'MS Office',
            photo: 'reaksmey.png',
            bio: 'Trains students in Microsoft Word, Excel and PowerPoint, with practical exercises for office documents, spreadsheets and presentations.'
        },
        {
            name: 'Vibol',
            role: 'Microsoft Office Instructor',
            subject: 'MS Office',
            photo: 'vibol.jpg',
            bio: 'Teaches Microsoft Office with a focus on Excel formulas, data organization and clear, professional presentations for school and work.'
        },
        {
            name: 'Socheat',
            role: 'Photo & Video Instructor',
            subject: 'Photography & Videography',
            photo: 'socheat.png',
            bio: 'Guides students through camera basics, studio and outdoor shoots, lighting and video storytelling, then editing their own photo and video projects.'
        }
    ];

    function esc(value) {
        return String(value == null ? '' : value).replace(/[&<>"']/g, function (ch) {
            return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch];
        });
    }

    function card(person, delay) {
        var alt = person.name + ', ' + person.role;
        return [
            '<div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="' + delay + 's">',
            '    <article class="team-item text-center" role="button" tabindex="0" aria-haspopup="dialog" data-instructor',
            '        data-name="' + esc(person.name) + '" data-role="' + esc(person.role) + '" data-subject="' + esc(person.subject) + '"',
            '        data-photo="img/' + esc(person.photo) + '" data-bio="' + esc(person.bio) + '"',
            '        data-facebook="' + esc(SOCIAL.facebook) + '" data-linkedin="' + esc(SOCIAL.linkedin) + '" data-youtube="' + esc(SOCIAL.youtube) + '">',
            '        <div class="team-photo">',
            '            <img class="img-fluid" src="img/' + esc(person.photo) + '" alt="' + esc(alt) + '" loading="lazy">',
            '        </div>',
            '        <h5 class="team-name mb-1">' + esc(person.name) + '</h5>',
            '        <span class="team-role">' + esc(person.role) + '</span>',
            '        <span class="team-subject">' + esc(person.subject) + '</span>',
            '        <span class="team-more">View profile <i class="fa fa-arrow-right" aria-hidden="true"></i></span>',
            '    </article>',
            '</div>'
        ].join('\n');
    }

    var html = [
        '<div class="container-xxl py-5">',
        '    <div class="container">',
        '        <div class="text-center wow fadeInUp" data-wow-delay="0.1s">',
        '            <h5 class="section-title ff-secondary text-center text-primary fw-normal">Our Team</h5>',
        '            <h1 class="mb-5">Meet Our Instructors</h1>',
        '        </div>',
        '        <div class="row g-4" data-cms="instructors">',
        PEOPLE.map(function (person, i) {
            return card(person, (0.1 + i * 0.2).toFixed(1));
        }).join('\n'),
        '        </div>',
        '    </div>',
        '</div>',
        '<div class="modal fade" id="instructorModal" tabindex="-1" aria-labelledby="instructorModalName" aria-hidden="true">',
        '    <div class="modal-dialog modal-dialog-centered modal-lg">',
        '        <div class="modal-content instructor-modal">',
        '            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>',
        '            <div class="modal-body">',
        '                <div class="row g-4 align-items-center">',
        '                    <div class="col-md-4 text-center">',
        '                        <img class="instructor-modal-photo" data-instructor-photo src="img/vannak.png" alt="">',
        '                    </div>',
        '                    <div class="col-md-8">',
        '                        <h3 class="instructor-modal-name" id="instructorModalName" data-instructor-name></h3>',
        '                        <span class="instructor-modal-role" data-instructor-role></span>',
        '                        <span class="instructor-modal-subject" data-instructor-subject></span>',
        '                        <p class="instructor-modal-bio" data-instructor-bio></p>',
        '                        <div class="instructor-modal-social d-flex flex-wrap gap-2" data-instructor-social></div>',
        '                    </div>',
        '                </div>',
        '            </div>',
        '        </div>',
        '    </div>',
        '</div>'
    ].join('\n');

    var mount = document.getElementById('site-instructors');
    if (mount) {
        mount.outerHTML = html;
    }

    var modalEl = document.getElementById('instructorModal');
    var socials = [
        ['facebook', 'fab fa-facebook-f', 'Facebook'],
        ['linkedin', 'fab fa-linkedin-in', 'LinkedIn'],
        ['youtube', 'fab fa-youtube', 'YouTube']
    ];

    function openCard(cardEl) {
        if (!modalEl || !window.bootstrap) return;

        function data(key) {
            return cardEl.getAttribute('data-' + key) || '';
        }

        var photo = modalEl.querySelector('[data-instructor-photo]');
        var bio = modalEl.querySelector('[data-instructor-bio]');
        var box = modalEl.querySelector('[data-instructor-social]');

        photo.src = data('photo');
        photo.alt = data('name');
        modalEl.querySelector('[data-instructor-name]').textContent = data('name') || data('role');
        modalEl.querySelector('[data-instructor-role]').textContent = data('role');
        modalEl.querySelector('[data-instructor-subject]').textContent = data('subject');
        bio.textContent = data('bio');
        bio.hidden = !data('bio');
        box.innerHTML = socials.map(function (entry) {
            var url = data(entry[0]);
            if (!url) return '';
            return '<a class="btn btn-square btn-primary" href="' + esc(url) + '" target="_blank" rel="noopener" aria-label="' + entry[2] + '"><i class="' + entry[1] + '"></i></a>';
        }).join('');

        (window.bootstrap.Modal.getInstance(modalEl) || new window.bootstrap.Modal(modalEl)).show();
    }

    document.addEventListener('click', function (e) {
        var cardEl = e.target.closest ? e.target.closest('[data-instructor]') : null;
        if (cardEl) openCard(cardEl);
    });

    document.addEventListener('keydown', function (e) {
        if (e.key !== 'Enter' && e.key !== ' ' && e.key !== 'Spacebar') return;
        var cardEl = e.target.closest ? e.target.closest('[data-instructor]') : null;
        if (!cardEl) return;
        e.preventDefault();
        openCard(cardEl);
    });
})();
