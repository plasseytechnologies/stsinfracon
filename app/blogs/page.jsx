"use client";
import Header from "@/components/header/Header";
import { AllScriptLoad } from "@/constant/scriptFiles";
import Link from "next/link";
import React, { useEffect } from "react";

const Blogs = () => {
  useEffect(() => {
    AllScriptLoad();
  }, []);
  
  const Title = "STS Infracon : Best Engineering & Construction Company India";
  const Description =
    ":   STS is the leading engineering and construction company in India. We have shaken industry norms by providing innovative solutions to highly complex projects and meeting tight deadlines with awe-inspiring efficiency.";
  const Url = "https://stsinfracon.com/";
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
      <div>
        <section className="section section-lg bg-default">
          <div className="container">
            <div className="row row-40 row-lg-60 justify-content-center">
              <div className="col-sm-6 col-lg-4 order-lg-1">
                {/* Post Classic*/}
                <article className="post post-classic post-classic-2">
                  <div className="post-classic-figure">
                    <img
                      src="/assets/images/post-2-370x365.jpg"
                      alt
                      width={370}
                      height={365}
                    />
                  </div>
                  <div className="post-classic-content">
                    <p className="post-classic-title">
                      <Link href="/blogs/sdsnjda">
                        Questions To Ask Your Contractor Before Carrying Out
                        Road Maintenance
                      </Link>
                    </p>
                  </div>
                  <time className="post-classic-time" dateTime="2021-04-25">
                    April 25, 2021
                  </time>
                </article>
              </div>
            </div>
            <div className="pagination-wrap">
              {/* Bootstrap Pagination*/}
              {/* <nav aria-label="Page navigation">
                <ul className="pagination">
                  <li className="page-item page-item-control disabled">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span className="icon" aria-hidden="true" />
                    </a>
                  </li>
                  <li className="page-item active">
                    <span className="page-link">1</span>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item page-item-control">
                    <a className="page-link" href="#" aria-label="Next">
                      <span className="icon" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </nav> */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blogs;
