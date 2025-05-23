import "./style.bottom.css"

import { Link } from "react-router-dom";
import logo from "../../assets/logoOng.png"

const bottom = () => {
    return (
        <div>
            <div className="containerBottom">
                <div className="cardBottom">
                    <h6 className="tittleBottom">SOBRE</h6>
                    <br />
                    <div className="textBottom">
                        <div style={{ display: "flex", flexDirection: "column", fontSize: 12 }}>
                            <Link style={{ color: "white" }} onClick={() => window.scrollTo(0, 0)} to="">Home</Link>
                            <Link style={{ color: "white" }} onClick={() => window.scrollTo(0, 0)} to="projetos">Projetos</Link>
                            <Link style={{ color: "white" }} onClick={() => window.scrollTo(0, 0)} to="galeria">Galeria</Link>
                            <Link style={{ color: "white" }} onClick={() => window.scrollTo(0, 0)} to="contato">Contato</Link>
                            <Link style={{ color: "white" }} onClick={() => window.scrollTo(0, 0)} to="doar">Doar</Link>
                        </div>
                    </div>
                </div>
                <div className="cardBottom">
                    <h6 className="tittleBottom">LOCAL</h6>
                    <br />
                    <div className="textBottom">
                        <h6>Rua Joaquim Xavier de Lira, 60.</h6>
                        <div>
                            <br />
                            <Link style={{ color: "white" }} target="_blank" to="https://www.instagram.com/andrade_instituto/?igsh=MXBteHljaDFwejF0dQ%3D%3D#">@andrade_instituto</Link>
                        </div>
                    </div>
                </div>
                <div className="cardBottom">
                    <div style={{ paddingLeft: 20 }}>
                        <h6 className="tittleBottom">CONTATO</h6>
                        <br />
                        <div className="textBottom">
                            <h6>Fale Conosco</h6>
                            <h6>+55 (11) 94503-9713</h6>
                            <h6>instituto.andrade01@gmail.com</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="containerRotate">
                <div className="cardRotate">
                    <span>© 2025 - INSTITUTO ANDRADE - CNPJ 04.434.036/0001-34</span>
                    <img width={100} src={logo} />
                    <Link style={{ color: "black" }} to="">Política de Privacidade - Termos e Condições</Link>
                </div>
            </div>
        </div>
    )
}

export default bottom;