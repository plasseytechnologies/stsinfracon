"use client";
import NewsLetter from "@/components/newsLetter/NewsLetter";
import OurClients from "@/components/ourClients/OurClients";
import { AllScriptLoad } from "@/constant/scriptFiles";
import React, { useEffect } from "react";
import TeamData from "../../constant/TeamData.json";
import Link from "next/link";
const AboutUs = () => {
  useEffect(() => {
    AllScriptLoad();
  }, []);
  return (
    <>
      <head>
        <meta name="format-detection" content="telephone=no" />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>About Us</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet="utf-8" />
      </head>
      <div>
        <section className="bg-gray-7">
          <div className="breadcrumbs-custom box-transform-wrap context-dark">
            <div className="container">
              <h3 className="breadcrumbs-custom-title">About Us</h3>
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
              <li className="active">About Us</li>
            </ul>
          </div>
        </section>
        {/* About*/}
        <section className="section section-lg bg-default">
          <div className="container">
            <div
              className="tabs-custom row row-50 justify-content-center flex-lg-row-reverse text-center text-md-left"
              id="tabs-4"
            >
              <div className="col-lg-4 col-xl-3">
                <h5 className="text-spacing-200">5+ years of experience</h5>
                <ul className="nav list-category list-category-down-md-inline-block">
                  <li
                    className="list-category-item wow fadeInRight"
                    role="presentation"
                    data-wow-delay="0s"
                  >
                    <a className="active" href="#tabs-4-1" data-toggle="tab">
                      About us
                    </a>
                  </li>
                  <li
                    className="list-category-item wow fadeInRight"
                    role="presentation"
                    data-wow-delay=".3s"
                  >
                    <a href="#tabs-4-4" data-toggle="tab">
                      Company Background
                    </a>
                  </li>
                  <li
                    className="list-category-item wow fadeInRight"
                    role="presentation"
                    data-wow-delay=".3s"
                  >
                    <a href="#tabs-5-5" data-toggle="tab">
                      What We Do
                    </a>
                  </li>
                  <li
                    className="list-category-item wow fadeInRight"
                    role="presentation"
                    data-wow-delay=".1s"
                  >
                    <a href="#tabs-4-2" data-toggle="tab">
                      Our Mission
                    </a>
                  </li>
                  <li
                    className="list-category-item wow fadeInRight"
                    role="presentation"
                    data-wow-delay=".2s"
                  >
                    <a href="#tabs-4-3" data-toggle="tab">
                      Our Goals
                    </a>
                  </li>
                </ul>
                <a
                  className="button button-lg button-primary button-winona"
                  href="contacts.html"
                >
                  Contact us
                </a>
              </div>
              <div className="col-lg-8 col-xl-9">
                {/* Tab panes*/}
                <div className="tab-content tab-content-1">
                  <div className="tab-pane fade show active" id="tabs-4-1">
                    <h4>
                      STS INFRACON PRIVATE LIMITED: Earlier Stroytech Service
                      India Pvt Ltd
                    </h4>
                    <p>
                      STS INFRACON PRIVATE LIMITED: Earlier Stroytech Service
                      India Pvt Ltd In conjunction with the objective, TUIPL
                      subsequently worked out a meticulous customized plan for
                      Package-3, resulting thereof M/s STS Infracon Private
                      Limited has achieved laying of 3749 MT of Bituminous
                      concrete (2 lane length in 3.241 Km) with in a record time
                      of 18 hours.{" "}
                    </p>
                    <p>
                      The exemplary motivation displayed by STSIPL’s team
                      towards achieving the challenge while overcoming all
                      hurdles during implementation has led to successful
                      delivery of the stiff target set by TUIPL. It is pertinent
                      to mention that your team’s contribution to TUIPL’s
                      overall target has been significant, resulting in the
                      fastest recorded output in the history of NHAI projects in
                      India.{" "}
                    </p>
                    <h5 className="my-3">Proficiencies: </h5>

                    <li>Road and Highway Projects</li>
                    <li>Railway and Metro Projects</li>
                    <li>Airport Projects</li>
                    <li>Irrigation Projects</li>
                    <li>
                      Transmission Line, Sub-station and Distribution Works
                    </li>
                    <li>
                      Hotel & Resorts/ Hospitals/ IT Complex / Sports Complex
                    </li>
                    <li>Shopping Malls</li>
                    <li>Multistoried Buildings</li>
                    <img
                      src="/assets/images/about-1-835x418.jpg"
                      alt
                      width={835}
                      height={418}
                    />
                  </div>
                  <div className="tab-pane fade" id="tabs-4-2">
                    <h4>
                      Our <span className="text-[#ef7c14]"> Mission</span>
                    </h4>

                    <p>
                      Our mission is to achieve excellence through world-class
                      practice, international quality standards by assuring
                      safety. Our experienced staff of engineers, supervisors,
                      planners, consultants and material suppliers, amply
                      supported by a large labor force, has the knowledge and
                      ability to plan, design, supervise and construct as per
                      the client’s needs, in addition to our facilities and
                      workforce, continues research activities assist us
                      substantially in serving our customers using up-to-date
                      techniques.
                    </p>
                    <img
                      src="/assets/images/about-2-835x418.jpg"
                      alt
                      width={835}
                      height={418}
                    />
                  </div>
                  <div className="tab-pane fade" id="tabs-4-3">
                    <h4>
                      OUR <span className="text-[#ef7c14]">GOALS</span>
                    </h4>
                    <p>
                      To deliver to the client the best solutions and broaden
                      activity base by diversifying into other infrastructure
                      disciplines to sustain a healthy growth rate.
                    </p>

                    <img
                      src="/assets/images/about-3-835x418.jpg"
                      alt
                      width={835}
                      height={418}
                    />
                  </div>
                  <div className="tab-pane fade" id="tabs-4-4">
                    <h4>Company Background</h4>
                    <p>
                      <b> STS INFRACON PRIVATE LIMITED(STSIPL)</b> earlier known
                      as Stroytech Service India Pvt Ltd is a reputable
                      Engineering Construction and Project Management Company,
                      incorporated on 4th April 2018 in India. STSIPL have their
                      registered office in Gurgaon Haryana. STSIPL believes in
                      Quality Engineering & Construction. With a varied
                      experience in Infra projects, we aim to become first
                      choice of Clients, vendor and employees. We believe in
                      dedicated client approach and a continuous quest for
                      excellence to alter the structural landscape through our
                      several prestigious projects in the commercial &
                      infrastructural space. We leverage our expertise and deep
                      knowledge of every aspect to your Benefit. We put our
                      experience and knowledge to work for you.
                    </p>
                    <p>
                      STS INFRACON PRIVATE LIMITED is a part of{" "}
                      <span className="text-[#ef7c14]">
                        <b> SUN OVERSEAS GROUP.</b>
                      </span>
                    </p>
                    <p>
                      SUN OVERSEAS was incorporated in 1996 in India. Since the
                      year 2000, the organization diversifie into Consultancy
                      Services in Infrastructure Sectors, and Initial activities
                      consisted of fertilizers, metals, and counter trade
                      business. SUN OVERSEAS is associated with reputed Indian
                      Infrastructure companies, assisting them in locating
                      suitable, qualified overseas partners as collaborators to
                      execute projects in India.{" "}
                    </p>
                    <img
                      src="/assets/images/about-4-835x418.jpg"
                      alt
                      width={835}
                      height={418}
                    />
                  </div>
                  <div className="tab-pane fade" id="tabs-5-5">
                    <h4>What We Do</h4>
                    <p>
                      We Build Highways, Structures, and other infrastructure
                      projects thus transforming cityscapes and landscapes with
                      structures of immense opulence. The company’s capabilities
                      span the entire spectrum of construction – Civil
                      engineering – and its services extend to all core sector
                      industries and infrastructure projects. The foundation of
                      our success is dedication & timely service to our clients
                      and inculcates a culture of high spirit amongst our vendor
                      and STS team.
                    </p>
                    <p>
                      SUN OVERSEAS provides a ONE-WINDOW solution for a
                      consultancy from concept to completion including
                      preparation of Bids against global tenders issued by both
                      private and public sectors.
                    </p>
                    <p>
                      SUN OVERSEAS also represents Global Manufacturers of
                      various equipment used in Infrastructure projects to
                      market their products to various clients.
                    </p>
                    <h6 className="my-3">
                      Various services of{" "}
                      <span className="text-[#ef7c14] pb-5">SUNOVERSEAS:</span>
                    </h6>

                    <li className="">
                      {" "}
                      Marketing, Business Development & Bidding
                    </li>
                    <li> Support for Legal & Financial Services</li>
                    <li> Engineering, Design and Technology Support</li>
                    <li>Manpower Management</li>
                    <li>Project Monitoring</li>
                    <li>Logistics Management</li>

                    <p className="pb-2 text-black">
                      <b>Group Companies: </b>
                    </p>
                    <ul className="justify-start">
                      <li>
                        <b>STS INFRACON PRIVATE LIMITED</b>
                      </li>
                      <li>EUROSUN INDIA PVT. LTD</li>
                      <li>PRASUN DEVELOPERS PVT. LTD.</li>
                      <li> PLASSEY TECHNOLOGIES PVT. LTD.</li>
                      <li>BELLAMENTE EDU SOLUTIONS PVT. LTD.</li>
                      <li>GARNI FOODS PVT. LTD.</li>
                    </ul>
                    <img
                      src="/assets/images/about-4-835x418.jpg"
                      alt
                      width={835}
                      height={418}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Icon Classic*/}
        {/* <section className="section section-lg bg-gray-100">
        <div className="container">
          <div className="row row-md row-50">
            <div className="col-sm-6 col-xl-4 wow fadeInUp" data-wow-delay="0s">
              <article className="box-icon-classic">
                <div className="unit unit-spacing-lg flex-column text-center flex-md-row text-md-left">
                  <div className="unit-left">
                    <div className="box-icon-classic-icon linearicons-hammer-wrench" />
                  </div>
                  <div className="unit-body">
                    <h5 className="box-icon-classic-title">
                      <a href="single-service.html">Modern Technology</a>
                    </h5>
                    <p className="box-icon-classic-text">
                      Our team uses the latest technologies to design
                      high-quality civil objects.
                    </p>
                  </div>
                </div>
              </article>
            </div>
            <div
              className="col-sm-6 col-xl-4 wow fadeInUp"
              data-wow-delay=".1s"
            >
              <article className="box-icon-classic">
                <div className="unit unit-spacing-lg flex-column text-center flex-md-row text-md-left">
                  <div className="unit-left">
                    <div className="box-icon-classic-icon linearicons-apartment" />
                  </div>
                  <div className="unit-body">
                    <h5 className="box-icon-classic-title">
                      <a href="single-service.html">Powerful Equipment</a>
                    </h5>
                    <p className="box-icon-classic-text">
                      We use modern &amp; powerful equipment to create efficient
                      and reliable infrastructure.
                    </p>
                  </div>
                </div>
              </article>
            </div>
            <div
              className="col-sm-6 col-xl-4 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <article className="box-icon-classic">
                <div className="unit unit-spacing-lg flex-column text-center flex-md-row text-md-left">
                  <div className="unit-left">
                    <div className="box-icon-classic-icon linearicons-pencil-ruler" />
                  </div>
                  <div className="unit-body">
                    <h5 className="box-icon-classic-title">
                      <a href="single-service.html">Quality Materials</a>
                    </h5>
                    <p className="box-icon-classic-text">
                      High-quality materials are the absolute guarantee of
                      building dependable facilities.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section> */}
        {/* Our Team*/}
        <section className="section section-lg section-bottom-md-70 bg-default">
          <div className="container">
            <h3 className="oh">
              <span
                className="d-inline-block wow slideInUp"
                data-wow-delay="0s"
              >
                Our team
              </span>
            </h3>
            <div className="row row-lg row-40 justify-content-center ">
              {TeamData.map((team) => (
                <>
                  <div
                    className={`col-sm-6 col-lg-6 wow ${team.className}`}
                    data-wow-delay=".2s"
                    data-wow-duration="1s"
                    role="button"
                  >
                    <article className="team-modern">
                      <div className="team-modern-figure">
                        <img src={team.image} alt width={270} height={236} />
                      </div>
                      <div className="team-modern-caption">
                        <h6 className="team-modern-name">
                          <p>{team.name}</p>
                        </h6>
                        <div className="team-modern-status">
                          {team.position}
                        </div>
                        {/* <ul className="list-inline team-modern-social-list text-[#ef7c14]">
                    <li>
                     {team.paragraph}
                    </li>
                  </ul> */}
                      </div>
                    </article>
                  </div>
                </>
              ))}
            </div>
          </div>
        </section>
        {/* Our History*/}
        <section className="section section-lg bg-gray-100 text-left section-relative">
          <div className="container">
            <div className="row row-60 justify-content-center justify-content-xxl-between">
              <div className="col-lg-6 col-xxl-5 position-static">
                <h3>Our history</h3>
                <div className="tabs-custom" id="tabs-5">
                  <div className="tab-content tab-content-1">
                    <div className="tab-pane fade" id="tabs-5-1">
                      <h5 className="font-weight-normal text-transform-none text-spacing-75">
                        Establishment of Civil Group &amp; first successful
                        projects
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Suspendisse interdum consectetur
                      </p>
                    </div>
                    <div className="tab-pane fade" id="tabs-5-2">
                      <h5 className="font-weight-normal text-transform-none text-spacing-75">
                        Partnering with national construction companies
                      </h5>
                      <p>
                        Scelerisque mauris pellentesque pulvinar pellentesque
                        habitant morbi. Blandit cursus risus at ultrices mi
                        tempus imperdiet. A cras semper auctor neque vitae.{" "}
                      </p>
                    </div>
                    <div className="tab-pane fade" id="tabs-5-3">
                      <h5 className="font-weight-normal text-transform-none text-spacing-75">
                        First governmental projects and engineering solutions
                        awards
                      </h5>
                      <p>
                        Eu scelerisque felis imperdiet proin fermentum leo vel
                        orci. Vulputate enim nulla aliquet porttitor lacus
                        luctus accumsan tortor posuere.{" "}
                      </p>
                    </div>
                    <div className="tab-pane fade show active" id="tabs-5-4">
                      <h5 className="font-weight-normal text-transform-none text-spacing-75">
                        Celebrating 25 years of Civil Group’s success
                      </h5>
                      <p>
                        Cursus eget nunc scelerisque viverra mauris in aliquam
                        sem fringilla. Viverra nibh cras pulvinar mattis nunc
                        sed. Amet consectetur adipiscing{" "}
                      </p>
                    </div>
                  </div>
                  <div className="list-history-wrap">
                    <ul className="nav list-history">
                      <li className="list-history-item" role="presentation">
                        <a href="#tabs-5-1" data-toggle="tab">
                          <div className="list-history-circle" />
                          1994
                        </a>
                      </li>
                      <li className="list-history-item" role="presentation">
                        <a href="#tabs-5-2" data-toggle="tab">
                          <div className="list-history-circle" />
                          2002
                        </a>
                      </li>
                      <li className="list-history-item" role="presentation">
                        <a href="#tabs-5-3" data-toggle="tab">
                          <div className="list-history-circle" />
                          2010
                        </a>
                      </li>
                      <li className="list-history-item" role="presentation">
                        <a
                          className="active"
                          href="#tabs-5-4"
                          data-toggle="tab"
                        >
                          <div className="list-history-circle" />
                          2021
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-9 col-lg-6 position-static index-1">
                <div className="bg-image-right-1 bg-image-right-lg">
                  <img
                    src="/assets/images/about-5-1110x710.jpg"
                    alt
                    width={1110}
                    height={710}
                  />
                  <div className="link-play-modern">
                    <a
                      className="icon mdi mdi-play"
                      data-lightbox="iframe"
                      href="https://www.youtube.com/watch?v=1UWpbtUupQQ"
                    />
                    <div className="link-play-modern-title">
                      How we<span>Work</span>
                    </div>
                    <div className="link-play-modern-decor" />
                  </div>
                  <div
                    className="box-transform"
                    style={{
                      backgroundImage: "url(images/about-5-1110x710.jpg)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Our clients*/}
        <OurClients awards={false} />
        {/* Subscribe to Our Newsletter*/}
        <NewsLetter />
      </div>
    </>
  );
};

export default AboutUs;
