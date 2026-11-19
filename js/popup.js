(function () {
    var SETTINGS_URL = 'content/settings.json';
    var SHOW_DELAY = 1200;
    var STORAGE_PREFIX = 'promoDismissed:';

    var overlay = null;
    var dialog = null;
    var track = null;
    var viewport = null;
    var closeBtn = null;
    var dotsBox = null;
    var slides = [];
    var dots = [];
    var navBtns = [];
    var index = 0;
    var timer = null;
    var lastFocus = null;
    var promo = null;

    function lang() {
        return document.documentElement.lang === 'km' ? 'km' : 'en';
    }

    function pick(item, key) {
        var value = item[key + '_' + lang()];
        if (value == null || value === '') value = item[key + '_en'];
        return value == null ? '' : value;
    }

    function media(src) {
        if (!src) return '';
        if (/^(https?:)?\/\//.test(src) || src.charAt(0) === '/' || src.indexOf('img/') === 0) return src;
        return 'img/' + src;
    }

    function readDismissed(id) {
        try {
            return parseInt(localStorage.getItem(STORAGE_PREFIX + id), 10) || 0;
        } catch (e) {
            return 0;
        }
    }

    function markDismissed(id) {
        try {
            localStorage.setItem(STORAGE_PREFIX + id, String(Date.now()));
        } catch (e) {}
    }

    function isDismissed(item) {
        var days = Number(item.dismiss_days);
        if (!days || days < 1) days = 7;
        return Date.now() - readDismissed(item.id || 'promotions') < days * 86400000;
    }

    function setToggleLabels() {
        var km = lang() === 'km';
        closeBtn.setAttribute('aria-label', km ? 'បិទ' : 'Close');
        if (navBtns.length) {
            navBtns[0].setAttribute('aria-label', km ? 'ការផ្សព្វផ្សាយមុន' : 'Previous promotion');
            navBtns[1].setAttribute('aria-label', km ? 'ការផ្សព្វផ្សាយបន្ទាប់' : 'Next promotion');
        }
        dots.forEach(function (dot, i) {
            dot.setAttribute('aria-label', km ? 'បង្ហាញការផ្សព្វផ្សាយ ' + (i + 1) : 'Show promotion ' + (i + 1));
        });
    }

    function render() {
        if (!dialog || !promo) return;
        promo.slides.forEach(function (slide, i) {
            var el = slides[i];
            el.querySelector('.promo-eyebrow').textContent = pick(slide, 'eyebrow');
            el.querySelector('.promo-title').textContent = pick(slide, 'title');
            el.querySelector('.promo-text').textContent = pick(slide, 'text');

            var cta = el.querySelector('.promo-cta');
            cta.textContent = pick(slide, 'cta');
            cta.href = slide.cta_url || 'booking.html';

            var secondary = el.querySelector('.promo-link');
            secondary.textContent = pick(slide, 'secondary');
            secondary.href = slide.secondary_url || 'menu.html';
            secondary.hidden = !secondary.textContent;

            el.querySelector('.promo-media img').alt = pick(slide, 'image_alt');
        });
        setToggleLabels();
    }

    function stopAuto() {
        if (timer) {
            window.clearInterval(timer);
            timer = null;
        }
    }

    function armAuto() {
        stopAuto();
        var seconds = Number(promo.autoplay_seconds);
        if (!seconds || seconds < 3 || slides.length < 2) return;
        if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        timer = window.setInterval(function () {
            if (overlay.matches && overlay.matches(':hover')) return;
            goTo(index + 1, false);
        }, seconds * 1000);
    }

    function ensureImage(i) {
        var slide = promo.slides[i];
        if (!slide || !slide.image) return;
        var image = slides[i].querySelector('.promo-media img');
        if (image && !image.getAttribute('src')) image.src = media(slide.image);
    }

    function goTo(i, fromUser) {
        index = ((i % slides.length) + slides.length) % slides.length;
        ensureImage(index);
        ensureImage((index + 1) % slides.length);
        track.style.transform = 'translateX(' + (-index * 100) + '%)';
        slides.forEach(function (el, n) {
            var active = n === index;
            el.setAttribute('aria-hidden', active ? 'false' : 'true');
            el.querySelectorAll('a[href], button').forEach(function (item) {
                item.tabIndex = active ? 0 : -1;
            });
        });
        dots.forEach(function (dot, n) {
            dot.classList.toggle('active', n === index);
            if (n === index) dot.setAttribute('aria-current', 'true');
            else dot.removeAttribute('aria-current');
        });
        dialog.setAttribute('aria-labelledby', 'promoTitle' + index);
        slides[index].querySelector('.promo-body').scrollTop = 0;
        if (fromUser) armAuto();
    }

    function close() {
        if (!overlay || !overlay.classList.contains('show')) return;
        stopAuto();
        overlay.classList.remove('show');
        overlay.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('promo-open');
        markDismissed(promo.id || 'promotions');
        if (lastFocus && lastFocus.focus) lastFocus.focus();
    }

    function open() {
        if (!overlay) return;
        render();
        goTo(0, false);
        lastFocus = document.activeElement;
        overlay.setAttribute('aria-hidden', 'false');
        overlay.classList.add('show');
        document.body.classList.add('promo-open');
        closeBtn.focus();
        armAuto();
    }

    function slideHTML(i) {
        return [
            '<section class="promo-slide" aria-hidden="true">',
            '    <div class="promo-media"><img decoding="async" alt=""></div>',
            '    <div class="promo-body">',
            '        <span class="promo-eyebrow"></span>',
            '        <h3 class="promo-title" id="promoTitle' + i + '"></h3>',
            '        <p class="promo-text"></p>',
            '        <div class="promo-actions">',
            '            <a class="btn btn-primary promo-cta"></a>',
            '            <a class="promo-link"></a>',
            '        </div>',
            '    </div>',
            '</section>'
        ].join('\n');
    }

    function build() {
        overlay = document.createElement('div');
        overlay.className = 'promo-overlay';
        overlay.id = 'coursePromo';
        overlay.setAttribute('aria-hidden', 'true');
        overlay.innerHTML = [
            '<div class="promo-dialog" role="dialog" aria-modal="true">',
            '    <button type="button" class="promo-close" aria-label="Close"><span class="fa fa-times"></span></button>',
            '    <div class="promo-viewport"><div class="promo-track"></div></div>',
            '    <button type="button" class="promo-nav promo-prev"><span class="fa fa-chevron-left"></span></button>',
            '    <button type="button" class="promo-nav promo-next"><span class="fa fa-chevron-right"></span></button>',
            '    <div class="promo-dots"></div>',
            '</div>'
        ].join('\n');
        document.body.appendChild(overlay);

        dialog = overlay.querySelector('.promo-dialog');
        viewport = overlay.querySelector('.promo-viewport');
        track = overlay.querySelector('.promo-track');
        closeBtn = overlay.querySelector('.promo-close');
        dotsBox = overlay.querySelector('.promo-dots');
        navBtns = [overlay.querySelector('.promo-prev'), overlay.querySelector('.promo-next')];

        track.innerHTML = promo.slides.map(function (slide, i) { return slideHTML(i); }).join('');
        slides = Array.prototype.slice.call(track.children);

        promo.slides.forEach(function (slide, i) {
            var dot = document.createElement('button');
            dot.type = 'button';
            dot.className = 'promo-dot';
            dot.addEventListener('click', function () { goTo(i, true); });
            dotsBox.appendChild(dot);
        });
        dots = Array.prototype.slice.call(dotsBox.children);

        var multi = slides.length > 1;
        navBtns[0].hidden = !multi;
        navBtns[1].hidden = !multi;
        dotsBox.hidden = !multi;

        navBtns[0].addEventListener('click', function () { goTo(index - 1, true); });
        navBtns[1].addEventListener('click', function () { goTo(index + 1, true); });
        closeBtn.addEventListener('click', close);

        slides.forEach(function (el) {
            el.querySelector('.promo-cta').addEventListener('click', function () {
                markDismissed(promo.id || 'promotions');
            });
            el.querySelector('.promo-link').addEventListener('click', function () {
                markDismissed(promo.id || 'promotions');
            });
        });

        overlay.addEventListener('click', function (e) {
            if (e.target === overlay) close();
        });

        var touchX = null;
        viewport.addEventListener('touchstart', function (e) {
            touchX = e.touches[0].clientX;
        }, { passive: true });
        viewport.addEventListener('touchend', function (e) {
            if (touchX === null) return;
            var dx = e.changedTouches[0].clientX - touchX;
            touchX = null;
            if (Math.abs(dx) > 40) goTo(index + (dx < 0 ? 1 : -1), true);
        });

        document.addEventListener('keydown', function (e) {
            if (!overlay.classList.contains('show')) return;
            if (e.key === 'Escape' || e.keyCode === 27) {
                close();
                return;
            }
            if ((e.key === 'ArrowLeft' || e.key === 'ArrowRight') && slides.length > 1) {
                e.preventDefault();
                goTo(index + (e.key === 'ArrowRight' ? 1 : -1), true);
                return;
            }
            if (e.key === 'Tab') {
                var items = Array.prototype.filter.call(
                    dialog.querySelectorAll('a[href], button:not([disabled])'),
                    function (item) { return item.tabIndex !== -1; }
                );
                if (!items.length) return;
                var first = items[0];
                var last = items[items.length - 1];
                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        });

        document.addEventListener('sitelangchange', render);
    }

    function start() {
        var show = function () {
            if (promo && !isDismissed(promo)) {
                window.setTimeout(open, SHOW_DELAY);
            }
        };
        if (document.readyState === 'complete') show();
        else window.addEventListener('load', show);
    }

    fetch(SETTINGS_URL, { cache: 'no-store' })
        .then(function (res) { return res.ok ? res.json() : null; })
        .then(function (json) {
            var item = json && json.promotions;
            if (!item || !item.enabled) return;
            if (!item.slides || !item.slides.length) return;
            promo = item;
            build();
            start();
        })
        .catch(function () {});
})();
