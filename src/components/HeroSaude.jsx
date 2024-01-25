import React, { useRef } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const HeroSaude = () => {
    const swiperRef = useRef();
    return (
        <>
            {/* hero area start */}
            <section className="h-100">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    modules={[Navigation]}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: true,
                    }}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                >
                    <SwiperSlide className="hero__slider_saude_ hero__slider saude__hero">
                        <div className="skll__arrows_bottom d-flex gap-1 align-items-center px-5">
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
                    </SwiperSlide>
                    <SwiperSlide className="hero__slider_saude_2 hero__slider saude__hero">
                        <div className="container h-100">
                        <div className="skll__arrows_bottom d-flex gap-1 align-items-center px-5">
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
                        </div>
                    </SwiperSlide>
                </Swiper>

            </section>
            {/* hero area end */}
        </>
    );
};

export default HeroSaude;
