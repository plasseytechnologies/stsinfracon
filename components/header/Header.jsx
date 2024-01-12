import Link from "next/link";
import ProjectData from "../../components/jsonData/ProjectData.json";

const Header = () => {
  return (
    <header className="section page-header">
      {/* RD Navbar*/}
      <div className="rd-navbar-wrap" style={{ height: "144.448px" }}>
        <nav
          className="rd-navbar rd-navbar-modern rd-navbar-original rd-navbar-static"
          data-layout="rd-navbar-fixed"
          data-sm-layout="rd-navbar-fixed"
          data-md-layout="rd-navbar-fixed"
          data-md-device-layout="rd-navbar-fixed"
          data-lg-layout="rd-navbar-fixed"
          data-lg-device-layout="rd-navbar-fixed"
          data-xl-layout="rd-navbar-static"
          data-xl-device-layout="rd-navbar-static"
          data-xxl-layout="rd-navbar-static"
          data-xxl-device-layout="rd-navbar-static"
          data-lg-stick-up-offset="150px"
          data-xl-stick-up-offset="150px"
          data-xxl-stick-up-offset="150px"
          data-lg-stick-up="true"
          data-xl-stick-up="true"
          data-xxl-stick-up="true"
        >
          <div className="rd-navbar-inner-outer">
            <div className="rd-navbar-aside">
              <div className="rd-navbar-aside-inner">
                <ul className="rd-navbar-contacts-2">
                  <li>
                    <div className="unit unit-spacing-xs">
                      <div className="unit-left">
                        <span className="icon mdi mdi-phone" />
                      </div>
                      <div className="unit-body">
                        <a className="phone" href="tel:#">
                          91-124-4653435
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="unit unit-spacing-xs">
                      <div className="unit-left">
                        <span className="icon mdi mdi-map-marker" />
                      </div>
                      <div className="unit-body">
                        <a className="address" href="#">
                          307, 3rd Floor, Eros City Square, Rosewood City ,
                          Sector 49-50, Gurugram, Haryana-122018
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
                <ul className="list-share-2">
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
            <div className="rd-navbar-inner">
              {/* RD Navbar Panel*/}
              <div className="rd-navbar-panel">
                {/* RD Navbar Toggle*/}
                <button
                  className="rd-navbar-toggle toggle-original"
                  data-rd-navbar-toggle=".rd-navbar-nav-wrap"
                >
                  <span />
                </button>
                {/* RD Navbar Brand*/}
                <div className="rd-navbar-brand">
                  <a className="brand" href="index.html">
                    <img
                      className="brand-logo-dark"
                      src="/assets/images/Logo-2.png"
                      style={{ height: "60px", width: "200px" }}
                      alt
                    />
                  </a>
                </div>
              </div>
              <div className="rd-navbar-right rd-navbar-nav-wrap toggle-original-elements">
                <div className="rd-navbar-aside d-xl-none">
                  <div className="rd-navbar-aside-inner">
                    <ul className="rd-navbar-contacts-2">
                      <li>
                        <div className="unit unit-spacing-xs">
                          <div className="unit-left">
                            <span className="icon mdi mdi-phone" />
                          </div>
                          <div className="unit-body">
                            <a className="phone" href="tel:#">
                              +1 718-999-3939
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="unit unit-spacing-xs">
                          <div className="unit-left">
                            <span className="icon mdi mdi-map-marker" />
                          </div>
                          <div className="unit-body">
                            <a className="address" href="#">
                              514 S. Magnolia St. Orlando, FL 32806
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <ul className="list-share-2">
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
                <div className="rd-navbar-main">
                  {/* RD Navbar Nav*/}
                  <ul className="rd-navbar-nav">
                    <li className="rd-nav-item">
                      <Link className="rd-nav-link" href="/">
                        Home
                      </Link>
                    </li>

                    <li className="rd-nav-item">
                      <Link href="about" className="rd-nav-link">
                        About us
                      </Link>
                    </li>
                    <li className="rd-nav-item  rd-navbar--has-dropdown rd-navbar-submenu">
                      <a className="rd-nav-link" href="">
                        Projects
                      </a>
                      <span className="rd-navbar-submenu-toggle" />
                      <ul className="rd-menu rd-navbar-dropdown">
                        {/* RD Navbar Dropdown*/}
                        {ProjectData.map((item) => {
                          return (
                            <>
                              <li className="rd-dropdown-item">
                                <Link
                                  className="rd-dropdown-link"
                                  href={`/projects/${item.slug}`}
                                >
                                  {item.category}
                                </Link>
                              </li>
                            </>
                          );
                        })}
                      </ul>
                    </li>
                    <li className="rd-nav-item">
                      <Link href="" className="rd-nav-link">
                        Services
                      </Link>
                    </li>
                    <li className="rd-nav-item">
                      <Link href="" className="rd-nav-link">
                        Contact
                      </Link>
                    </li>
                    {/* <li className="rd-nav-item rd-navbar--has-dropdown rd-navbar-submenu">
                      <a className="rd-nav-link" href="grid-blog.html">
                        News
                      </a>
                      <span className="rd-navbar-submenu-toggle" />
                     
                      <ul className="rd-menu rd-navbar-dropdown">
                        <li className="rd-dropdown-item">
                          <a className="rd-dropdown-link" href="grid-blog.html">
                            Grid blog
                          </a>
                        </li>
                        <li className="rd-dropdown-item">
                          <a
                            className="rd-dropdown-link"
                            href="masonry-blog.html"
                          >
                            Masonry blog
                          </a>
                        </li>
                        <li className="rd-dropdown-item">
                          <a className="rd-dropdown-link" href="blog-post.html">
                            Blog post
                          </a>
                        </li>
                      </ul>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div
                className="rd-navbar-project-hamburger rd-navbar-project-hamburger-open rd-navbar-fixed-element-1"
                data-multitoggle=".rd-navbar-inner"
                data-multitoggle-blur=".rd-navbar-wrap"
                data-multitoggle-isolate="data-multitoggle-isolate"
              >
                <div className="project-hamburger">
                  <span className="project-hamburger-arrow" />
                  <span className="project-hamburger-arrow" />
                  <span className="project-hamburger-arrow" />
                </div>
              </div>
              <div className="rd-navbar-project">
                <div className="rd-navbar-project-header">
                  <h5 className="rd-navbar-project-title">Latest Projects</h5>
                  <div
                    className="rd-navbar-project-hamburger rd-navbar-project-hamburger-close"
                    data-multitoggle=".rd-navbar-inner"
                    data-multitoggle-blur=".rd-navbar-wrap"
                    data-multitoggle-isolate="data-multitoggle-isolate"
                  >
                    <div className="project-close">
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
                <div className="rd-navbar-project-content rd-navbar-content">
                  <div>
                    <div className="row gutters-20" data-lightgallery="group">
                      <div className="col-6">
                        {/* Thumbnail Creative*/}
                        <article className="thumbnail thumbnail-creative">
                          <a
                            href="./assets/images/project-1-1200x800-original.jpg"
                            data-lightgallery="item"
                          >
                            <div className="thumbnail-creative-figure">
                              <img
                                src="./assets/images/project-1-195x164.jpg"
                                alt
                                width={195}
                                height={164}
                              />
                            </div>
                            <div className="thumbnail-creative-caption">
                              <span className="icon thumbnail-creative-icon linearicons-magnifier" />
                            </div>
                          </a>
                        </article>
                      </div>
                      <div className="col-6">
                        {/* Thumbnail Creative*/}
                        <article className="thumbnail thumbnail-creative">
                          <a
                            href="images/project-2-1200x800-original.jpg"
                            data-lightgallery="item"
                          >
                            <div className="thumbnail-creative-figure">
                              <img
                                src="images/project-2-195x164.jpg"
                                alt
                                width={195}
                                height={164}
                              />
                            </div>
                            <div className="thumbnail-creative-caption">
                              <span className="icon thumbnail-creative-icon linearicons-magnifier" />
                            </div>
                          </a>
                        </article>
                      </div>
                      <div className="col-6">
                        {/* Thumbnail Creative*/}
                        <article className="thumbnail thumbnail-creative">
                          <a
                            href="images/project-3-1200x800-original.jpg"
                            data-lightgallery="item"
                          >
                            <div className="thumbnail-creative-figure">
                              <img
                                src="images/project-3-195x164.jpg"
                                alt
                                width={195}
                                height={164}
                              />
                            </div>
                            <div className="thumbnail-creative-caption">
                              <span className="icon thumbnail-creative-icon linearicons-magnifier" />
                            </div>
                          </a>
                        </article>
                      </div>
                      <div className="col-6">
                        {/* Thumbnail Creative*/}
                        <article className="thumbnail thumbnail-creative">
                          <a
                            href="images/project-4-1200x800-original.jpg"
                            data-lightgallery="item"
                          >
                            <div className="thumbnail-creative-figure">
                              <img
                                src="images/project-4-195x164.jpg"
                                alt
                                width={195}
                                height={164}
                              />
                            </div>
                            <div className="thumbnail-creative-caption">
                              <span className="icon thumbnail-creative-icon linearicons-magnifier" />
                            </div>
                          </a>
                        </article>
                      </div>
                      <div className="col-6">
                        {/* Thumbnail Creative*/}
                        <article className="thumbnail thumbnail-creative">
                          <a
                            href="images/project-5-1200x800-original.jpg"
                            data-lightgallery="item"
                          >
                            <div className="thumbnail-creative-figure">
                              <img
                                src="images/project-5-195x164.jpg"
                                alt
                                width={195}
                                height={164}
                              />
                            </div>
                            <div className="thumbnail-creative-caption">
                              <span className="icon thumbnail-creative-icon linearicons-magnifier" />
                            </div>
                          </a>
                        </article>
                      </div>
                      <div className="col-6">
                        {/* Thumbnail Creative*/}
                        <article className="thumbnail thumbnail-creative">
                          <a
                            href="images/project-6-1200x800-original.jpg"
                            data-lightgallery="item"
                          >
                            <div className="thumbnail-creative-figure">
                              <img
                                src="images/project-6-195x164.jpg"
                                alt
                                width={195}
                                height={164}
                              />
                            </div>
                            <div className="thumbnail-creative-caption">
                              <span className="icon thumbnail-creative-icon linearicons-magnifier" />
                            </div>
                          </a>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
