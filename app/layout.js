import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Script from "next/script";
import Footer from "@/components/footer/Footer";

export default function RootLayout({ children }) {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    name: "STS Infracon",
    url: "https://stsinfracon.com/",
  };

  return (
    <html lang="en">
      <link rel="icon" href="/fav.ico" />
      <meta
        name="google-site-verification"
        content="nMxasFPkEHrigkza5_oQa0fnHG9yOp1B2UFontjtDfk"
      />

      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-NPYBTQB223"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-NPYBTQB223');`,
        }}
      />
     
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-NPYBTQB223"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NPYBTQB223');
          `,
        }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-W3W8KSD5');;`,
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <head>
        {/* Stylesheets*/}
        <link rel="stylesheet" href="/assets/css/bootstrap.css" />
        <link rel="stylesheet" href="/assets/css/fonts.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>

      <body style={{ overflowX: "hidden" }}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W3W8KSD5"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {children}
        <Footer />
      </body>
    </html>
  );
}
