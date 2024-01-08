import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const places = [
  {
    id: 1,
    title: 'Europa',
    image: 'https://storage.googleapis.com/primesecure/europa.webp',
    price: '15,39',
  },
  {
    id: 2,
    title: 'Estados Unidos e Canadá',
    image: 'https://storage.googleapis.com/primesecure/estados-unidos.webp',
    price: '12,95',
  },
  {
    id: 3,
    title: 'Ásia',
    image: 'https://storage.googleapis.com/primesecure/asia.webp',
    price: '12,95',
  },
  {
    id: 4,
    title: 'Ásia',
    image: 'https://storage.googleapis.com/primesecure/asia.webp',
    price: '12,95',
  },
]

const TeamFour = () => {
  const swiperRef = useRef();

  return (
    <>
      {/* Team area start */}
      <section className="team__area-5 pt-150 swiper">
        <div className="row">
          <div className="col-lg-4">
            <div className="team__left-5" data-aos="fade-up">
              <span className="team__subtitle-5 heading-animation text-green">
                produtos
              </span>
              <h3 className="team__sub-5">Nossos</h3>
              <h2 className="team__title-5">
                {" "}
                 planos
              </h2>
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
          </div>
          <div className="col-lg-8">
            <div className=" team-active-5">
              <div>
                <Swiper
                  spaceBetween={20}
                  modules={[Navigation]}
                  loop={true}
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
                    1024: {
                      slidesPerView: 3,
                    },
                  }}
                >
                  {places.map(place => {
                    return (
                      <SwiperSlide key={place.id}>
                        <div className="swiper-slide">
                          <div
                            className="team__member team-member-5"
                            data-aos="fade-up"
                          >
                            <div className="team__image">
                              <img src={place.image} alt="digibold" />
                              <div className="share__wrap">
                                <button className="share-btn">
                                  <i className="fa-solid fa-plane" />
                                </button>
                              </div>
                            </div>
                            <div className="team__content">
                              <h5 className="team__title">{place.title}</h5>
                              <p>R$ {place.price} <small>/ dia</small></p>
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
        </div>
      </section>
      {/* Team area end */}
    </>
  );
};

export default TeamFour;
