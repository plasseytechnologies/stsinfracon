import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer className="section footer-classic context-dark footer-classic-2">
        <div className="footer-classic-content">
          <div className="container">
            <div className="row row-50 row-lg-0 no-gutters">
              <div
                className="col-sm-6 col-lg-4 wow fadeInRight"
                data-wow-delay="0s"
              >
                <div className="footer-classic-header flex justify-center">
                  <h6 className="footer-classic-title">Quick links</h6>
                </div>
                <div className="footer-classic-body">
                  <ul className="footer-classic-list d-inline-block d-sm-block sm:pl-[6%]">
                    <li>
                      <Link href="/blogs">Blogs</Link>
                    </li>
                    <li>
                      <Link href="/about">About us</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact us</Link>
                    </li>

                    <li>
                      <Link href="/projects">Projects</Link>
                    </li>
                    <li>
                      <Link href="/services">Services</Link>
                    </li>
                  </ul>
                  <ul className="list-inline footer-social-list flex justify-center">
                    {/* <li>
                      <a className="icon mdi mdi-facebook" href="#" />
                    </li> */}
                    <li>
                      <a
                        className="icon mdi mdi-linkedin"
                        target="blank"
                        href="https://www.linkedin.com/company/stsinfraconpvtltd/"
                      />
                    </li>
                    <li>
                      <a className="icon mdi mdi-instagram" href="" />
                    </li>
                    {/* <li>
                      <a className="icon mdi mdi-google-plus" href="#" />
                    </li> */}
                  </ul>
                </div>
              </div>
              <div
                className="col-sm-6 col-lg-4 wow fadeInRight"
                data-wow-delay=".1s"
              >
                <div className="footer-classic-header">
                  <div className="box-width-230">
                    <h6 className="footer-classic-title">Get in touch</h6>
                  </div>
                </div>
                <div className="footer-classic-body">
                  <div className="box-width-230">
                    <div className="footer-classic-contacts">
                      <div className="footer-classic-contacts-item">
                        <div className="unit unit-spacing-sm align-items-center">
                          <div className="unit-left">
                            <span className="icon icon-24 mdi mdi-map-marker" />
                          </div>
                          <div className="unit-body">
                            <span className="text-sm">
                              307, 3rd Floor, Eros City Square, Rosewood City ,
                              Sector 49-50, Gurugram, Haryana-122018
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="footer-classic-contacts-item">
                        <div className="unit unit-spacing-sm align-items-center">
                          <div className="unit-left">
                            <span className="icon icon-24 mdi mdi-phone" />
                          </div>
                          <div className="unit-body">
                            <a className="phone text-sm" href="tel:#">
                              +918130012568
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="footer-classic-contacts-item">
                        <div className="unit unit-spacing-sm align-items-center">
                          <div className="unit-left">
                            <span className="icon mdi mdi-email" />
                          </div>
                          <div className="unit-body">
                            <a className="mail" href="mailto:#">
                              hr@stsinfracon.com
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <Link
                      className="button button-sm button-primary button-winona"
                      href="/contact"
                    >
                      Request a quote
                    </Link> */}
                  </div>
                </div>
              </div>
              <div
                className="col-sm-6 col-lg-4 wow fadeInRight"
                data-wow-delay="0s"
              >
                <div className="footer-classic-header flex justify-center">
                  <h6 className="footer-classic-title">Our Group</h6>
                </div>
                <div className="footer-classic-body p-10">
                  <ul className="footer-classic-list d-inline-block d-sm-block sm:pl-[25%]">
                    <li>
                      <a href="https://www.sunoverseas.org/" target="blank">
                        Sun Overseas
                      </a>
                    </li>
                    <li>
                      <a href="https://garnifoods.com/" target="blank">
                        Garni Foods
                      </a>
                    </li>
                    <li>
                      <a href="https://eurosunindia.com/" target="blank">
                        Euro Sun India
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://www.eurosunhealthcare.com/"
                        target="blank"
                      >
                        Eurosun Healthcare
                      </a>
                    </li>
                    <li>
                      <a href="https://plasseytechnologies.in/" target="blank">
                        Plassey Technologoies
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.bellamenteschools.com/"
                        target="blank"
                      >
                        Bella Mente Preschool
                      </a>
                    </li>
                    <li>
                      <a href="https://adhyayanamacademy.com/" target="blank">
                        Adhyayanam Academy
                      </a>
                    </li>
                    <li>
                      <a href="https://prasundevelopers.com/" target="blank">
                        Prasun Developers
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className="col-lg-3 position-static">
                <div className="footer-classic-gmap sm:mr-5 ">
                

                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.208414135136!2d77.0525799740844!3d28.412967494020076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d2263d766a1db%3A0xc1f0d06c3384b23d!2sSTS%20Infracon%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1705480780231!5m2!1sen!2sin"
                    style={{ border: 0, width: "100%", height: "100%" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="footer-classic-panel">
          <div className="container">
            {/* Rights*/}
            <p className="rights">
              <span>©&nbsp;</span>
              <span className="copyright-year" />
              <span>&nbsp;</span>
              <span>STS INFRACON PRIVATE LIMITED |</span>
              {/* <span>.&nbsp;</span> */}
              <Link href="https://plasseytechnologies.in/" target="new">
                {" "}
                Powered by Plassey Technologies Pvt. Ltd.
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
