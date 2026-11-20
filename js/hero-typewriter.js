(function () {
    'use strict';

    var root = document.querySelector('[data-type-hero]');
    if (!root) return;

    var lines = Array.prototype.slice.call(root.querySelectorAll('[data-type-line]'));
    if (!lines.length) return;

    var reducedMotion = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
    var START_DELAY = 650;
    var CHAR_DELAY = 45;
    var PAUSE_DELAY = 260;
    var HOLD_DELAY = 2600;
    var ERASE_DELAY = 30;
    var RESTART_DELAY = 450;

    var timer = null;
    var full = [];
    var pieces = [];
    var texts = {};
    var lineIndex = 0;
    var charIndex = 0;

    function graphemes(value, code) {
        if (window.Intl && Intl.Segmenter) {
            var segmenter = new Intl.Segmenter(code, { granularity: 'grapheme' });
            return Array.from(segmenter.segment(value), function (part) { return part.segment; });
        }
        return Array.from(value);
    }

    // Keep one full copy per language. The nodes themselves are rewritten while
    // typing, so they can no longer be trusted after a language switch.
    function strings(code) {
        if (!texts[code]) {
            texts[code] = lines.map(function (line) { return line.textContent; });
        }
        return texts[code];
    }

    function markTyping(i) {
        lines.forEach(function (line, n) {
            line.parentNode.classList.toggle('is-typing', n === i);
        });
    }

    function schedule(fn, delay) {
        timer = window.setTimeout(fn, delay);
    }

    function stop() {
        if (timer) {
            window.clearTimeout(timer);
            timer = null;
        }
        markTyping(-1);
    }

    function renderFull() {
        lines.forEach(function (line, i) { line.textContent = full[i]; });
    }

    function typeNext() {
        if (lineIndex >= lines.length) {
            markTyping(lines.length - 1);
            schedule(erase, HOLD_DELAY);
            return;
        }

        var parts = pieces[lineIndex];
        if (charIndex < parts.length) {
            charIndex++;
            lines[lineIndex].textContent = parts.slice(0, charIndex).join('');
            markTyping(lineIndex);
            var last = parts[charIndex - 1];
            var delay = CHAR_DELAY;
            if (charIndex === parts.length) delay = PAUSE_DELAY;
            else if (/[,.;:]$/.test(last)) delay = PAUSE_DELAY;
            schedule(typeNext, delay);
        } else {
            lineIndex++;
            charIndex = 0;
            schedule(typeNext, 0);
        }
    }

    function typeStart(delay) {
        lineIndex = 0;
        charIndex = 0;
        lines.forEach(function (line) { line.textContent = ''; });
        markTyping(0);
        schedule(typeNext, delay);
    }

    function erase() {
        lineIndex = lines.length - 1;
        charIndex = pieces[lineIndex].length;
        eraseNext();
    }

    function eraseNext() {
        if (lineIndex < 0) {
            markTyping(-1);
            schedule(function () { typeStart(250); }, RESTART_DELAY);
            return;
        }

        var parts = pieces[lineIndex];
        if (charIndex === 0) {
            lineIndex--;
            if (lineIndex >= 0) {
                charIndex = pieces[lineIndex].length;
                markTyping(lineIndex);
            }
            schedule(eraseNext, ERASE_DELAY);
            return;
        }

        charIndex--;
        lines[lineIndex].textContent = parts.slice(0, charIndex).join('');
        markTyping(lineIndex);
        schedule(eraseNext, ERASE_DELAY);
    }

    function start(code) {
        var next = strings(code);
        stop();
        full = next;
        root.setAttribute('aria-label', full.join(' '));

        if (reducedMotion && reducedMotion.matches) {
            renderFull();
            return;
        }

        pieces = full.map(function (value) { return graphemes(value, code); });
        typeStart(START_DELAY);
    }

    // Restore the full text before the language switch translates the nodes.
    document.addEventListener('click', function (event) {
        var link = event.target.closest && event.target.closest('[data-lang]');
        if (!link) return;
        stop();
        renderFull();
    }, true);

    document.addEventListener('sitelangchange', function (event) {
        start((event.detail && event.detail.lang) || document.documentElement.lang);
    });

    start(document.documentElement.lang);
})();
