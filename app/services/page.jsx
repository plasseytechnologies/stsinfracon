"use client";
import OurGallery from "@/components/gallery/OurGallery";
import { AllScriptLoad } from "@/constant/scriptFiles";
import Link from "next/link";
import React, { useEffect } from "react";
import WeOffers from "../../constant/WeOffers.json";
import Header from "@/components/header/Header";

const Services = () => {
  useEffect(() => {
    AllScriptLoad();
  }, []);
  return (
    <div>
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
      <OurGallery data={WeOffers} name={"Our Services"} />
    </div>
  );
};

export default Services;
