const HeroViagens = () => {
    return (
        <div className="travel__form mt-3">

            <input type="text" placeholder="Para onde?" required className="travel__form_input" />

            <input type="date" placeholder="Quando?" required className="travel__form_input" />

            <select name="" id="" className="travel__form_input">
                <option value="1 Passageiro">1 Passageiro</option>
                <option value="2 Passageiros">2 Passageiros</option>
            </select>

            <button className="travel__form_button" type="button">Cote agora</button>
        </div>
    )
}

export default HeroViagens