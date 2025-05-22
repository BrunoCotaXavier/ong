import "./style.projects.css";
import projeto1 from "../../assets/image01.jpeg";
import projeto2 from "../../assets/image02.jpeg";
import projeto3 from "../../assets/image03.jpeg";
import projeto4 from "../../assets/image04.jpeg";

const projects = [
  {
    title: "Cultura e Arte na Comunidade",
    description:
      "Atividades de música, dança, teatro e artes visuais que incentivam o talento e a expressão artística de crianças, jovens e adultos.",
    image: projeto1,
  },
  {
    title: "Saúde e Bem-Estar",
    description:
      "Projetos que oferecem apoio psicológico e emocional, além de cuidados de saúde básicos, com foco na qualidade de vida de nossos atendidos.",
    image: projeto2,
  },
  {
    title: "Educação para Todos",
    description:
      "Aulas de reforço escolar, cursos profissionalizantes e orientação pedagógica para crianças e jovens, proporcionando oportunidades para um futuro melhor.",
    image: projeto3,
  },
  {
    title: "Empoderamento Feminino",
    description:
      "Programas voltados para a capacitação profissional e psicológica de mulheres, ajudando-as a conquistar autonomia e a se destacar em diferentes áreas.",
    image: projeto4,
  },
];

const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <div className="cardProjects">
        <h1 className="projects-section-h1">Nossos Projetos</h1>
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
