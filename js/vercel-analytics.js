/**
 * Vercel Web Analytics Integration
 * 
 * This script initializes Vercel Web Analytics for the site.
 * Uses the script injection method recommended for static HTML sites.
 * 
 * Documentation: https://vercel.com/docs/analytics/quickstart
 */

(function() {
    // Initialize the analytics queue
    window.va = window.va || function () { 
        (window.vaq = window.vaq || []).push(arguments); 
    };
    
    // Note: The actual analytics script will be served by Vercel
    // when the site is deployed. This creates the queue that collects
    // events until the script loads.
    
    console.log('Vercel Web Analytics initialized');
})();
