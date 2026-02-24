import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/component/partial/Header";
import Footer from "@/component/partial/Footer";
import Script from "next/script";


export const metadata = {
  title: "BrandStory Global",
  description:
    "BrandStory Global is a full-service digital marketing and technology agency delivering growth-focused strategies, campaigns, and development.",
  verification: {
    google: "X2GZd5fccCp2LKMZqSoTyGSxXE91RM7aF9t70UKwEjQ",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          dangerouslySetInnerHTML={{
            __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PWWSNR99');
        `,
          }}
        />
        <meta name="google-site-verification" content="X2GZd5fccCp2LKMZqSoTyGSxXE91RM7aF9t70UKwEjQ" />
      </head>
      <body>
        <noscript dangerouslySetInnerHTML={{
          __html: `
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PWWSNR99"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>
        `
        }} />
        <Header />
        {children}
        <Footer />
      </body>

    </html>
  );
}
