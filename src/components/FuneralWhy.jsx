import React from "react";

const items = [
    {
        id: 1,
        title: 'Tranquilidade completa',
        text: 'Com abrangência nacional, os planos que comercializamos cobrem todos os aspectos do serviço funerário, oferecendo desde o traslado até a ornamentação, com respeito e profissionalismo.',
    },
    {
        id: 2,
        title: 'Flexibilidade e conforto',
        text: 'Os planos incluem cerimônia de homenagem e cremação, respeitando as escolhas pessoais e familiares.',
    },
    {
        id: 3,
        title: 'Suporte experiente',
        text: 'Conte com uma equipe especializada pronta para prestar assistência em cada passo, garantindo um serviço digno e sem preocupações.',
    },
]

const FuneralWhy = () => {
    return (
        <>
            {/* About area start */}
            <section className="about__area-6 pt-50 pb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-xl-6 col-md-6">
                            <div className="about__imgs-6">
                                <div className="image-1">
                                    <img className="rounded" src="assets/imgs/funeral__benefits_hero.jpg" alt="digibold" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-xl-6 col-md-6">
                            <div className="pt-0 about__content-6">
                                <h2 className="text-green sec-subtitle-2">BENEFÍCIOS</h2>
                                <h3 className="sec-title underline-2 text-white">
                                    Por que contratar a Assistência Funerária USO?
                                </h3>
                                {items.map(item => {
                                    return (
                                        <div key={item.id} class="service__item-5 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                                            <div class="service__thumb-5 text-start">
                                                <img width={50} src="assets/imgs/home-5/s3.png" alt="service-icon" />
                                            </div>
                                            <div class="service__content-5 text-start">
                                                <a href="/viagens">
                                                    <h3 class="service__item-title">{item.title}</h3>
                                                </a>
                                                <p>{item.text}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    src="assets/imgs/shape/6.png"
                    alt="Zigzag Shape"
                    className="shape"
                />
            </section>
            {/* About area end */}
        </>
    );
};

export default FuneralWhy;
