(function () {
    var mount = document.getElementById('site-page-header');
    if (!mount) return;

    var title = mount.getAttribute('data-title') || '';
    var crumb = mount.getAttribute('data-crumb') || title;
    var home = mount.getAttribute('data-home') || 'Home';

    var html = [
        '<div class="container-xxl bg-dark hero-header page-hero">',
        '    <div class="container text-center">',
        '        <h1 class="display-3 text-white mb-3 animated slideInDown">' + title + '</h1>',
        '        <nav aria-label="breadcrumb">',
        '            <ol class="breadcrumb justify-content-center text-uppercase">',
        '                <li class="breadcrumb-item"><a href="index.html">' + home + '</a></li>',
        '                <li class="breadcrumb-item text-white active" aria-current="page">' + crumb + '</li>',
        '            </ol>',
        '        </nav>',
        '    </div>',
        '</div>'
    ].join('\n');

    mount.outerHTML = html;
})();
