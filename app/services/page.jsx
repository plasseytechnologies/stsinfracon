"use client";
import OurGallery from "@/components/gallery/OurGallery";
import { AllScriptLoad } from "@/constant/scriptFiles";
import Link from "next/link";
import React, { useEffect } from "react";
import WeOffers from "../../constant/WeOffers.json";

const Services = () => {
  useEffect(() => {
    AllScriptLoad();
  }, []);
  return (
    <div>
      <OurGallery data={WeOffers} name={"Our Services"} />
    </div>
  );
};

export default Services;
