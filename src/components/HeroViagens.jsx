import React from "react";

import TravelForm  from './TravelForm';
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
                    <SwiperSlide className="hero__slider__viagens hero__slider viagens__hero hero__slider_cover" style={{height: '70vh!important'}}>
                        <div className="container h-100">
                            <div className="row h-100">
                                <div className="col-md-10">
                                <div className="hero__content-5 h-100 d-flex flex-column justify-content-center">
                                <h4 className="hero__title-5 cxufadeUp2" style={{fontSize: '3.125rem'}}>
                                    USO Viagem: Sua jornada, nossa missão</h4>
                                <div className="cxufadeUp2">
                                    <TravelForm />
                                </div>
                                <p className="text-white mt-4 cxufadeUp2" style={{fontSize: '1.125rem'}}>Relaxe e aproveite cada momento, nós cuidamos dos detalhes para que sua única
                                    preocupação<br />seja viver ao máximo. Sua jornada merece a melhor proteção, sua
                                    história merece a USO!</p>
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
