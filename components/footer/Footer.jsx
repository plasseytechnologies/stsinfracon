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
                <div className="footer-classic-header">
                  <h6 className="footer-classic-title">Quick links</h6>
                </div>
                <div className="footer-classic-body">
                  <ul className="footer-classic-list d-inline-block d-sm-block">
                    <li>
                      <a href="about-us.html">Our History</a>
                    </li>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                    <li>
                      <a href="grid-blog.html">Latest News</a>
                    </li>
                    <li>
                      <a href="#">Our Team</a>
                    </li>
                    <li>
                      <a href="projects.html">Projects</a>
                    </li>
                    <li>
                      <a href="contacts.html">Contact Us</a>
                    </li>
                  </ul>
                  <ul className="list-inline footer-social-list">
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
                            <span className="icon icon-24 mdi mdi-phone" />
                          </div>
                          <div className="unit-body">
                            <a className="phone" href="tel:#">
                              +1 718-999-3939
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
                              info@demolink.org
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a
                      className="button button-sm button-primary button-winona"
                      href="contacts.html"
                    >
                      Request a quote
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 position-static">
                <div className="footer-classic-gmap">
                  <div
                    className="google-map-container"
                    data-center="9870 St Vincent Place, Glasgow, DC 45 Fr 45."
                    data-zoom={5}
                    data-icon="images/gmap_marker.png"
                    data-icon-active="images/gmap_marker_active.png"
                    data-styles='[{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":60}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","stylers":[{"visibility":"on"},{"lightness":30}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ef8c25"},{"lightness":40}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#b6c54c"},{"lightness":40},{"saturation":-40}]},{}]'
                  >
                    <div className="google-map" />
                    <ul className="google-map-markers">
                      <li
                        data-location="9870 St Vincent Place, Glasgow, DC 45 Fr 45."
                        data-description="9870 St Vincent Place, Glasgow"
                      />
                    </ul>
                  </div>
                </div>
              </div>
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
              <span>Civil Group</span>
              <span>.&nbsp;</span>
              <a href="privacy-policy.html">Privacy policy</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
