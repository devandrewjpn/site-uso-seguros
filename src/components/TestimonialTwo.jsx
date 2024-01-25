import React, { useRef } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const clients = [
  {
    id: 1,
    name: 'Bianca Fernandes',
    image: 'https://usoseguros.com.br/dev/assets/content/app7/images/app7-woman.png',
    message: "Sou cliente há pouco tempo, mas já amei a economia que tive ao contratar os serviços! A praticidade e o atendimento de primeira em tudo que precisei. Já indiquei pra todo mundo!!",
    label: 'Cliente'
  },
  {
    id: 2,
    name: 'Jack Sparrow',
    image: 'https://lens-storage.storage.googleapis.com/png/b39306097f8240a2915dd45ed9b9684e',
    message: "Sou cliente há pouco tempo, mas já amei a economia que tive ao contratar os serviços! A praticidade e o atendimento de primeira em tudo que precisei. Já indiquei pra todo mundo!!",
    label: 'Cliente'
  },
  {
    id: 3,
    name: 'Rick Sanchez',
    image: 'https://hbomax-images.warnermediacdn.com/2023-11/rick.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com',
    message: "Sou cliente há pouco tempo, mas já amei a economia que tive ao contratar os serviços! A praticidade e o atendimento de primeira em tudo que precisei. Já indiquei pra todo mundo!!",
    label: 'Cliente'
  },
]

const TestimonialTwo = () => {
  const swiperRef = useRef();
  return (
    <>
      {/* testimonial area start */}
      <section className="testimonial__area-5 mt-5 py-5">
        <div className="container">
          <div className="digibold-section-wrapper-5">
            <h3 className="section-title-5 heading-animation">
              Quem faz USO
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
                {clients.map(client => {
                  return (
                    <SwiperSlide key={client.id}>
                      <div className="swiper-slide">
                        <div className="testimonial__item-5">
                          <div className="testimonial__header-5">
                            <div className="testimonial__thumb-5">
                              <img
                              width={120}
                                src={client.image}
                                alt="testimonial"
                              />
                            </div>
                            <div className="testimonial__rating-5">
                              <div className="testimonial__rating-wrap-5">
                                <div className="testimonial__rating-star">
                                  <i className="fa-solid fa-star" />
                                  <i className="fa-solid fa-star" />
                                  <i className="fa-solid fa-star" />
                                  <i className="fa-solid fa-star" />
                                  <i className="fa-solid fa-star" />
                                  <i className="fa-solid fa-star" />
                                </div>
                                <span className="testimonial__rate-5">5.0</span>
                              </div>
                            </div>
                          </div>
                          <div className="p-animation">
                            <p className="justify__text">{client.message}</p>
                          </div>
                          <div className="testimonial__footer-5">
                            <h4 className="testimonial__name-5">{client.name}</h4>
                            <span className="testimonial__post-5">
                              {client.label}
                            </span>
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

export default TestimonialTwo;
