(function () {
    var video = document.querySelector('[data-video-bg]');
    var button = document.querySelector('[data-video-sound]');
    var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced) {
        if (video) {
            video.removeAttribute('autoplay');
            video.pause();
        }
        if (button) button.remove();
        return;
    }

    if (!video || !button) return;

    function sync() {
        var label = button.querySelector(video.muted ? '[data-sound-label-on]' : '[data-sound-label-off]');
        button.classList.toggle('is-on', !video.muted);
        button.setAttribute('aria-pressed', video.muted ? 'false' : 'true');
        if (label) button.setAttribute('aria-label', label.textContent.trim());
    }

    button.addEventListener('click', function () {
        video.muted = !video.muted;
        if (!video.muted) {
            var started = video.play();
            if (started && typeof started.catch === 'function') started.catch(function () {});
        }
        sync();
    });

    var triggers = document.querySelectorAll('[data-video-play], [data-home-video]');
    for (var i = 0; i < triggers.length; i++) {
        triggers[i].addEventListener('click', function () {
            video.muted = true;
            sync();
        });
    }

    document.addEventListener('sitelangchange', sync);
    sync();
})();
