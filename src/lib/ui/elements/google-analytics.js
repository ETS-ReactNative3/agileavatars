/* eslint-disable */

module.exports = ({ window, elements, io }) => ({ trackingId, enabled }) => {

    window.dataLayer = window.dataLayer ?? [];
    function gtag () { window.dataLayer.push(arguments); } 
    gtag('js', io.getDate());
    gtag('config', trackingId);
    window.gtag = gtag;
    window[`ga-disable-${trackingId}`] = !enabled;
    const src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    return elements.el('script', { src });
    
};
