"use client";
import OurGallery from "@/components/gallery/OurGallery";
import { AllScriptLoad } from "@/constant/scriptFiles";
import Link from "next/link";
import React, { useEffect } from "react";
import WeOffers from "../../constant/WeOffers.json";
import Header from "@/components/header/Header";
import Servicess from "../../constant/Servicess.json";

const Services = () => {
  useEffect(() => {
    AllScriptLoad();
  }, []);
  const Title = " Oue Services | STS Infracon Private Limited";
  const Description =
    "Discover excellence with STS Infracon comprehensive services, from Bidding & Tendering to Logistics & Supply Management. Elevate your projects with our expertise in legal, design, marketing, and more";
  const Url = "https://stsinfracon.com/services";
  const Keywords = "";
  return (
    <div>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{Title}</title>
        <meta name="description" content={Description} />
        {/* <link rel="icon" href="/icon.ico" sizes="any" /> */}
        <meta
          name="Keywords"
          content=" STS Infracon Pvt Ltd
          "
        />
        <meta property="og:title" content={Title} />
        <meta property="og:description" content={Description} />
        <meta
          property="og:image"
          content="	https://stsinfracon.com/assets/images/STS-logo.png"
        />
        <meta property="og:url" content={Url} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={Url} />
        <meta
          name="twitter:card"
          content="https://stsinfracon.com/assets/images/STS-logo.png"
        />
        <meta name="twitter:title" content={Title} />
        <meta name="twitter:description" content={Description} />
        <meta
          name="twitter:image"
          content="https://stsinfracon.com/assets/images/STS-logo.png"
        />
      </head>
      <Header />
      <section className="bg-gray-7">
        <div className="breadcrumbs-custom box-transform-wrap context-dark">
          <div className="container pt-10 sm:pt-0">
            <h3 className="breadcrumbs-custom-title">Services</h3>
            <div className="breadcrumbs-custom-decor" />
          </div>
          <div
            className="box-transform"
            style={{
              backgroundImage: "url(/assets/images/bg-typography.jpg)",
            }}
          />
        </div>
        <div className="container">
          <ul className="breadcrumbs-custom-path">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li className="active">Services</li>
          </ul>
        </div>
      </section>
      <OurGallery data={Servicess} name={"Our Services"} />
    </div>
  );
};

export default Services;
