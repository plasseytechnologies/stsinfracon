import React from "react";

const ProjectDetails = () => {
  return (
    <div className>
      <div>
        <section className="bg-gray-7">
          <div className="breadcrumbs-custom box-transform-wrap context-dark">
            <div className="container">
              <h3 className="breadcrumbs-custom-title">Project Page</h3>
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
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="projects.html">Projects</a>
              </li>
              <li className="active">Project Page</li>
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
                    <div className="item">
                      <img
                        src="/assets/images/project-5-670x477.jpg"
                        alt
                        width={670}
                        height={477}
                      />
                      <div className="slick-project-caption">
                        <div className="slick-project-title">Photo #1</div>
                      </div>
                    </div>
                    <div className="item">
                      <img
                        src="/assets/images/project-6-670x477.jpg"
                        alt
                        width={670}
                        height={477}
                      />
                      <div className="slick-project-caption">
                        <div className="slick-project-title">Photo #2</div>
                      </div>
                    </div>
                    <div className="item">
                      <img
                        src="/assets/images/project-7-670x477.jpg"
                        alt
                        width={670}
                        height={477}
                      />
                      <div className="slick-project-caption">
                        <div className="slick-project-title">Photo #3</div>
                      </div>
                    </div>
                    <div className="item">
                      <img
                        src="/assets/images/project-8-670x477.jpg"
                        alt
                        width={670}
                        height={477}
                      />
                      <div className="slick-project-caption">
                        <div className="slick-project-title">Photo #4</div>
                      </div>
                    </div>
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
                    <div className="item">
                      <img
                        src="/assets/images/project-5-670x477.jpg"
                        alt
                        width={670}
                        height={477}
                      />
                    </div>
                    <div className="item">
                      <img
                        src="/assets/images/project-6-670x477.jpg"
                        alt
                        width={670}
                        height={477}
                      />
                    </div>
                    <div className="item">
                      <img
                        src="/assets/images/project-7-670x477.jpg"
                        alt
                        width={670}
                        height={477}
                      />
                    </div>
                    <div className="item">
                      <img
                        src="/assets/images/project-8-670x477.jpg"
                        alt
                        width={670}
                        height={477}
                      />
                    </div>
                  </div>
                </div>
                <div className="table-custom-responsive">
                  <table className="table-custom table-custom-primary table-project">
                    <tbody>
                      <tr>
                        <td>
                          <span className="icon icon-26 mdi mdi-account" />
                        </td>
                        <td>
                          <span>Client:</span> Smith Ltd.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="icon mdi mdi-calendar-today" />
                        </td>
                        <td>
                          <span>Year:</span> 2010
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="icon mdi mdi-map-marker" />
                        </td>
                        <td>
                          <span>Location:</span> Los Angeles
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="icon icon-28 mdi mdi-cash" />
                        </td>
                        <td>
                          <span>Value:</span> $1.299.525,00
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-lg-6 col-xl-5">
                <div className="project-page">
                  <h4>Smith office center</h4>
                  <p>
                    Lanistas accelerare in secundus rugensis civitas! Heu,
                    castus lamia! Eheu. Pol. Tolerare inciviliter ducunt ad
                    ferox devirginato. Genetrixs accelerare in cubiculum!
                    Dominas ortum in vasa! Gabaliums velum in tolosa!
                  </p>
                  <p>
                    Primus repressors ducunt ad buxum. Fluctuis sunt boreass de
                    audax lixa. Fidess messis! Navis volares, tanquam emeritis
                    decor. Sunt quadraes resuscitabo noster, nobilis victrixes.
                    Extum de germanus luna, locus silva! Habitios crescere,
                    tanquam fatalis contencio. Cum lacta manducare, omnes
                    bromiumes aperto salvus, bi-color parmaes. Rector, heuretes,
                    et scutum. Abactuss messis in gratis chremisa!
                  </p>
                  <p>
                    Nunquam experientia consilium. Ridetis vix ducunt ad fidelis
                    devirginato. Demolitiones favere, tanquam rusticus extum.
                    Coordinatae potuss, tanquam azureus accola.
                  </p>
                  <p>
                    Finis de gratis historia, attrahendam vortex! Ubi est brevis
                    guttus? Nunquam contactus nomen. Credere aliquando ducunt ad
                    albus calcaria. Cannabiss manducare! Nunquam captis fides.
                    Cur hydra ridetis? Cum abactus studere, omnes demolitionees
                    attrahendam velox, alter extumes.
                  </p>
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
                  <a
                    className="button button-lg button-primary button-winona"
                    href="contacts.html"
                  >
                    Contact Us
                  </a>
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
