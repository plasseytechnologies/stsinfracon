"use client";
import Header from "@/components/header/Header";
import { AllScriptLoad } from "@/constant/scriptFiles";
import Link from "next/link";
import React, { useEffect } from "react";

const Blogs = () => {
  useEffect(() => {
    AllScriptLoad();
  }, []);
  return (
    <div>
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
