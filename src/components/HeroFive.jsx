import React, { useRef } from "react";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const HeroFive = () => {
  const swiperRef = useRef();
  return (
    <>
      {/* hero area start */}
      <section className="h-100">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Navigation]}
          autoplay= {{
            delay: 3000,
            disableOnInteraction: true,
          }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          <SwiperSlide className="hero__slider hero__slider_">
            <div className="position-relative container h-100">
              <div className="hero__content-5 h-100 d-flex flex-column justify-content-center">
                {/* <h2 className="hero__title-5 cxufadeUp2">
                  Tudo em um só <span>USO</span></h2>
                <p className="hero__dis-5 cxufadeUp2">
                  Seguros simplificados, vida facilitada {" "}
                </p> */}
              </div>
              <div className="skll__arrows_bottom d-flex gap-1 align-items-center px-5">
                  <div
                    className="skll__carousel_prev cursor"
                    onClick={() => swiperRef.current?.slidePrev()}
                  >
                    <i className="fa-solid fa-chevron-left" />
                  </div>
                  <div
                    className="skll__carousel_next cursor"
                    onClick={() => swiperRef.current?.slideNext()}
                  >
                    <i className="fa-solid fa-chevron-right" />
                  </div>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="hero__slider hero__slider_2">
            <div className="position-relative container h-100">
              <div className="hero__content-5 h-100 d-flex flex-column justify-content-center">
                {/* <h2 className="hero__title-5 cxufadeUp2">
                  slide 2</h2>
                <p className="hero__dis-5 cxufadeUp2">
                😁😁😁
                </p> */}
              </div>
              <div className="skll__arrows_bottom d-flex gap-1 align-items-center px-5">
                  <div
                    className="skll__carousel_prev cursor"
                    onClick={() => swiperRef.current?.slidePrev()}
                  >
                    <i className="fa-solid fa-chevron-left" />
                  </div>
                  <div
                    className="skll__carousel_next cursor"
                    onClick={() => swiperRef.current?.slideNext()}
                  >
                    <i className="fa-solid fa-chevron-right" />
                  </div>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="hero__slider hero__slider_3">
            <div className="position-relative container h-100">
              <div className="hero__content-5 h-100 d-flex flex-column justify-content-center">
                {/* <h2 className="hero__title-5 cxufadeUp2">
                  slide 3</h2>
                <p className="hero__dis-5 cxufadeUp2">
                😁😁😁
                </p> */}
              </div>
              <div className="skll__arrows_bottom d-flex gap-1 align-items-center px-5">
                  <div
                    className="skll__carousel_prev cursor"
                    onClick={() => swiperRef.current?.slidePrev()}
                  >
                    <i className="fa-solid fa-chevron-left" />
                  </div>
                  <div
                    className="skll__carousel_next cursor"
                    onClick={() => swiperRef.current?.slideNext()}
                  >
                    <i className="fa-solid fa-chevron-right" />
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
