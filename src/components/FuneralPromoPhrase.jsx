const FuneralPromoPhrase = () => {

    const scrollToSection = () => {
        if(window.innerWidth > 600) {
            document.querySelector('.pricing').scrollIntoView(true)
        } else {
            document.querySelector('.pricingmb').scrollIntoView(true)
        }
      };

    return (
        <section className="default__promo funeral_promo_bg">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h3 className="text-white">Assistência Funeral USO</h3>
                        <p className="text-white my-3">Somos a presença que te conforta. Nossa missão é selecionar os melhores parceiros para oferecer paz de espírito em momentos de luto, cuidando de todos os detalhes para que você possa se concentrar no que é mais importante: lembrar e honrar.</p>
                        <button className="text-white" onClick={scrollToSection}>CONTRATE AGORA!</button>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default FuneralPromoPhrase;
