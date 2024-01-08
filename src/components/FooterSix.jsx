import React from "react";
import { Link } from "react-router-dom";

const FooterSix = () => {
  return (
    <>
      {/* footer area start  */}
      <footer className="footer__area-5 digibold-five">
        <div className="footer__wrapper-5">
          <div className="footer__left-5">
            <div className="footer__section-wrapper-5">
              <h2 className="footer__title-5 heading-animation">
                Creating harmony through design
              </h2>
            </div>
            <div className="row">
              <div className="col-xxl-4 col-xl-3 col-lg-6 col-md-6">
                <div className="footer__logo">
                  <Link to="/">
                    <img
                      src="assets/imgs/logo/logo-light.png"
                      alt="Footer Logo"
                    />
                  </Link>
                  <p>
                    Para você e para sua família.
                  </p>
                  <div className="footer__social-3">
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
              <div className="col-xxl-4 col-xl-3 col-lg-6 col-md-6">
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
              <div className="col-xxl-4 col-xl-3 col-lg-6 col-md-6">
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
                      <a href="/tel:+88014420420">+88 014 420420</a>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-envelope" />
                      </span>
                      <a href="/mailto:urcompany@mail.com">
                        urcompany@mail.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* footer area end  */}
    </>
  );
};

export default FooterSix;
