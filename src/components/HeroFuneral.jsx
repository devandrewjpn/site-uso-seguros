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
                    <SwiperSlide className="hero__slider funeral__hero hero__slider_cover">
                        <div className="container h-100">
                            <div className="row h-100">
                                <div className="col-md-8">
                                    <div className="hero__content-5 h-100 d-flex flex-column justify-content-center">
                                        <h2 className="hero__title-5 cxufadeUp2" style={{fontSize: 50}}>
                                            Saudades Sim, <span>Preocupações Não</span></h2>
                                        <p className="hero__dis-5 cxufadeUp2 my-4" style={{fontSize: 20}}>Sabemos que lidar com a perda é um dos desafios mais difíceis da vida. Por isso, nosso foco é cuidar de todos os detalhes necessários, para que você possa se concentrar no que realmente importa: recordar e homenagear a vida daqueles que partem.</p>
                                        <div className="hero__btn-wrapper-5">
                                            <Link className="db-btn-arrow" to="/funeral">
                                                Conheça nossos planos <i className="fa-solid fa-arrow-right" />
                                            </Link>
                                        </div>
                                    </div>
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
