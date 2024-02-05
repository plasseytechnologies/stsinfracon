"use client";
import { AllScriptLoad } from "@/constant/scriptFiles";
import React, { useEffect } from "react";
import ProjectData from "../../constant/ProjectData.json";
import Link from "next/link";
import Header from "@/components/header/Header";

const Project = () => {
  useEffect(() => {
    AllScriptLoad();
  }, []);
  const Title =
    "Our Projects | Explore Our Diverse Portfolio of Engineering Excellence";
  const Description =
    "Dive into excellence with STS Infracon, your top choice for engineering and construction in India. Explore our projects online for a glimpse into innovation and quality craftsmanship";
  const Url = "https://stsinfracon.com/projects";
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
            <h3 className="breadcrumbs-custom-title">Projects</h3>
            <div className="breadcrumbs-custom-decor" />
          </div>
          <div
            className="box-transform"
            style={{ backgroundImage: "url(/assets/images/bg-typography.jpg)" }}
          />
        </div>
        <div className="container">
          <ul className="breadcrumbs-custom-path">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li className="active">Projects</li>
          </ul>
        </div>
      </section>
      {/* Services 2*/}
      <section className="section section-lg bg-default">
        <div className="container">
          <div className="isotope-wrap">
            {/* <div className="isotope-filters isotope-filters-horizontal">
              <button
                className="isotope-filters-toggle button button-sm button-icon button-icon-right button-gray-3"
                data-custom-toggle=".isotope-filters-list"
                data-custom-toggle-disable-on-blur="true"
              >
                <span className="icon mdi mdi-chevron-down" />
                Filter
              </button>
            </div> */}
            <div className="row ">
              {ProjectData.map((item) => (
                <>
                  <div className="col-md-6 isotope-item" data-filter="Type 1">
                    {/* Thumbnail Classic*/}
                    <article className="thumbnail thumbnail-classic thumbnail-lg">
                      <Link
                        className="thumbnail-classic-figure"
                        // data-lightgallery="item"
                        href={`/projects/${item.slug}`}
                      >
                        <img src={item?.img[0]} alt width={570} height={299} />
                      </Link>
                      <div className="thumbnail-classic-caption">
                        <h6 className="thumbnail-classic-title">
                          <Link href={`/projects/${item.slug}`}>
                            {item?.category}
                          </Link>
                        </h6>
                        <div className="thumbnail-classic-time">
                          {/* <time dateTime="2021-04-05">April 05, 2021</time> */}
                        </div>
                      </div>
                    </article>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
