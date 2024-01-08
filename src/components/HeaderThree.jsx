import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const HeaderThree = () => {
  const [search, setSearch] = useState(false);
  const [offCanvas, setOffCanvas] = useState(false);

  useEffect(() => {
    var offCanvasNav = document.getElementById("offcanvas-navigation");
    var offCanvasNavSubMenu = offCanvasNav.querySelectorAll(".sub-menu");

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML(
        "beforebegin",
        "<span class='menu-expand'><i></i></span>"
      );
    }

    var menuExpand = offCanvasNav.querySelectorAll(".menu-expand");
    var numMenuExpand = menuExpand.length;

    function sideMenuExpand() {
      if (this.parentElement.classList.contains("active") === true) {
        this.parentElement.classList.remove("active");
      } else {
        for (let i = 0; i < numMenuExpand; i++) {
          menuExpand[i].parentElement.classList.remove("active");
        }
        this.parentElement.classList.add("active");
      }
    }

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", sideMenuExpand);
    }
  }, []);

  const searchControl = () => {
    setSearch(!search);
  };
  const offCanvasControl = () => {
    setSearch(false);
    setOffCanvas(!offCanvas);
  };
  return (
    <>
      {/* Header area start */}
      <header className="header__area-3 pos-abs plr-100">
        <div className="header__inner-3">
          <div className="header__logo">
            <Link to="/">
              <img src="https://usoseguros.com.br/dev/assets/_img/uso-logo.svg" alt="Uso Seguros Logo" />
            </Link>
          </div>
          <div className="header__menu-3">
            <nav className="main-menu">
              <ul>
                <li>
                  <Link to="/viagens">Seguro viagem</Link>
                </li>
                <li>
                  <Link to="/">Assistência PET</Link>
                </li>
                <li>
                  <Link to="/">Assistência Funerária</Link>
                </li>
                <li>
                  <Link to="/">Saúde</Link>
                </li>
                <li>
                  <Link to="/">Ajuda</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header__others">
            <div className="header__offcanvas-3">
              <button className="menu_icon" onClick={offCanvasControl}>
                <img src="assets/imgs/icon/menu.png" alt="Menu Icon" />
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* Header area end */}
      {/* Offcanvas area start */}
      <div
        className={!offCanvas ? "offcanvas__area" : "offcanvas__area showed"}
      >
        <div className="offcanvas__inner">
          <div className="offcanvas__top">
            <img src="https://usoseguros.com.br/dev/assets/_img/uso-logo.svg" alt="Logo" />
            <button id="offcanvas_close" onClick={offCanvasControl}>
              <i className="fa-solid fa-xmark" />
            </button>
          </div>
          <div className="offcanvas__menu">
            <nav className="offcanvas-navigation" id="offcanvas-navigation">
              <ul>
                <li>
                  <Link to="/">Início</Link>{" "}
                </li>
                <li>
                  <Link to="/">Seguro Viagem</Link>{" "}
                </li>
                <li>
                  <Link to="/">Assistência PET</Link>{" "}
                </li>
                <li>
                  <Link to="/">Assistência Funerária</Link>{" "}
                </li>
                <li>
                  <Link to="/">Saúde</Link>{" "}
                </li>
                <li>
                  <Link to="/">Ajuda</Link>{" "}
                </li>
              </ul>
            </nav>
          </div>
          <div className="offcanvas__btm">
            <div className="footer__address-3">
              <ul>
                <li>
                  <span>
                    <i className="fa-solid fa-location-dot" />
                  </span>
                  <p className="text-white">Rua Batista Santiago - 81 - BH - MG</p>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-phone" />
                  </span>
                  <div>
                    <Link to="tel:+88014420420">(31) 1234 1234</Link>
                    <Link hreto="tel:+88014420420">(31) 1234 1234</Link>
                  </div>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-envelope" />
                  </span>
                  <div>
                    <Link to="mailto:contato@usoseguros.com.br">contato@usoseguros.com.br</Link>
                    <Link to="mailto:atendimento@usoseguros.com.br">
                      atendimento@usoseguros.com.br
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
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
      </div>
      {/* Offcanvas area end */}
    </>
  );
};

export default HeaderThree;
