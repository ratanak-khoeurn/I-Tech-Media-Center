/*
 * Content rendering for the Pages CMS collections in /content.
 * Each page keeps its HTML as a static fallback; when the JSON loads,
 * the marked containers are re-rendered in the active language.
 */
(function () {
    'use strict';

    var LABELS = {
        en: {
            duration: 'Duration',
            classSize: 'Class Size',
            tuition: 'Tuition',
            enroll: 'Enroll Now',
            programs: 'Programs',
            certifications: 'Certifications',
            selectCourse: 'Select a course'
        },
        km: {
            duration: 'រយៈពេល',
            classSize: 'ចំនួនសិស្សក្នុងថ្នាក់',
            tuition: 'ថ្លៃសិក្សា',
            enroll: 'ចុះឈ្មោះឥឡូវ',
            programs: 'កម្មវិធី',
            certifications: 'វិញ្ញាបនបត្រ',
            selectCourse: 'ជ្រើសរើសវគ្គសិក្សា'
        }
    };

    var SOCIAL = {
        facebook_url: 'https://www.facebook.com/itechmediaschool',
        youtube_url: 'https://www.youtube.com/@i-techmedia_school',
        linkedin_url: 'https://www.linkedin.com/company/itechmediacam/'
    };

    var lang = document.documentElement.lang === 'km' ? 'km' : 'en';
    var cache = {};

    function esc(value) {
        return String(value == null ? '' : value).replace(/[&<>"']/g, function (ch) {
            return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch];
        });
    }

    function text(item, key) {
        var value = item[key + '_' + lang];
        if (value == null || value === '') value = item[key + '_en'];
        return value == null ? '' : value;
    }

    function lines(value) {
        return String(value || '').split(/\r?\n/).map(function (s) {
            return s.trim();
        }).filter(Boolean);
    }

    function media(src) {
        if (!src) return '';
        if (/^(https?:)?\/\//.test(src) || src.charAt(0) === '/' || src.indexOf('img/') === 0) return src;
        return 'img/' + src;
    }

    function load(name) {
        return fetch('content/' + name + '.json', { cache: 'no-store' })
            .then(function (res) { return res.ok ? res.json() : null; })
            .catch(function () { return null; });
    }

    function mount(name) {
        return document.querySelector('[data-cms="' + name + '"]');
    }

    function nodes(html) {
        var box = document.createElement('div');
        box.innerHTML = html;
        return Array.prototype.slice.call(box.children);
    }

    function fill(row, html, keepSelector) {
        if (!row) return;
        var keep = keepSelector ? row.querySelector(keepSelector) : null;
        var items = nodes(html);
        if (keep) keep = keep.closest('[class*="col-"]') || keep;
        while (row.firstChild) row.removeChild(row.firstChild);
        items.forEach(function (node) { row.appendChild(node); });
        if (keep) row.appendChild(keep);
    }

    /* ------------------------------------------------------------- courses */
    function courseCard(course) {
        var points = lines(text(course, 'points')).map(function (point) {
            return '<li>' + esc(point) + '</li>';
        }).join('');
        var note = text(course, 'note');
        return [
            '<div class="col-xl-4 col-md-6">',
            '  <article class="course-card">',
            '    <div class="course-card-top">',
            '      <div class="course-card-icon"><i class="' + esc(course.icon || 'fa fa-book') + '" aria-hidden="true"></i></div>',
            '      <span class="course-code">' + esc(course.code) + '</span>',
            '    </div>',
            '    <div class="course-card-body">',
            '      <span class="course-tag">' + esc(text(course, 'tag')) + '</span>',
            '      <h4 class="course-title">' + esc(text(course, 'title')) + '</h4>',
            '      <p class="course-curriculum">' + esc(text(course, 'curriculum')) + '</p>',
            '      <ul class="course-points">' + points + '</ul>',
            '      <div class="course-meta">',
            '        <span><i class="fa fa-clock" aria-hidden="true"></i><strong>' + esc(text(course, 'duration')) + '</strong><small>' + esc(LABELS[lang].duration) + '</small></span>',
            '        <span><i class="fa fa-users" aria-hidden="true"></i><strong>' + esc(text(course, 'class_size')) + '</strong><small>' + esc(LABELS[lang].classSize) + '</small></span>',
            '        <span><i class="fa fa-tag" aria-hidden="true"></i><strong>' + esc(course.tuition) + '</strong><small>' + esc(LABELS[lang].tuition) + '</small></span>',
            '      </div>',
            note ? '      <p class="course-note">' + esc(note) + '</p>' : '',
            '    </div>',
            '    <a class="course-cta" href="booking.html">' + esc(LABELS[lang].enroll) + ' <i class="fa fa-arrow-right" aria-hidden="true"></i></a>',
            '  </article>',
            '</div>'
        ].join('\n');
    }

    function renderCourses(list) {
        var groups = { local: [], international: [] };
        list.forEach(function (course) {
            (groups[course.group] || groups.local).push(course);
        });
        fill(mount('courses-local'), groups.local.map(courseCard).join(''));
        fill(mount('courses-intl'), groups.international.map(courseCard).join(''));

        var counts = [
            ['local', groups.local.length, 'programs'],
            ['intl', groups.international.length, 'certifications']
        ];
        counts.forEach(function (entry) {
            var el = document.querySelector('[data-cms-count="' + entry[0] + '"]');
            if (el) el.textContent = entry[1] + ' ' + LABELS[lang][entry[2]];
        });

        var select = mount('course-options');
        if (select) {
            var options = list.map(function (course) {
                return '<option>' + esc(text(course, 'title')) + '</option>';
            }).join('');
            select.innerHTML = '<option selected disabled>' + esc(LABELS[lang].selectCourse) + '</option>' + options;
        }
    }

    /* ---------------------------------------------------------------- news */
    function newsFeatured(post) {
        var badge = text(post, 'badge');
        var second = text(post, 'second_link_label');
        return [
            '<div class="col-12">',
            '  <article class="news-card news-featured rounded overflow-hidden bg-white shadow-sm">',
            '    <div class="row g-0">',
            '      <div class="col-lg-6 news-media">',
            '        <img src="' + esc(media(post.image)) + '" alt="' + esc(text(post, 'title')) + '">',
            badge ? '        <span class="news-badge">' + esc(badge) + '</span>' : '',
            '      </div>',
            '      <div class="col-lg-6 p-4 p-lg-5 d-flex flex-column justify-content-center">',
            '        <div class="news-date"><i class="fa fa-calendar-alt me-2"></i>' + esc(text(post, 'date')) + '</div>',
            '        <h3 class="mb-3">' + esc(text(post, 'title')) + '</h3>',
            '        <p class="mb-4">' + esc(text(post, 'excerpt')) + '</p>',
            '        <div class="d-flex flex-wrap gap-3">',
            '          <a class="btn btn-primary py-2 px-4" href="' + esc(post.link) + '">' + esc(text(post, 'link_label')) + '</a>',
            second ? '          <a class="btn btn-outline-primary py-2 px-4" href="' + esc(post.second_link) + '">' + esc(second) + '</a>' : '',
            '        </div>',
            '      </div>',
            '    </div>',
            '  </article>',
            '</div>'
        ].join('\n');
    }

    function newsCard(post) {
        return [
            '<div class="col-lg-4 col-md-6">',
            '  <article class="news-card h-100 rounded overflow-hidden bg-white shadow-sm d-flex flex-column">',
            '    <div class="news-media">',
            '      <img src="' + esc(media(post.image)) + '" alt="' + esc(text(post, 'title')) + '">',
            '    </div>',
            '    <div class="p-4 d-flex flex-column flex-grow-1">',
            '      <div class="news-date"><i class="fa fa-calendar-alt me-2"></i>' + esc(text(post, 'date')) + '</div>',
            '      <h4 class="mb-3">' + esc(text(post, 'title')) + '</h4>',
            '      <p class="mb-3 flex-grow-1">' + esc(text(post, 'excerpt')) + '</p>',
            '      <a class="news-link" href="' + esc(post.link) + '">' + esc(text(post, 'link_label')) + ' <i class="fa fa-arrow-right ms-1"></i></a>',
            '    </div>',
            '  </article>',
            '</div>'
        ].join('\n');
    }

    function renderNews(list) {
        var featured = list.filter(function (p) { return p.featured; })[0] || list[0];
        var rest = list.filter(function (p) { return p !== featured; });
        var html = (featured ? newsFeatured(featured) : '') + rest.map(newsCard).join('');
        fill(mount('news'), html, '.news-cta');
    }

    /* -------------------------------------------------------------- events */
    function eventItem(event) {
        var cta = text(event, 'cta');
        return [
            '<div class="col-12">',
            '  <article class="event-item overflow-hidden bg-white shadow-sm">',
            '    <div class="event-date">',
            '      <span class="event-day">' + esc(event.day) + '</span>',
            '      <span class="event-month">' + esc(text(event, 'month')) + '</span>',
            '    </div>',
            '    <div class="event-body">',
            '      <div class="event-meta">',
            '        <span><i class="fa fa-clock me-2"></i>' + esc(text(event, 'time')) + '</span>',
            '        <span><i class="fa fa-map-marker-alt me-2"></i>' + esc(text(event, 'location')) + '</span>',
            '      </div>',
            '      <h3 class="mb-2">' + esc(text(event, 'title')) + '</h3>',
            '      <p class="mb-3">' + esc(text(event, 'description')) + '</p>',
            cta ? '      <a class="btn btn-primary py-2 px-4" href="' + esc(event.link || 'booking.html') + '">' + esc(cta) + '</a>' : '',
            '    </div>',
            '  </article>',
            '</div>'
        ].join('\n');
    }

    function renderEvents(list) {
        fill(mount('events'), list.map(eventItem).join(''), '.event-visit');
    }

    /* ------------------------------------------------------------- gallery */
    function galleryItem(photo) {
        return [
            '<figure class="gallery-item" data-category="' + esc(photo.category) + '">',
            '  <div class="gallery-media">',
            '    <img src="' + esc(media(photo.image)) + '" alt="' + esc(text(photo, 'alt')) + '" loading="lazy">',
            '  </div>',
            '  <figcaption>' + esc(text(photo, 'caption')) + '</figcaption>',
            '</figure>'
        ].join('\n');
    }

    function renderGallery(list) {
        var grid = mount('gallery');
        if (!grid) return;
        grid.innerHTML = list.map(galleryItem).join('');
        document.dispatchEvent(new CustomEvent('cms:gallery'));
    }

    /* ---------------------------------------------------------- instructors */
    function instructorCard(person) {
        var site = cache.settings || SOCIAL;
        var socials = [
            ['facebook_url', 'fab fa-facebook-f', 'Facebook'],
            ['linkedin_url', 'fab fa-linkedin-in', 'LinkedIn'],
            ['youtube_url', 'fab fa-youtube', 'YouTube']
        ].map(function (entry) {
            var href = site[entry[0]] || SOCIAL[entry[0]];
            return '        <a class="btn btn-square btn-primary mx-1" href="' + esc(href) + '" target="_blank" rel="noopener" aria-label="' + entry[2] + '"><i class="' + entry[1] + '"></i></a>';
        }).join('\n');

        return [
            '<div class="col-lg-3 col-md-6">',
            '  <div class="team-item text-center overflow-hidden">',
            '    <div class="rounded-circle overflow-hidden m-4">',
            '      <img class="img-fluid" src="' + esc(media(person.photo)) + '" alt="' + esc(text(person, 'alt') || text(person, 'role')) + '">',
            '    </div>',
            '    <h5 class="mb-0">' + esc(text(person, 'role')) + '</h5>',
            '    <small>' + esc(text(person, 'subject')) + '</small>',
            '    <div class="d-flex justify-content-center mt-3">',
            socials,
            '    </div>',
            '  </div>',
            '</div>'
        ].join('\n');
    }

    function renderInstructors(list) {
        fill(mount('instructors'), list.map(instructorCard).join(''));
    }

    /* ------------------------------------------------------------- settings */
    function renderSettings(site) {
        if (!site) return;
        document.querySelectorAll('[data-setting]').forEach(function (el) {
            var key = el.getAttribute('data-setting');
            var value = site[key + '_' + lang] || site[key + '_en'] || site[key];
            if (value) el.textContent = value;
        });
        document.querySelectorAll('[data-setting-href]').forEach(function (el) {
            var key = el.getAttribute('data-setting-href');
            var value = site[key];
            if (value) el.setAttribute('href', key === 'email' ? 'mailto:' + value : value);
        });
    }

    /* ------------------------------------------------------------- pipeline */
    function renderAll() {
        if (cache.settings) renderSettings(cache.settings.site);
        if (cache.courses) renderCourses(cache.courses.courses || []);
        if (cache.news) renderNews(cache.news.news || []);
        if (cache.events) renderEvents(cache.events.events || []);
        if (cache.gallery) renderGallery(cache.gallery.photos || []);
        if (cache.instructors) renderInstructors(cache.instructors.instructors || []);
    }

    var collections = ['settings', 'courses', 'news', 'events', 'gallery', 'instructors'];

    function needed(name) {
        if (name === 'settings') return true;
        if (name === 'courses') return !!(mount('courses-local') || mount('courses-intl') || mount('course-options'));
        return !!mount(name);
    }

    var wanted = collections.filter(needed);

    Promise.all(wanted.map(function (name) {
        return load(name).then(function (data) {
            if (data) cache[name] = data;
        });
    })).then(function () {
        lang = document.documentElement.lang === 'km' ? 'km' : 'en';
        renderAll();
    });

    document.addEventListener('sitelangchange', function (e) {
        lang = (e.detail && e.detail.lang) || (document.documentElement.lang === 'km' ? 'km' : 'en');
        renderAll();
    });
})();
