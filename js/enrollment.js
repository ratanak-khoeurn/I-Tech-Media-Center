(function () {
    var frame = document.querySelector('.enrollment-frame');
    if (!frame) return;

    var base = frame.getAttribute('data-form');
    var lang = document.documentElement.lang === 'km' ? 'km' : 'en';
    frame.setAttribute('src', base + '?embedded=true&hl=' + lang);
})();
