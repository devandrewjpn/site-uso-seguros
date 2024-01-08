import React from "react";
import { Link } from "react-router-dom";

const FooterOne = () => {
  return (
    <>
      {/* Footer area start */}
      <footer className="footer__area">
        <div className="footer__top">
          <div className="container">
            <div className="row">
              <div className="col-xxl-12">
                <div className="footer__map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1511.2499674845235!2d-73.99553882767792!3d40.75102778252164!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1686536419224!5m2!1sen!2sbd"
                    loading="lazy"
                    title="digibold"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__widgets">
          <div className="container">
            <div className="row">
              <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6">
                <div className="footer__logo">
                  <img
                    src="assets/imgs/logo/logo-light.png"
                    alt="Footer Logo"
                  />
                  <p>
                    Conditions Terms of Use Ours feturesin Services ew Guests
                    LisitThe Team List Guests LisitThe Team List
                  </p>
                  <Link className="db-btn-arrow" to="/about">
                    Read More <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6">
                <div className="footer__address">
                  <h2 className="footer__title">Address</h2>
                  <ul>
                    <li>
                      <span>
                        <i className="fa-solid fa-paper-plane" />
                      </span>
                      <p>
                        Old city Street,Usa <br />
                        1212 New york-3500
                      </p>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-phone" />
                      </span>
                      <Link to="tel:+88014420420">+88 014 420420</Link>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-envelope" />
                      </span>
                      <Link to="mailto:urcompany@mail.com">
                        urcompany@mail.com
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6">
                <div className="footer__service">
                  <h2 className="footer__title">More Servicve</h2>
                  <ul>
                    <li>
                      <Link to="/about">Ui Design</Link>
                    </li>
                    <li>
                      <Link to="/about">Ux Design</Link>
                    </li>
                    <li>
                      <Link to="/about">Digital Marketing</Link>
                    </li>
                    <li>
                      <Link to="/about">Video Editing</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6">
                <div className="footer__newsletter">
                  <div className="footer__title">Newsletter</div>
                  <p>
                    It is a long established fact that a reader will be
                    distracted
                  </p>
                  <form action="#">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your mail address"
                    />
                    <button type="submit" className="submit">
                      <i className="fa-solid fa-paper-plane" />
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-xxl-12">
                <div className="footer__btm">
                  <div className="footer__copyright">
                    <p>© s7template 2023 | All Rights Reserved</p>
                  </div>
                  <div className="footer__social">
                    <ul>
                      <li>
                        <Link to="#">
                          <i className="fa-brands fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fa-brands fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fa-brands fa-instagram" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer area end */}
    </>
  );
};

export default FooterOne;
