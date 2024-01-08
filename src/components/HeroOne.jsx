import React from "react";
import { Link } from "react-router-dom";

const HeroOne = () => {
  return (
    <>
      {/* Hero area start */}
      <section className="hero__area">
        <div className="hero__inner">
          <div className="hero__top">
            <h1 className="hero__title cxufadeUp">
              Making your <br />{" "}
              <Link
                className="popup-link"
                to="https://www.youtube.com/watch?v=FYpsf0ACkmI"
              >
                {" "}
                <span>
                  <i className="fa-solid fa-play" />
                </span>
              </Link>{" "}
              vision reality
            </h1>
            <div className="hero__contact cxufadeUp2">
              <Link to="/about">
                <span>
                  <i className="fa-solid fa-arrow-right" />
                </span>
              </Link>
              <div className="text">
                <p>Get in Touch</p>
              </div>
            </div>
          </div>
          <div className="hero__btm">
            <div className="cxufadeUp2">
              <p>
                Creative agencies are businesses that specialize in creating and
                executing marketing and{" "}
              </p>
            </div>
            <img src="/assets/imgs/hero/1.png" alt="digibold" />
          </div>
        </div>
        <img className="shape-1" src="assets/imgs/shape/1.png" alt="Shape" />
        <img className="shape-2" src="assets/imgs/shape/2.png" alt="Shape" />
        <img className="shape-3" src="assets/imgs/shape/3.png" alt="Shape" />
        <img
          className="shape-4 cxuSpin-slow"
          src="/assets/imgs/shape/4.png"
          alt="Shape"
        />
        <img className="shape-5" src="/assets/imgs/shape/5.png" alt="Shape" />
      </section>
      {/* Hero area end */}
    </>
  );
};

export default HeroOne;
