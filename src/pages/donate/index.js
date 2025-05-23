import "./style.donate.css"
import qrcode from "../../assets/qrcode.jpeg";
import secure from "../../assets/icon-secure.svg"

const Donate = () => {
    return (
        <div className="containerDonate">
            <div className="cardDonate">
                <div className="cardDonateText">
                    <h2 className="titleCardDonate">Apoie a nossa causa</h2>
                    <br />
                    <span className="subtitleCardDonate">
                        Ajude a nossa organização doando hoje! Todas as doações vão <br /> diretamente fazer a diferença por nossa causa.
                    </span>
                    <div className="containerSecure">
                        <img src={secure} />
                        <span>Doação 100% segura</span>
                    </div>
                </div>
                <div className="cardDonatePix">
                    <h2>Quanto você deseja doar hoje?</h2>
                    <br />
                    <p>
                        Todas as doações impactam diretamente nossa organização e nos ajuda a levar adiante nossa missão.
                    </p>
                    <br />
                    <div className="cardDonateQrcode">
                        <img width={300} src={qrcode} />
                        <p>CNPJ 04.434.036/0001-34</p>
                        <br />
                        <p>Confirme o destinatário: Instituto Andrade</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Donate;