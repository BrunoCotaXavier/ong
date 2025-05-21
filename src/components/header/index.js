import "./style.header.css"

import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="headerContainer">
            <div>
                {/* <img src={logo} width={100} /> */}
            </div>
            <div className="containerHeaderLink">
                <Link className="headerLink" to="/">Home</Link>
                <Link className="headerLink" to="/sobre-nos">Sobre Nós</Link>
                <Link className="headerLink" to="/galeria">Geleria</Link>
                <Link className="headerLink" to="/contato">Contato</Link>
                <Link className="headerLink" to="/doar">Doar</Link>
            </div>
        </div>
    )
}

export default Header;