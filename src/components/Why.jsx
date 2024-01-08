import React, { useRef } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const clients = [
  {
    id: 1,
    image: 'assets/imgs/question__baloon.svg',
    myth: "Seguros de viagem são muito caros.",
    true: "Considerando que uma emergência médica no exterior pode custar, em média, entre R$10.000 e R$250.000, um seguro de viagem da USO por apenas uma fração desse custo é a definição de economia inteligente. Afinal, melhor ter e não precisar, do que precisar e não ter."
  },
  {
    id: 2,
    image: 'assets/imgs/question__baloon.svg',
    myth: "Nunca acontece nada comigo.",
    true: "Dados mostram que aproximadamente 15% dos viajantes têm algum imprevisto em viagens. Desde malas extraviadas, que atingem cerca de 24,1 milhões de peças por ano, até atrasos e cancelamentos de voo - não é sobre a frequência, é sobre estar preparado"
  },
  {
    id: 3,
    image: 'assets/imgs/question__baloon.svg',
    myth: "Seguros de viagem são complicados de usar.",
    true: "Os planos que comercializamos simplificam o processo de reivindicação a ponto de ser tão fácil quanto enviar uma selfie. Nosso aplicativo intuitivo guia você por cada etapa, facilitando a comunicação e a resolução rápida de sua necessidade."
  },
  {
    id: 4,
    image: 'assets/imgs/question__baloon.svg',
    myth: "Não cobre o que realmente importa.",
    true: "A USO Viagem cobre exatamente o que você valoriza. Seja uma consulta médica de emergência em Paris ou a recuperação de sua bagagem perdida nos Alpes Suíços, estamos lá onde e quando você precisar. Cobrimos os grandes eventos e os pequenos inconvenientes, para que sua única história seja sobre a viagem dos sonhos, e não sobre os perrengues!"
  },
]

const Why = () => {
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
              diferencial
            </h2>
            <h3 className="section-title-5 heading-animation">
              eu sei por que uso
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
