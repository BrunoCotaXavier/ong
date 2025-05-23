import "./style.projects.css";
import projeto1 from "../../assets/image01.jpeg";
import projeto2 from "../../assets/image02.jpeg";
import projeto3 from "../../assets/image03.jpeg";
import projeto4 from "../../assets/image04.jpeg";

const projects = [
  {
    title: "Cultura e Arte na Comunidade",
    description:
      "Promovemos atividades artísticas que fortalecem a identidade, estimulam a criatividade e aproximam a comunidade da cultura de forma acessível e transformadora. Através de oficinas de pintura, contação de histórias, dança, artes visuais, criamos espaços de expressão, convivência e pertencimento.",
    image: projeto1,
  },
  {
    title: "Doações",
    description:
      "Acreditamos na força da partilha para transformar realidades. Por meio de ações solidárias, promovemos o cuidado com as famílias da comunidade, levando acolhimento e apoio a quem mais precisa. Cada contribuição ajuda a construir um caminho mais justo e humano.",
    image: projeto2,
  },
  {
    title: "Saúde e Bem-Estar",
    description:
      "Promovemos atividades físicas que contribuem para o cuidado com o corpo e também com a saúde mental. Criamos espaços de convivência e movimento, onde a prática regular ajuda a fortalecer a autoestima, reduzir o estresse e melhorar a qualidade de vida. Cuidar do bem-estar é também uma forma de promover dignidade e pertencimento na comunidade.",
    image: projeto3,
  },
  {
    title: "Lazer para Todos",
    description:
      "Oferecemos atividades de lazer que promovem a integração, a diversão e o bem-estar da comunidade. Criamos espaços e eventos inclusivos onde todas as pessoas podem participar, se expressar livremente e fortalecer os laços de convivência. Acreditamos que momentos de lazer são essenciais para o equilíbrio, a alegria que transformam vidas.",
    image: projeto4,
  },
];

const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <div className="containerCardProjects">
        <div className="cardProjects">
          <h1 className="projects-section-h1">Nossos Projetos</h1>
        </div>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img className="project-card-img" src={project.image} alt={project.title} />
            <div className="project-info">
              <h3 className="project-info-h3">{project.title}</h3>
              <p className="project-info-p">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
