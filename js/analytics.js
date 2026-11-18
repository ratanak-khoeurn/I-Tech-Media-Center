(function () {
    // GA4 Measurement ID: Analytics Admin > Data Streams > your web stream.
    // Until this is replaced with a real ID, analytics stays off.
    var GA_MEASUREMENT_ID = "G-SDWS7SLCY1";

    if (!/^G-[A-Z0-9]{8,}$/.test(GA_MEASUREMENT_ID) || GA_MEASUREMENT_ID === 'G-SDWS7SLCY1') return;
    if (location.protocol === 'file:') return;

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID);

    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_MEASUREMENT_ID;
    document.head.appendChild(script);
})();
