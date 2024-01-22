import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Script from "next/script";
import Footer from "@/components/footer/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="format-detection" content="telephone=no" />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <meta charSet="utf-8" />

        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>STS INFRACON PRIVATE LIMITED</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/assets/images/Logo-2-png" type="image/x-icon" />

        {/* Stylesheets*/}

        <link
          rel="stylesheet"
          type="text/css"
          href="/fonts.googleapis.com/css?family=Roboto:100,300,300i,400,500,600,700,900%7CRaleway:500"
        />
        <link rel="stylesheet" href="/assets/css/bootstrap.css" />
        <link rel="stylesheet" href="/assets/css/fonts.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <Script src="/assets/js/core.min.js" />
        <Script src="/assets/js/3ts2ksMwXvKRuG480KNifJ2_JNM.js" />
        <Script src="/assets/js/4o300efCt-CXoq1JEC-sVReFz48.js" />
        <Script src="/assets/js/script.js" />
      </head>

      <body style={{ overflowX: "hidden" }}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
