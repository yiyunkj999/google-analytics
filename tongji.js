    //google analytics
    (function() {
      const domain = new URL(document.currentScript.src).origin;
      const tongjiid = new URL(document.currentScript.src).searchParams.get('id');
      var script = document.createElement('script');
      script.async = true;
      script.src = '//analytics.123101.xyz/o9o4/gtm.js?id='+tongjiid;
      ////www.googletagmanager.com/gtag/js
      document.head.appendChild(script);
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config',tongjiid);
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
