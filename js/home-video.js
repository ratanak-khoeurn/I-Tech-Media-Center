(function () {
    var background = document.querySelector('.video-bg');
    if (background && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        background.removeAttribute('autoplay');
        background.pause();
    }

    var trigger = document.querySelector('[data-home-video]');
    var modalEl = document.getElementById('homeVideoModal');
    if (!trigger || !modalEl || typeof bootstrap === 'undefined') return;

    var frame = modalEl.querySelector('[data-home-video-frame]');
    var player = null;

    trigger.addEventListener('click', function (event) {
        event.preventDefault();
        if (!frame) {
            window.open(trigger.getAttribute('href'), '_blank', 'noopener');
            return;
        }
        if (!player) {
            player = document.createElement('video');
            player.src = trigger.getAttribute('href');
            player.controls = true;
            player.autoplay = true;
            player.playsInline = true;
            player.setAttribute('preload', 'none');
            frame.appendChild(player);
        }
        (bootstrap.Modal.getInstance(modalEl) || new bootstrap.Modal(modalEl)).show();
    });

    modalEl.addEventListener('hidden.bs.modal', function () {
        if (player) player.pause();
    });
})();
