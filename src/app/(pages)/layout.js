import "./globals.css";
import Header from "@/component/partial/Header";
import Footer from "@/component/partial/Footer";
import Script from "next/script";
import { ConsentProvider } from "@/component/consent/ConsentProvider";
import { LEGAL_CONFIG } from "@/config/legal";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: "BrandStory Global",
  applicationName: "BrandStory Global",
  description:
    "BrandStory Global is a full-service digital marketing and technology agency delivering growth-focused strategies, campaigns, and development.",
  verification: {
    google: "X2GZd5fccCp2LKMZqSoTyGSxXE91RM7aF9t70UKwEjQ",
  },
  openGraph: {
    siteName: "BrandStory Global",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon-24x24.png", sizes: "24x24", type: "image/png" },
      { url: "/favicon-50x50.png", sizes: "50x50", type: "image/png" },
      { url: "/favicon-150x150.png", sizes: "150x150", type: "image/png" },
    ],
  },
};

const consentBootstrap = `
(function(){
  var KEY='${LEGAL_CONFIG.CONSENT_STORAGE_KEY}';
  window.dataLayer=window.dataLayer||[];
  function gtag(){window.dataLayer.push(arguments);}
  window.gtag=window.gtag||gtag;
  var denied={
    ad_storage:'denied',
    analytics_storage:'denied',
    ad_user_data:'denied',
    ad_personalization:'denied',
    functionality_storage:'granted',
    security_storage:'granted',
    personalization_storage:'denied',
    wait_for_update:500
  };
  gtag('consent','default',denied);
  try{
    var raw=localStorage.getItem(KEY);
    if(raw){
      var rec=JSON.parse(raw);
      var c=rec&&rec.categories?rec.categories:{};
      var gpc=!!(navigator.globalPrivacyControl);
      var advertising=gpc?false:!!c.advertising;
      gtag('consent','update',{
        ad_storage:advertising?'granted':'denied',
        analytics_storage:c.analytics?'granted':'denied',
        ad_user_data:advertising?'granted':'denied',
        ad_personalization:advertising?'granted':'denied',
        personalization_storage:c.experience?'granted':'denied'
      });
    }else if(navigator.globalPrivacyControl){
      gtag('consent','update',{
        ad_storage:'denied',
        ad_user_data:'denied',
        ad_personalization:'denied'
      });
    }
  }catch(e){}
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          id="bsg-consent-default"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: consentBootstrap }}
        />
        <Script
          id="bsg-gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${LEGAL_CONFIG.GTM_ID}');
        `,
          }}
        />
      </head>
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
        <iframe src="https://www.googletagmanager.com/ns.html?id=${LEGAL_CONFIG.GTM_ID}"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>
        `,
          }}
        />
        <ConsentProvider>
          <Header />
          {children}
          <Footer />
        </ConsentProvider>
      </body>
    </html>
  );
}
