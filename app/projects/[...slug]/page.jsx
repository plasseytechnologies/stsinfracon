"use client";
import { AllScriptLoad } from "@/constant/scriptFiles";
import React, { useEffect } from "react";
import ProjectData from "../../../constant/ProjectData.json";
import Link from "next/link";
import Header from "@/components/header/Header";

const ProjectDetails = ({ params }) => {
  const slug = params.slug[0];
  useEffect(() => {
    AllScriptLoad();
  }, []);
  const data = ProjectData.filter((item) => item.slug == slug);
  const [projectsData] = data;

  return (
    <div className>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{projectsData?.metaTitle}</title>
        <meta name="description" content={projectsData?.metaDescription} />
        {/* <link rel="icon" href="/icon.ico" sizes="any" /> */}
        <meta
          name="Keywords"
          content=" STS Infracon Pvt Ltd
          "
        />
        <meta property="og:title" content={projectsData?.metaTitle} />
        <meta
          property="og:description"
          content={projectsData?.metaDescription}
        />
        <meta
          property="og:image"
          content="	https://stsinfracon.com/assets/images/STS-logo.png"
        />
        <meta
          property="og:url"
          content={`https://stsinfracon.com/projects/${slug}`}
        />
        <meta property="og:type" content="website" />
        <link
          rel="canonical"
          href={`https://stsinfracon.com/projects/${slug}`}
        />
        <meta
          name="twitter:card"
          content="https://stsinfracon.com/assets/images/STS-logo.png"
        />
        <meta name="twitter:title" content={projectsData?.metaTitle} />
        <meta
          name="twitter:description"
          content={projectsData?.metaDescription}
        />
        <meta
          name="twitter:image"
          content="https://stsinfracon.com/assets/images/STS-logo.png"
        />
      </head>
      <Header />
      <div>
        <section className="bg-gray-7">
          <div className="breadcrumbs-custom box-transform-wrap context-dark">
            <div className="container pt-10 sm:pt-0">
              <h3 className="breadcrumbs-custom-title">
                {projectsData?.category}
              </h3>
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
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li className="active">{projectsData?.category}</li>
            </ul>
          </div>
        </section>
        {/* Project Page*/}
        <section className="section section-lg bg-default text-md-left">
          <div className="container">
            <div className="row row-60 flex-lg-row-reverse">
              <div className="col-lg-6 col-xl-7">
                <div className="slick-project">
                  {/* Slick Carousel*/}
                  <div
                    className="slick-slider carousel-parent"
                    data-arrows="true"
                    data-autoplay="true"
                    data-swipe="true"
                    data-items={1}
                    data-child="#child-carousel-7"
                    data-for="#child-carousel-7"
                    data-slide-effect="true"
                  >
                    {projectsData?.img?.map((img, i) => (
                      <>
                        <div className="item">
                          <img src={img} alt width={670} height={477} />
                          <div className="slick-project-caption">
                            <div className="slick-project-title">
                              Photo #{i + 1}
                            </div>
                          </div>
                        </div>
                      </>
                    ))}
                  </div>
                  <div
                    className="slick-slider child-carousel"
                    id="child-carousel-7"
                    data-for=".carousel-parent"
                    data-items={3}
                    data-sm-items={3}
                    data-md-items={4}
                    data-lg-items={3}
                    data-xl-items={4}
                    data-slide-to-scroll={1}
                  >
                    {projectsData?.img.map((img) => (
                      <>
                        <div className="item">
                          <img src={img} alt width={670} height={477} />
                        </div>
                      </>
                    ))}
                  </div>
                </div>
                <div
                  className="owl-carousel owl-style-3 dots-style-2"
                  data-items={1}
                  data-sm-items={1}
                  data-lg-items={1}
                  data-margin={30}
                  data-autoplay="true"
                  data-dots="true"
                  data-animation-in="fadeIn"
                  data-animation-out="fadeOut"
                >
                  {projectsData?.ourprojects?.map((item) => (
                    <div className="table-custom-responsive">
                      <table className="table-custom table-custom-primary table-project">
                        <tbody>
                          <tr>
                            <td>
                              <span className={item?.icon} />
                            </td>
                            <td
                              style={{ color: "black", fontWeight: "bolder" }}
                            >
                              {item?.project}
                            </td>
                          </tr>
                          {/* <tr>
                        <td>
                          <span className="icon mdi mdi-calendar-today" />
                        </td>
                        <td>
                          <span>Year:</span> 2010
                        </td>
                      </tr> */}
                          <tr>
                            <td>
                              <span className="icon mdi mdi-map-marker" />
                            </td>
                            <td
                              style={{ color: "black", fontWeight: "bolder" }}
                            >
                              {item?.location}
                            </td>
                          </tr>
                          {/* <tr>
                            <td>
                              <span className="icon icon-28 mdi mdi-cash" />
                            </td>
                            <td
                              style={{ color: "black", fontWeight: "bolder" }}
                            >
                              {item?.price} $
                            </td>
                          </tr> */}
                        </tbody>
                      </table>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-lg-6 col-xl-5">
                <div className="project-page">
                  <h4>{projectsData?.category}</h4>
                  <p>{projectsData?.introduction}</p>
                  <h6 className="mt-3 text-[#ef7c14] font-bold">Expertise</h6>
                  {Object?.keys(projectsData?.expertise)?.map((key) => (
                    <p key={key}>
                      <strong>{key}</strong>:{" "}
                      {projectsData.expertise[key].description}
                      <ul>
                        {projectsData.expertise[key].highlights &&
                          projectsData.expertise[key].highlights.map(
                            (highlight, i) => <li key={i}>{highlight}</li>
                          )}
                      </ul>
                    </p>
                  ))}
                  <h6 className="my-3 text-[#ef7c14] font-bold">Impact</h6>
                  <ul>
                    {Object?.keys(projectsData.impact)?.map((key) => (
                      <li key={key}>
                        <strong>{key}</strong>: {projectsData.impact[key]}
                      </li>
                    ))}
                  </ul>

                  <div className="group-sm group-middle">
                    <span className="project-page-social-title">Share</span>
                    <div>
                      <ul className="list-inline project-page-social-list">
                        <li>
                          <a className="icon mdi mdi-facebook" href="#" />
                        </li>
                        <li>
                          <a className="icon mdi mdi-twitter" href="#" />
                        </li>
                        <li>
                          <a className="icon mdi mdi-instagram" href="#" />
                        </li>
                        <li>
                          <a className="icon mdi mdi-google-plus" href="#" />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Link
                    className="button button-lg button-primary button-winona"
                    href="/contact"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetails;
