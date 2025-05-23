import ProjectsSection from "../../components/projects";
import "./style.home.css";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <div className="home-banner">
                <div className="overlay-text">
                    <h1 className="overlay-text-h1">Faça Parte dos <br /> Nossos Projetos</h1>
                    <p className="overlay-text-p">
                        Acreditamos que esses projetos são ferramentas fundamentais para a construção de uma sociedade mais inclusiva e com mais oportunidades para todos.
                    </p>
                    <div className="buttonDonateHome">
                        <Link className="headerLink" style={{ color: "white" }} to="/projetos">Projetos</Link>
                    </div>
                </div>
            </div>
            <div className="containerSectionHome">
                <div className="cardSectionHome">
                    <h1 className="titleCardSectionHome">Descubra o que nos move</h1>
                    <div className="cardTextHome">
                        <p className="descriptionHome" style={{ paddingTop: 40, paddingRight: 40 }}>
                            No Instituto Andrade, desenvolvemos projetos sociais e culturais com o propósito de acolher, fortalecer e transformar vidas. Atuamos de forma ativa junto à comunidade, promovendo ações que incentivam a expressão artística, o cuidado com a saúde mental, a valorização das mulheres, o apoio a crianças e adolescentes, fortalecimento de vínculos familiares e comunitários. Nossas iniciativas são pensadas com afeto e responsabilidade, sempre buscando criar oportunidades reais de crescimento, bem-estar e inclusão. 
                        </p>
                        <p className="descriptionHome" style={{ paddingTop: 40 }}>
                            Oferecemos oficinas de artes, apresentações de dança, rodas de conversa, acompanhamento psicológico, atividades de apoio e acolhimento — tudo isso em um ambiente seguro, participativo e transformador.
                            Acreditamos na força do coletivo, nas parcerias e no poder do cuidado para construir um futuro mais justo e sensível para todos. Cada projeto que realizamos é uma ponte para o fortalecimento da nossa comunidade.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <ProjectsSection />
            </div>
        </div>
    );
};

export default Home;
