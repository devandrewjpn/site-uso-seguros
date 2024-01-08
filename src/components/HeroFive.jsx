import React from "react";

import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
const HeroFive = () => {

  return (
    <>
      {/* hero area start */}
      <section className="h-100">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
          >
            <SwiperSlide className="hero__slider hero__slider_">
              <div className="container h-100">
                <div className="hero__content-5 h-100 d-flex flex-column justify-content-center">
                  <h2 className="hero__title-5 cxufadeUp2">
                    Tudo em um só <span>USO</span></h2>
                  <p className="hero__dis-5 cxufadeUp2">
                    Seguros simplificados, vida facilitada {" "}
                  </p>
                  <div className="hero__btn-wrapper-5">
                    <Link className="db-btn-arrow" to="/about">
                      Fazer cotação <i className="fa-solid fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        
      </section>
      {/* hero area end */}
    </>
  );
};

export default HeroFive;
