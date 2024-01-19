"use client";
import { AllScriptLoad } from "@/constant/scriptFiles";
import React, { useEffect } from "react";
import ProjectData from "../../constant/ProjectData.json";
import Link from "next/link";

const Project = () => {
  useEffect(() => {
    AllScriptLoad();
  }, []);
  return (
    <div>
      <section className="bg-gray-7">
        <div className="breadcrumbs-custom box-transform-wrap context-dark">
          <div className="container">
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
