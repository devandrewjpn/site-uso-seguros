import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    icon: 'assets/imgs/Funerária.png',
    title: 'Assistência Funerária',
    href: '/'
  },
  {
    id: 2,
    icon: 'assets/imgs/Pet.png',
    title: 'Assistência Pet',
    href: '/'
  },
  {
    id: 3,
    icon: 'assets/imgs/Saúde.png',
    title: 'Assistência Saúde',
    href: '/'
  },
  {
    id: 4,
    icon: 'assets/imgs/Viagem.png',
    title: 'Assistência Viagem',
    href: '/viagens'
  },
  {
    id: 5,
    icon: 'assets/imgs/Vita.png',
    title: 'Assistência Vida',
    href: '/'
  }
]

const ServiceThree = () => {
  return (
    <>
      {/* Service area start */}
      <section className="service__area-3 pt-150 pb-150" style={{ background: 'black' }}>
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-xl-6 col-md-6">
              <div className="service__title-wrap" data-aos="fade-up">
                <h2 class="section-subtitle-5 heading-animation">SERVIÇOS</h2>
                <h3 className="sec-title text-white">
                  Descomplicamos sua vida num só USO
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="service__list-3">
              {services.map(service => {
                return (
                  <div
                    key={service.id}
                    className="service__item-3"
                    data-aos="fade-up"
                    data-aos-delay={400}
                  >
                    <div className="icon">
                      <img width={150} src={service.icon} alt="Service Icon" />
                    </div>
                    <div className="service__content-3">
                      <Link to={service.href}>
                        <div className="service__title-3">{service.title}</div>
                      </Link>
                      <p className="justify__text">
                        It is a long established fact that a reader lio will be lio
                        distracted by the readable content of an seo page desgner
                      </p>
                      <Link
                        className="db-btn-border btn-rollover color-1"
                        to={service.href}
                      >
                        Saiba mais <i className="fa-solid fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                )
              })}

            </div>
          </div>
        </div>
      </section>
      {/* Service area end */}
    </>
  );
};

export default ServiceThree;
