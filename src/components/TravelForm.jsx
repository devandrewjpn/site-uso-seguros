import { Link } from "react-router-dom";

const HeroViagens = () => {
    return (
        <div className="hero__btn-wrapper-5">
                <Link className="db-btn-arrow" to="https://usoseguros.primesecure.com.br/" target="_blank" >
                    Cote agora! <i className="fa-solid fa-arrow-right" />
                </Link>
            </div>
        // <div className="travel__form mt-3">

        //     {/* <input type="text" placeholder="Destino" required className="travel__form_input" />

        //     <input type="text" onFocus={(e) => e.target.type = 'date'}
        //         onBlur={(e) => e.target.type = 'text'} placeholder="Quando" required className="travel__form_input" />

        //     <select name="" id="" className="travel__form_input">
        //         <option value="1 Passageiro">1 Passageiro</option>
        //         <option value="2 Passageiros">2 Passageiros</option>
        //     </select> */}

            

        //     {/* <a href="https://usoseguros.primesecure.com.br/" target="_blank" className="travel__form_button" rel="noreferrer">COTE AGORA</a> */}
        // </div>
    )
}

export default HeroViagens