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
    (function(){
      setTimeout(()=>{
        const s = document.createElement('script');
        s.src = location.protocol === 'https:' 
          ? 'https://zz.bdstatic.com/linksubmit/push.js' 
          : 'http://push.zhanzhang.baidu.com/push.js';
        document.body.appendChild(s);
      }, 500);
    })();
