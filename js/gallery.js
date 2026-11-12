(function () {
    var tabs = document.querySelectorAll('.gallery-tab');
    var items = document.querySelectorAll('.gallery-item');
    if (!tabs.length || !items.length) return;

    function filter(category) {
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

    for (var i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', function () {
            filter(this.getAttribute('data-filter'));
        });
    }
})();
