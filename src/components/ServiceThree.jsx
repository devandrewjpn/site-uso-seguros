import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const services = [
  {
    id: 1,
    icon: 'assets/imgs/Funeraria.png',
    title: 'Assistência Funerária',
    text: 'Com a USO, Enfrente Momentos Difíceis com Dignidade e Respeito - Assistência Funerária que Cuida de Cada Detalhe.',
    href: '/funeral'
  },
  {
    id: 2,
    icon: 'assets/imgs/Pet.png',
    title: 'Assistência Pet',
    text: 'USO Pet: Proteção e Cuidado para seu Melhor Amigo - Assistência Completa para a Saúde e Bem-estar do seu Animal de Estimação.',
    href: '/pet'
  },
  {
    id: 3,
    icon: 'assets/imgs/Saúde.png',
    title: 'Assistência Saúde',
    text: 'USO Saúde: Atendimento Médico a Qualquer Hora, em Qualquer Lugar - Sua Saúde Conectada às Melhores Soluções.',
    href: '/saude'
  },
  {
    id: 4,
    icon: 'assets/imgs/Viagem.png',
    title: 'Assistência Viagem',
    text: 'Explore o Mundo com Segurança - O Seguro Viagem USO Oferece Proteção Completa para suas Aventuras e seus Momentos de Lazer e Descanso.',
    href: '/viagens'
  }
]

const ServiceThree = () => {
  const swiperRef = useRef();
  return (
    <>
      {/* Service area start */}
      <section className="service__area-3 pt-150 pb-150" style={{ background: 'black' }}>
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-xl-6 col-md-6">
              <div className="service__title-wrap" data-aos="fade-up">
                <h3 className="sec-title text-white">
                  Descomplicamos sua vida num só USO
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="">
              <Swiper
                spaceBetween={100}
                modules={[Navigation]}
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}
                slidesPerView={3}
                breakpoints={{
                  400: {
                    slidesPerView: 1,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
              >
                {services.map(service => {
                  return (
                    <SwiperSlide
                      key={service.id}
                      className="service__item-3"
                    >
                      <div className="icon">
                        <img width={150} src={service.icon} alt="Service Icon" />
                      </div>
                      <div className="service__content-3">
                        <Link to={service.href}>
                          <div className="service__title-3">{service.title}</div>
                        </Link>
                        <p className="justify__text">{service.text}</p>
                        <Link
                          className="db-btn-border btn-rollover color-1"
                          to={service.href}
                        >
                          Saiba mais <i className="fa-solid fa-arrow-right" />
                        </Link>
                      </div>
                    </SwiperSlide>
                  )
                })}
                <div className="d-flex gap-1 align-items-center mt-5">
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
              </Swiper>

            </div>
          </div>
        </div>
      </section>
      {/* Service area end */}
    </>
  );
};

export default ServiceThree;
