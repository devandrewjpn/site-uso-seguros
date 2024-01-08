import React from "react";
import { Link } from "react-router-dom";

const FooterThree = () => {
  return (
    <>
      {/* Footer area start */}
      <footer className="footer__area-3">
        <div className="container">
          <div className="footer__widgets-3">
            <div className="row">
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <div className="footer__logo-3">
                  <img
                    src="https://usoseguros.com.br/dev/assets/_img/uso-logo.svg"
                    alt="Footer Logo"
                  />
                  <p>
                    Para você e para sua família.
                  </p>
                  <div className="footer__social-3">
                    <ul>
                      <li>
                        <Link to="#">
                          <i className="fa-brands fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fa-brands fa-tiktok" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fa-brands fa-instagram" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <div className="footer__link-3">
                  <h2 className="footer__title">Links</h2>
                  <ul>
                    <li>
                      <Link to="/">Quem somos</Link>
                    </li>
                    <li>
                      <Link to="/">Fale Conosco</Link>
                    </li>
                    <li>
                      <Link to="/viagens">Seguro Viagem</Link>
                    </li>
                    <li>
                      <Link to="/">Assistência PET</Link>
                    </li>
                    <li>
                      <Link to="/">Assistência Funeral</Link>
                    </li>
                    <li>
                      <Link to="/">FAQ</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <div className="footer__address-3">
                  <h2 className="footer__title">Contato e Local</h2>
                  <ul>
                    <li>
                      <span>
                        <i className="fa-solid fa-location-dot" />
                      </span>
                      <p>Rua Batista Santiago 81, Liberdade, Belo Horizonte - MG</p>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-phone" />
                      </span>
                      <div>
                        <Link to="tel:+88014420420">(31) 1234 1234</Link>
                        <Link to="tel:+88014420420">(31) 1234 1234</Link>
                      </div>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-envelope" />
                      </span>
                      <div>
                        <Link to="mailto:contato@usoseguros.com.br">
                          contato@usoseguros.com.br
                        </Link>
                        <Link to="mailto:suporte@usoseguros.com.br">
                          suporte@usoseguros.com.br
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__btm-3-wrap">
          <div className="container">
            <div className="row">
              <div className="col-xxl-12">
                <div className="footer__btm-3">
                  <div className="footer__copyright-3">
                    <p>
                      Copyright @2023 USO Seguros. Todos os direitos reservados.
                    </p>
                  </div>
                  <div className="footer__menu-3">
                    <ul>
                      <li>
                        <Link to="/">Políticas de Privacidade.</Link>
                      </li>
                      <li>
                        <Link to="/">Termos de uso</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer area end */}
    </>
  );
};

export default FooterThree;
