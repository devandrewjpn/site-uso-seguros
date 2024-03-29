import React from "react";
import { Link } from "react-router-dom";

const FooterThree = () => {
  return (
    <>
      {/* Footer area start */}
      <footer className="pt-0 footer__area-3">
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
                        <Link to="https://www.facebook.com/profile.php?id=61555764308346" target="_blank">
                          <i className="fa-brands fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link to="https://www.tiktok.com/@usoseguros" target="_blank">
                          <i className="fa-brands fa-tiktok" />
                        </Link>
                      </li>
                      <li>
                        <Link to="https://www.instagram.com/usoseguros/" target="_blank">
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
                      <Link to="/viagens">USO Viagem</Link>
                    </li>
                    {/* <li>
                      <Link to="/pet">USO PET</Link>
                    </li> */}
                    <li>
                      <Link to="/funeral">USO Funeral</Link>
                    </li>
                    <li>
                      <Link to="/saude">USO Saúde</Link>
                    </li>
                    {/* <li>
                      <Link to="/ajuda">FAQ</Link>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <div className="footer__address-3">
                  <h2 className="footer__title">Contato e Local</h2>
                  <ul>
                    <li>
                      <span>
                        <i className="fa-solid fa-phone" />
                      </span>
                      <div>
                        <Link to="tel:+553121180092"> (31) 2118-0092</Link>
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
                      Copyright @2024 USO Seguros. Todos os direitos reservados.
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
