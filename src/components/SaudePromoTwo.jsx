import React from "react";

const SaudePromoTwo = () => {
    return (
        <>
            {/* About area start */}
            <section className="about__area-6 pt-50 pb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-xl-6 col-md-6">
                            <div className="pt-0 about__content-6">
                                <h2 className="text-green sec-subtitle-2">VANTAGENS</h2>
                                <h3 className="sec-title underline-2 text-white">
                                    Quais as vantagens da Assistência Saúde USO?
                                </h3>
                                <p>A grande vantagem deste serviço está na facilidade de acessar um primeiro atendimento médico online, em qualquer momento, para uma variedade de sintomas.</p>
                                <p>Além disso, se necessário, você pode obter prescrições médicas diretamente na consulta, facilitando a continuação do seu tratamento. Com apenas alguns cliques, você tem à disposição uma equipe médica pronta para atender a várias necessidades de saúde, desde casos menos urgentes até sintomas que requerem atenção rápida. Aqui estão alguns dos sintomas comuns que podem ser avaliados através do Médico na Tela</p>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-xl-6 col-md-6">
                            <div className="about__imgs-6">
                                <div className="image-1">
                                    <img className="rounded" src="assets/imgs/saude_hero_about_two.jpg" alt="digibold" />
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

export default SaudePromoTwo;
