import "./style.header.css"

import { Link } from "react-router-dom";

import logo from "../../assets/logoOng.png"

const Header = () => {
    return (
        <div className="headerContainer">
            <div>
                <img src={logo} width={150} />
            </div>
            <div className="containerHeaderLink">
                <Link className="headerLink" to="/">Home</Link>
                <Link className="headerLink" to="/sobre-nos">Sobre Nós</Link>
                <Link className="headerLink" to="/galeria">Geleria</Link>
                <Link className="headerLink" to="/contato">Contato</Link>
                <div className="buttonDonate">
                    <Link className="headerLink" style={{color: "white"}} to="/doar">Doar</Link>
                </div>
            </div>  
        </div>
    )
}

export default Header;