import React from "react";

const items = [
    {
        id: 1,
        text: 'Agende sua consulta online 24 horas por dia, 7 dias na semana com facilidade e rapidez',
        img: 'assets/imgs/agende_consulta.png'
    },
    {
        id: 2,
        text: 'Fale com médicos em poucos minutos, onde quer que você esteja',
        img: 'assets/imgs/fale_medicos.png'
    },
    {
        id: 3,
        text: 'Está se sentindo mal? Evite Autodiagnóstico e Automedicação: Receba orientações confiáveis de profissionais de saúde a qualquer momento',
        img: 'assets/imgs/sentindo_mal.png'
    },
    {
        id: 4,
        text: 'Prescrição Médica Digital: Receitas eletrônicas práticas e aceitas em todas as farmácias.',
        img: 'assets/imgs/prescricao.png'
    },
    {
        id: 5,
        text: 'Cuide da sua saúde sem sair de casa: 95% dos casos são eficientemente resolvidos pelo consulta online.',
        img: 'assets/imgs/cuide.png'
    },
    {
        id: 6,
        text: 'Atendimento Humanizado sem Filas: Consultas confortáveis e seguras, evitando exposição a doenças em hospitais',
        img: 'assets/imgs/atendimento_humanizado.png'
    },
]

const SaudePromoOne = () => {
    return (
        <>
            {/* About area start */}
            <section className="about__area-6 pt-150 pb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-xl-6 col-md-6">
                            <div className="about__imgs-6">
                                <div className="image-1">
                                    <img className="rounded" src="assets/imgs/saude_hero_about_one.jpg" alt="digibold" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-xl-6 col-md-6">
                            <div className="pt-50 about__content-6">
                                <h3 className="sec-title underline-2 text-white" style={{fontSize: 30}}>
                                    Experimente a tranquilidade de ter assistência médica qualificada sempre disponível, sem filas e com toda a privacidade que você merece.
                                </h3>
                                <div className="hero__two_columns_icons">
                                    {items.map(item => {
                                        return (
                                            <div key={item.id} class="service__item-5 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                                                <div class="service__thumb-5 text-start">
                                                    <img width={80} src={item.img} alt="service-icon" />
                                                </div>
                                                <div class="service__content-5 text-start">
                                                    <p>{item.text}</p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
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

export default SaudePromoOne;
