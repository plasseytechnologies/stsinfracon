import React from "react";

const LatestNews = () => {
  return (
    <div>
      <section className="section section-xl bg-default text-md-left">
        <div className="container">
          <div className="tabs-custom tabs-post" id="tabs-9">
            <div className="row align-items-md-end align-items-xl-start">
              <div className="col-md-6 tab-content-3 wow fadeInUp">
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="tabs-9-1">
                    <div className="post-amy-figure">
                      <img
                        src="./assets/images/post-1-570x505.jpg"
                        alt
                        width={570}
                        height={505}
                      />
                      <a href="blog-post.html">
                        <span className="icon linearicons-link2" />
                      </a>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="tabs-9-2">
                    <div className="post-amy-figure">
                      <img
                        src="./assets/images/post-2-570x505.jpg"
                        alt
                        width={570}
                        height={505}
                      />
                      <a href="blog-post.html">
                        <span className="icon linearicons-link2" />
                      </a>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="tabs-9-3">
                    <div className="post-amy-figure">
                      <img
                        src="./assets/images/post-3-570x505.jpg"
                        alt
                        width={570}
                        height={505}
                      />
                      <a href="blog-post.html">
                        <span className="icon linearicons-link2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 index-1">
                <h3 className="tabs-post-title oh-desktop">
                  <span className="d-inline-block wow slideInDown">
                    Latest news
                  </span>
                </h3>
                <ul className="nav nav-tabs">
                  <li className="nav-item wow fadeInRight" role="presentation">
                    <a
                      className="nav-link active"
                      href="#tabs-9-1"
                      data-toggle="tab"
                    />
                    <div className="post-amy">
                      <h5 className="post-amy-title">
                        <a href="blog-post.html">
                          Repairs To Commercial Buildings: What To Think About
                        </a>
                      </h5>
                      <ul className="post-amy-info list-inline">
                        <li className="post-amy-time">
                          <span className="icon mdi mdi-clock" />
                          <time dateTime="2021-05-26">May 26, 2021</time>
                        </li>
                        <li className="post-amy-autor">
                          <span className="icon mdi mdi-account-outline" />
                          <a href="#">Jane Williams</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item wow fadeInRight" role="presentation">
                    <a
                      className="nav-link"
                      href="#tabs-9-2"
                      data-toggle="tab"
                    />
                    <div className="post-amy">
                      <h5 className="post-amy-title">
                        <a href="blog-post.html">
                          Questions To Ask Your Contractor Before Carrying Out
                          Road Maintenance
                        </a>
                      </h5>
                      <ul className="post-amy-info list-inline">
                        <li className="post-amy-time">
                          <span className="icon mdi mdi-clock" />
                          <time dateTime="2021-05-26">May 26, 2021</time>
                        </li>
                        <li className="post-amy-autor">
                          <span className="icon mdi mdi-account-outline" />
                          <a href="#">Jane Williams</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item wow fadeInRight" role="presentation">
                    <a
                      className="nav-link"
                      href="#tabs-9-3"
                      data-toggle="tab"
                    />
                    <div className="post-amy">
                      <h5 className="post-amy-title">
                        <a href="blog-post.html">
                          8 Useful Tips on Preparing For Drainage Construction
                        </a>
                      </h5>
                      <ul className="post-amy-info list-inline">
                        <li className="post-amy-time">
                          <span className="icon mdi mdi-clock" />
                          <time dateTime="2021-05-26">May 26, 2021</time>
                        </li>
                        <li className="post-amy-autor">
                          <span className="icon mdi mdi-account-outline" />
                          <a href="#">Jane Williams</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LatestNews;
