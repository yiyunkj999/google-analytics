//google analytics
(function() {
    const domain = 'analytics.123101.xyz/o9o4';
    const tongjiid = new URL(document.currentScript.src).searchParams.get('id');
    var script = document.createElement('script');
    script.async = true;
    script.src = `//${domain}/gtm.js?id=${tongjiid}`;
    document.head.appendChild(script);
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', tongjiid, {transport_url: domain});
})();

//baiud push
(function() {
    const s = document.createElement('script');
    s.async = true;
    s.src = '//zz.bdstatic.com/linksubmit/push.js';
    document.body.appendChild(s);
})();
