/*
 * Shared search + category filtering for list pages.
 *
 * A page marks a wrapper with [data-filter-scope]. Inside it:
 *   [data-filter-search]    – text input used as the search query
 *   [data-filter-category]  – category chip/button (value in the attribute)
 *   [data-filter-item]      – filtered card/row (optional data-category,
 *                             space-separated; optional data-search text)
 *   [data-filter-section]   – group hidden when it has no visible items
 *   [data-filter-empty]     – message shown when nothing matches
 *
 * Hidden elements get the .filtered-out class, so pages keep their own
 * display rules. Filters are re-applied whenever the CMS re-renders.
 */
(function () {
    'use strict';

    function normalize(value) {
        return String(value || '').toLowerCase().replace(/\s+/g, ' ').trim();
    }

    function state(scope) {
        if (!scope.__filterState) scope.__filterState = { category: 'all', query: '' };
        return scope.__filterState;
    }

    function haystack(item) {
        return normalize((item.getAttribute('data-search') || '') + ' ' + item.textContent);
    }

    function apply(scope) {
        var current = state(scope);
        var query = normalize(current.query);
        var items = Array.prototype.slice.call(scope.querySelectorAll('[data-filter-item]'));
        var visible = 0;

        items.forEach(function (item) {
            var categories = (item.getAttribute('data-category') || '').split(/\s+/);
            var inCategory = current.category === 'all' || categories.indexOf(current.category) !== -1;
            var inQuery = !query || haystack(item).indexOf(query) !== -1;
            var show = inCategory && inQuery;
            item.classList.toggle('filtered-out', !show);
            if (show) {
                visible++;
                // WOW.js leaves hidden reveal boxes inline-hidden; unhide them
                // so a card that was filtered out is visible when it returns.
                if (item.style.visibility === 'hidden') item.style.visibility = '';
            }
        });

        scope.querySelectorAll('[data-filter-section]').forEach(function (section) {
            var shown = section.querySelectorAll('[data-filter-item]:not(.filtered-out)').length;
            section.classList.toggle('filtered-out', shown === 0);
        });

        scope.querySelectorAll('[data-filter-empty]').forEach(function (el) {
            el.hidden = visible !== 0;
        });

        scope.querySelectorAll('[data-filter-category]').forEach(function (chip) {
            var active = chip.getAttribute('data-filter-category') === current.category;
            chip.classList.toggle('active', active);
            if (chip.getAttribute('role') === 'tab') {
                chip.setAttribute('aria-selected', active ? 'true' : 'false');
            } else {
                chip.setAttribute('aria-pressed', active ? 'true' : 'false');
            }
        });
    }

    function scopeOf(el) {
        return el.closest ? el.closest('[data-filter-scope]') : null;
    }

    function applyAll() {
        document.querySelectorAll('[data-filter-scope]').forEach(apply);
    }

    document.addEventListener('input', function (e) {
        var input = e.target.closest ? e.target.closest('[data-filter-search]') : null;
        if (!input) return;
        var scope = scopeOf(input);
        if (!scope) return;
        state(scope).query = input.value;
        apply(scope);
    });

    document.addEventListener('click', function (e) {
        var chip = e.target.closest ? e.target.closest('[data-filter-category]') : null;
        if (!chip) return;
        var scope = scopeOf(chip);
        if (!scope) return;
        state(scope).category = chip.getAttribute('data-filter-category') || 'all';
        apply(scope);
    });

    document.addEventListener('cms:rendered', applyAll);

    // i18n translates static fallbacks in its own listener; wait a tick so
    // the search runs against the text of the new language.
    document.addEventListener('sitelangchange', function () {
        setTimeout(applyAll, 0);
    });

    applyAll();
})();
