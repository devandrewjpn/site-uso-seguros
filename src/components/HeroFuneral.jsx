import React from "react";

import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
const HeroFuneral = () => {

    return (
        <>
            {/* hero area start */}
            <section className="h-100">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                >
                    <SwiperSlide className="hero__slider funeral__hero">
                        <div className="container h-100">
                            <div className="hero__content-5 h-100 d-flex flex-column justify-content-center">
                                <h2 className="hero__title-5 cxufadeUp2">
                                Saudades Sim, <span>Preocupações Não</span></h2>
                                <p className="hero__dis-5 cxufadeUp2 my-4">Sabemos que lidar com a perda é um dos desafios mais difíceis da vida. Por isso, nosso foco é cuidar de todos os detalhes necessários, para que você possa se concentrar no que realmente importa: recordar e homenagear a vida daqueles que partem.</p>
                                <p className="hero__dis-5 cxufadeUp2 my-4">Na USO, acreditamos que um adeus deve ser um momento de paz e amor, não de preocupações. Estamos aqui para assegurar que a despedida do seu ente querido seja realizada de maneira honrosa e serena. Com a USO, você deixa saudades, não preocupações.</p>
                                <div className="hero__btn-wrapper-5">
                                    <Link className="db-btn-arrow" to="/funeral">
                                        Conheça nossos planos <i className="fa-solid fa-arrow-right" />
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

export default HeroFuneral;
