import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOComponent = ({ 
  title, 
  description, 
  hreflang = 'en-IN', 
  googleTagId = 'G-N6KNX32Z0S',
  gtmId = 'GTM-K2SPNVC',
  googleVerificationContent = 'GSOVovotv43mjiqSYeTtfMYCpPrFLOM1QKfDJcNGuE0'
}) => {
  return (
    <Helmet>
      {/* Google Site Verification */}
      <meta name="google-site-verification" content={googleVerificationContent} />

      {/* Hreflang Tags */}
      <link rel="alternate" hrefLang={hreflang} href="https://www.thunderauto.com" />
      <link rel="alternate" hrefLang="en" href="https://www.thunderauto.com" />

      {/* Google Analytics Tag */}
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${googleTagId}`} />
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${googleTagId}');
        `}
      </script>

      {/* Google Tag Manager Script */}
      <script>
        {`
          (function(w,d,s,l,i){
            w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),
                dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${gtmId}');
        `}
      </script>

      {/* Google Tag Manager (noscript) */}
      <noscript>
        {`<iframe 
          src="https://www.googletagmanager.com/ns.html?id=${gtmId}" 
          height="0" 
          width="0" 
          style="display:none;visibility:hidden"
        ></iframe>`}
      </noscript>

      {/* Page Title and Description */}
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default SEOComponent;