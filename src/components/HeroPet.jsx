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
                    <SwiperSlide className="hero__slider pet__hero">
                        <div className="container h-100">
                            <div className="hero__content-5 h-100 d-flex flex-column justify-content-center">
                                <h2 className="hero__title-5 cxufadeUp2">
                                Assistência completa para seu <span>companheiro de quatro patas</span></h2>
                                <p className="hero__dis-5 cxufadeUp2 my-4">
                                Sabemos que cada animal de estimação é especial e merece cuidado e proteção sob medida. Por isso, oferecemos planos flexíveis e abrangentes para manter seu amigo peludo seguro em todos os momentos.
                                </p>
                                <div className="hero__btn-wrapper-5">
                                    <Link className="db-btn-arrow" to="/about">
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

export default HeroViagens;
