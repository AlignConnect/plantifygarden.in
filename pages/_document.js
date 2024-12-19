import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <input type="hidden" value="www.plantifygarden.com" id="sellerDomain" />
        <script
          src="https://fastrr-boost-ui.pickrr.com/assets/js/channels/shopify.js"
          defer
        ></script>
        <link
          rel="stylesheet"
          href="https://fastrr-boost-ui.pickrr.com/assets/styles/shopify.css"
        ></link>

        
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-64NTZCT9C3"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments)}
              gtag('js', new Date());

              gtag('config', 'G-64NTZCT9C3');
            `,
          }}
        ></script>

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-N94DSYJV7B"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments)}
              gtag('js', new Date());

              gtag('config', 'G-N94DSYJV7B');
            `,
          }}
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window["conversion_code"] = "AW-744816307/BBkPCKGdoc8ZELP9k-MC";
            `,
          }}
        />

        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `var flspdx = new Worker("data:text/javascript;base64," + btoa('onmessage=function(e){var t=new Request("https://raw.githubusercontent.com/gospeedify/files/main/speedreq.js",{redirect:"follow"});fetch(t).then(e=>e.text()).then(e=>{postMessage(e)})};'));flspdx.onmessage = function (t) {var e = document.createElement("script");e.type = "text/javascript", e.textContent = t.data, document.head.appendChild(e)}, flspdx.postMessage("init");`,
          }}
        ></script>
        <script
          type="text/javascript"
          data-flspd="1"
          dangerouslySetInnerHTML={{
            __html: `var flspdxHA=["hotjar","xklaviyo","recaptcha","gorgias","facebook.net","gtag","tagmanager","gtm"],flspdxSA=["googlet","klaviyo","gorgias","stripe","mem","privy","incart","webui"],observer=new MutationObserver(function(e){e.forEach(function(e){e.addedNodes.forEach(function(e){if("SCRIPT"===e.tagName&&1===e.nodeType)if(e.innerHTML.includes("asyncLoad")||"analytics"===e.className)e.type="text/flspdscript";else{for(var t=0;t<flspdxSA.length;t++)if(e.src.includes(flspdxSA[t]))return void(e.type="text/flspdscript");for(var r=0;r<flspdxHA.length;r++)if(e.innerHTML.includes(flspdxHA[r]))return void(e.type="text/flspdscript")}})})}),ua=navigator.userAgent.toLowerCase();ua.match(new RegExp("chrome|firefox"))&&-1===window.location.href.indexOf("no-optimization")&&observer.observe(document.documentElement,{childList:!0,subtree:!0});`,
          }}
        ></script>

        <script src="/speedmin.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
