(function () {
    var current = 'all';

    function filter(category) {
        current = category;
        var tabs = document.querySelectorAll('.gallery-tab');
        var items = document.querySelectorAll('.gallery-item');
        if (!tabs.length || !items.length) return;

        for (var i = 0; i < items.length; i++) {
            var match = category === 'all' || items[i].getAttribute('data-category') === category;
            items[i].classList.toggle('is-hidden', !match);
        }
        for (var j = 0; j < tabs.length; j++) {
            var active = tabs[j].getAttribute('data-filter') === category;
            tabs[j].classList.toggle('active', active);
            tabs[j].setAttribute('aria-selected', active ? 'true' : 'false');
        }
    }

    document.addEventListener('click', function (e) {
        var tab = e.target.closest ? e.target.closest('.gallery-tab') : null;
        if (!tab) return;
        filter(tab.getAttribute('data-filter'));
    });

    document.addEventListener('cms:gallery', function () {
        filter(current);
    });
})();
