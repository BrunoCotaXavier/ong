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
                        <Link className="headerLink" style={{ color: "white" }} to="/doar">Doar</Link>
                    </div>
                </div>
            </div>
            <div className="containerSectionHome">
                <div className="cardSectionHome">
                    <h1>Descubra o que nos move</h1>
                    <div className="cardTextHome">
                        <p className="descriptionHome" style={{ paddingTop: 40, paddingRight: 40 }}>
                            No Instituto Comunitário Divas em Ação, realizamos uma série de projetos que têm como objetivo transformar realidades e oferecer novas perspectivas para aqueles que mais precisam. Nossos projetos culturais e sociais são pensados para engajar, educar e empoderar os participantes, estimulando a criatividade, o aprendizado e o trabalho em equipe.
                        </p>
                        <p className="descriptionHome" style={{ paddingTop: 40 }}>
                            Nossos projetos são desenhados para enfrentar os desafios sociais de forma criativa e eficaz, sempre com o objetivo de empoderar indivíduos e comunidades. Através de parcerias estratégicas e do engajamento comunitário, buscamos transformar realidades e inspirar mudanças positivas. Cada iniciativa é uma oportunidade de aprendizado e crescimento, tanto para os beneficiários quanto para os voluntários e colaboradores envolvidos.
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
