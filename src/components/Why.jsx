import React, { useRef } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Why = ({subtitle,title,questions}) => {
  const swiperRef = useRef();
  return (
    <>
      {/* testimonial area start */}
      <section className="testimonial__area-5 mt-5 py-5">
        <div className="container">
          <div className="digibold-section-wrapper-5">
            <h2
              className="section-subtitle-5 heading-animation"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              {subtitle}
            </h2>
            <h3 className="section-title-5 heading-animation">
              {title}
            </h3>
            {/* If we need navigation buttons */}
            <div
              className="testimonial-five-prev cursor"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <i className="fa-solid fa-chevron-left" />
            </div>
            <div
              className="testimonial-five-next cursor"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <i className="fa-solid fa-chevron-right" />
            </div>
          </div>
          <div className="testimonial__wrapper-5">
            <div className=" testimonial-five-active">
              <Swiper
                spaceBetween={20}
                modules={[Navigation]}
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}
                slidesPerView={1}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                  },
                  992: {
                    slidesPerView: 2,
                  },
                }}
              >
                {questions.map(client => {
                  return (
                    <SwiperSlide key={client.id}>
                      <div className="swiper-slide">
                        <div className="testimonial__item-5">
                          <div className="testimonial__header-5">
                            <div className="testimonial__thumb-5">
                              <img
                              width={100}
                                src={client.image}
                                alt="testimonial"
                              />
                            </div>
                          </div>
                          <div className="p-animation">
                            <p className="justify__text fw__300"><strong className="fw__600">Mito: </strong>{client.myth}</p><br />
                            <p className="justify__text fw__300"><strong className="fw__600">Realidade: </strong>{client.true}</p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                })}

              </Swiper>
            </div>
          </div>
        </div>
      </section>
      {/* testimonial area end */}
    </>
  );
};

export default Why;
