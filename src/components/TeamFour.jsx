import React, { useRef } from "react";
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
    title: 'América (Inclui México)',
    image: 'https://storage.googleapis.com/primesecure/america.webp',
    price: '10,61',
  },
  {
    id: 5,
    title: 'Oceania',
    image: 'https://storage.googleapis.com/primesecure/oceania.webp',
    price: '12,95',
  },
  {
    id: 6,
    title: 'África',
    image: 'https://storage.googleapis.com/primesecure/africa.webp',
    price: '12,95',
  },
  {
    id: 7,
    title: 'Múltiplos Destinos',
    image: 'https://storage.googleapis.com/primesecure/multiplos-destinos.webp',
    price: '12,95',
  },
]

const TeamFour = () => {
  const swiperRef = useRef();

  return (
    <>
      {/* Team area start */}
      <section className="team__area-5 pt-5 pb-5 swiper">
        <div className="row">
          <div className="col-lg-4">
            <div className="team__left-5" data-aos="fade-up">
              <h2 className="team__title-5" style={{fontSize: 50}}>
                {" "}
                EXPLORE NOSSOS PLANOS
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
                                <a href="https://usoseguros.primesecure.com.br/" target="_blank" className="share-btn">
                                  <i className="fa-solid fa-plane" />
                                </a>
                              </div>
                            </div>
                            <div className="team__content" style={{background:'#fff!important',color:"#000!important"}}>
                              <h5 className="team__title mb-4" style={{textTransform: 'inherit!important'}}>{place.title}</h5>
                              <small>A partir de:</small>
                              <p>R$ {place.price} <small>/ dia</small></p>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    )
                  })}
                </Swiper>
                <div className="d-flex gap-1 align-items-center mt-5 mobile_arrow_mobile">
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
            </div>
          </div>
        </div>
      </section>
      {/* Team area end */}
    </>
  );
};

export default TeamFour;
