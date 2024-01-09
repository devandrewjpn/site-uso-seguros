import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

const CheckIcon = () => <img width={40} src="assets/imgs/check_icon.png" alt="" />

const HeroSaude = () => {

    return (
        <>
            {/* hero area start */}
            <section className="h-100">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                >
                    <SwiperSlide className="hero__slider saude__hero">
                        <div className="container h-100">
                            <div className="hero__content-5 h-100 d-flex flex-column justify-content-center">
                                <h2 className="hero__title-5 cxufadeUp2">
                                USO Saúde: Seu Médico Online, Cuidado<span> Rápido e Confiável</span></h2>
                                <p className="hero__dis-5 cxufadeUp2 my-4">Na USO, Redefinimos o Conceito de Cuidado com a Saúde: Em parceria com a SULAMÉRICA, criamos soluções inovadoras de emergência e assistência online. Mais do que um simples plano de saúde, oferecemos um conjunto amplo de benefícios e coberturas, projetados para revolucionar seu cuidado com a saúde.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="hero__slider saude__hero">
                        <div className="container h-100">
                            <div className="hero__content-5 h-100 d-flex flex-column justify-content-center">
                                <ul>
                                    <li>
                                        <p className="hero__dis-5 cxufadeUp2">
                                            <CheckIcon />
                                            Ideal para quem busca atendimento rápido e eficiente, diretamente na palma da mão.</p>
                                    </li>
                                    <li>
                                        <p className="hero__dis-5 cxufadeUp2">
                                            <CheckIcon />
                                            Sem burocracia e com apólice ativada imediatamente</p>
                                    </li>
                                    <li>
                                        <p className="hero__dis-5 cxufadeUp2">
                                            <CheckIcon />
                                            Tranquilidade e segurança para você e sua família em todos os momentos.</p>
                                    </li>
                                    <li>
                                        <p className="hero__dis-5 cxufadeUp2">
                                            <CheckIcon />
                                            O Serviço Médico na Tela está disponível 24 horas por dia, 365 dias por ano.</p>
                                    </li>
                                </ul>
                                
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </section>
            {/* hero area end */}
        </>
    );
};

export default HeroSaude;
