import React from "react";

import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
const HeroViagens = () => {

    return (
        <>
            {/* hero area start */}
            <section className="h-100">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                >
                    <SwiperSlide className="hero__slider viagens__hero">
                        <div className="container h-100">
                            <div className="row h-100">
                                <div className="col-md-7">
                                <div className="hero__content-5 h-100 d-flex flex-column justify-content-center">
                                <h2 className="hero__title-5 cxufadeUp2">
                                    Sua jornada, nossa <span>missão</span></h2>
                                <p className="hero__dis-5 cxufadeUp2">
                                    Seguro viagem USO.
                                </p>
                                <div className="hero__btn-wrapper-5 cxufadeUp2">
                                    <Link className="db-btn-arrow" to="/about">
                                        Fazer cotação <i className="fa-solid fa-arrow-right" />
                                    </Link>
                                </div>
                                <small className="text-white mt-4 cxufadeUp2">Relaxe e aproveite cada momento, nós cuidamos dos detalhes para que sua única
                                    preocupação<br />seja viver ao máximo. Sua jornada merece a melhor proteção, sua
                                    história merece a USO!</small>
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

export default HeroViagens;
