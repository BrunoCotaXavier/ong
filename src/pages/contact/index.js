import { Link } from "react-router-dom";
import "./style.contact.css"
import iconTelephone from "../../assets/icon-telefone.svg"
import iconEmail from "../../assets/icon-email.svg"
import iconLocation from "../../assets/icon-location.svg"

const Contact = () => {
    return (
        <div style={{ backgroundColor: "white" }}>
            <div className="contact-banner">
                <div className="overlay-text">
                    <h1 className="overlay-text-h1">Entre em contato e<br /> Faça Parte!</h1>
                    <p className="overlay-text-p">
                        Entendemos que essas iniciativas são essenciais para promover uma sociedade mais justa, inclusiva e repleta de oportunidades para cada indivíduo.
                    </p>
                    <div className="buttonDonateHome">
                        <Link className="headerLink" style={{ color: "white" }} to="/doar">Doar</Link>
                    </div>
                </div>
            </div>
            <div className="containerContact">
                <div className="cardContact">
                    <img width={45} src={iconTelephone} />
                    <br />
                    <p className="titleContact">Telefone</p>
                    <br />
                    <p>+55 (11) 94503-9713</p>
                    <br />
                </div>
                <div className="cardContact">
                    <img width={45} src={iconLocation} />
                    <br />
                    <p className="titleContact">Endereço</p>
                    <br />
                    <p>R. Joaquim Xavier de Lira, 60 <br />São Miguel Paulista, São Paulo - SP, 08020-140</p>
                </div>
                <div className="cardContact">
                    <img width={45} src={iconEmail} />
                    <br />
                    <p className="titleContact">E-mail</p>
                    <br />
                    <p>instituto.andrade01@gmail.com</p>
                    <br />
                </div>
            </div>
            <div>
                <iframe
                    src="https://www.google.com/maps?q=R.%20Joaquim%20Xavier%20de%20Lira,%2060%20-%20São%20Miguel%20Paulista,%20São%20Paulo%20-%20SP,%2008020-140&output=embed"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    );
}

export default Contact;