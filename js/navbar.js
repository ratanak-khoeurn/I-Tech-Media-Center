(function () {
    var file = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
    if (!/\.html?$/.test(file)) {
        file = 'index.html';
    }

    var pages = ['booking.html', 'team.html', 'testimonial.html', 'news.html', 'event.html', 'gallery.html'];
    var onPages = pages.indexOf(file) !== -1;

    function navLink(href, label) {
        return '<a href="' + href + '" class="nav-item nav-link' + (file === href ? ' active' : '') + '">' + label + '</a>';
    }

    var html = [
        '<nav class="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">',
        '    <a href="index.html" class="navbar-brand p-0">',
        '        <div class="brand-logos d-flex justify-content-center align-items-center">',
        '            <img src="img/itech-logo.png" alt="I-Tech Media" class="brand-logo itech-logo">',
        '            <div class="logo-divider"></div>',
        '            <img src="img/pearson-logo-nav.png" alt="Pearson Silver Partner" class="brand-logo pearson-logo">',
        '        </div>',
        '    </a>',
        '    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">',
        '        <span class="fa fa-bars"></span>',
        '    </button>',
        '    <div class="collapse navbar-collapse" id="navbarCollapse">',
        '        <div class="navbar-nav ms-auto py-0 pe-4">',
        '            ' + navLink('index.html', 'Home'),
        '            ' + navLink('about.html', 'About'),
        '            ' + navLink('service.html', 'Services'),
        '            ' + navLink('menu.html', 'Courses'),
        '            <div class="nav-item dropdown">',
        '                <a href="#" class="nav-link dropdown-toggle' + (onPages ? ' active' : '') + '" data-bs-toggle="dropdown">Pages</a>',
        '                <div class="dropdown-menu m-0">',
        '                    <a href="booking.html" class="dropdown-item">Enroll</a>',
        '                    <a href="team.html" class="dropdown-item">Instructors</a>',
        '                    <a href="testimonial.html" class="dropdown-item">Testimonials</a>',
        '                    <a href="news.html" class="dropdown-item">News &amp; Updates</a>',
        '                    <a href="event.html" class="dropdown-item">Events</a>',
        '                    <a href="gallery.html" class="dropdown-item">Gallery</a>',
        '                </div>',
        '            </div>',
        '            ' + navLink('contact.html', 'Contact'),
        '            <div class="nav-item dropdown language-switcher">',
        '                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-label="Change language"><i class="fa fa-globe me-1"></i><span class="lang-label">EN</span></a>',
        '                <div class="dropdown-menu m-0">',
        '                    <a href="#" class="dropdown-item" data-lang="en">English</a>',
        '                    <a href="#" class="dropdown-item" data-lang="km">ខ្មែរ</a>',
        '                </div>',
        '            </div>',
        '        </div>',
        '        <a href="booking.html" class="btn btn-primary py-2 px-4">Enroll Now</a>',
        '    </div>',
        '</nav>'
    ].join('\n');

    var mount = document.getElementById('site-navbar');
    if (mount) {
        mount.outerHTML = html;
    }
})();
