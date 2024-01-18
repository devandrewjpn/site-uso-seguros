import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const services = [
  {
    id: 1,
    icon: 'assets/imgs/abrangencia.png',
    title: 'Abrangência Nacional',
    text: 'Serviço disponível em todo o Brasil.',
  },
  {
    id: 2,
    icon: 'assets/imgs/translado.png',
    title: 'Traslado Nacional',
    text: 'Transporte do falecido em todo território nacional (limite de 3.000 km), incluindo dois trechos (local do óbito para funerária e funerária para velório/sepultamento).',
  },
  {
    id: 3,
    icon: 'assets/imgs/urna.png',
    title: 'Urna Padrão',
    text: 'Personalizada em tamanho, com visor, verniz e acabamento interno em renda.',
  },
  {
    id: 4,
    icon: 'assets/imgs/ornamentacao.png',
    title: 'Ornamentação Interna',
    text: 'Decoração cuidadosa e respeitosa da urna.',
  },
  {
    id: 5,
    icon: 'assets/imgs/tanatopraxia.png',
    title: 'Tanatopraxia',
    text: 'Conservação e preparação do corpo, realizada por técnicos especializados.',
  },
  {
    id: 6,
    icon: 'assets/imgs/veu.png',
    title: 'Véu',
    text: 'Incluso para cobertura do falecido.',
  },
  {
    id: 7,
    icon: 'assets/imgs/coroa.png',
    title: 'Coroa de Flores',
    text: 'Escolha entre flores naturais ou permanentes.',
  },
  {
    id: 8,
    icon: 'assets/imgs/lista_verde.png',
    title: 'Lista de Homenagens',
    text: 'Espaço para mensagens de recordação e carinho.',
  },
  {
    id: 9,
    icon: 'assets/imgs/ceremonial.png',
    title: 'Cerimonial Personalizado',
    text: 'Organização conforme disponibilidade local e agendamentos.',
  },
  {
    id: 10,
    icon: 'assets/imgs/lembranca.png',
    title: 'Lembrancinhas de Luto',
    text: 'Pequena recordação para os presentes.',
  },
  {
    id: 11,
    icon: 'assets/imgs/cremacao.png',
    title: 'Opção de Cremação',
    text: 'Disponível com possibilidade de ajuste nos valores do plano.',
  },
  {
    id: 12,
    icon: 'assets/imgs/taxa_de_cemiterio.png',
    title: 'Taxas de Cemitério',
    text: 'Inclui custos de sepultamento, velório, jazigo e lápide em cemitérios públicos municipais.',
  },
  {
    id: 13,
    icon: 'assets/imgs/metropax.png',
    title: 'Clube de Vantagens METROPAX',
    text: 'Benefícios adicionais exclusivos.Clique e confira!',
  },
]

const FuneralServices = () => {
  const swiperRef = useRef();
  return (
    <>
      {/* Service area start */}
      <section className="service__area-3 pt-150 pb-150" style={{ background: 'black' }}>
        <div className="container">
          <div className="row">
            <div className="">
              <Swiper
                spaceBetween={100}
                modules={[Navigation]}
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}
                slidesPerView={4}
                breakpoints={{
                  400: {
                    slidesPerView: 1,
                  },
                  1024: {
                    slidesPerView: 4,
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
                        <img width={80} src={service.icon} alt="Service Icon" />
                      </div>
                      <div className="service__content-3">
                        <Link to={service.href}>
                          <div className="service__title-3">{service.title}</div>
                        </Link>
                        <p className="justify__text">{service.text}</p>
                      </div>
                    </SwiperSlide>
                  )
                })}
                <div className="d-flex gap-1 align-items-center">
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

export default FuneralServices;
