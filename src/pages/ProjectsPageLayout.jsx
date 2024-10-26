import { useParams } from "react-router-dom";
import "../App.css";
import projects from "../json/projects.json";
import { motion as m } from "framer-motion";

const ProjectsPageLayout = () => {
  const { id } = useParams();
  const project = projects.find((job) => job.id === parseInt(id));

  if (!project) {
    return <p>Projeto não encontrado.</p>;
  }

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="page-container"
    >
      <header>
        <h1>{project.title}</h1>
        <h2>Principais Tecnologias Utilizadas</h2>
        <ul>
          {project.techs.length > 0 &&
            project.techs.map((tech, index) => (
              <li key={index}>
                <a href={tech.url}>{tech.title}</a>
              </li>
            ))}
        </ul>
      </header>
      <section className="page-description">
        <h3>Sobre o Projeto</h3>
        {project.paragraphs.length > 0 &&
          project.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
      </section>
      <section className="page-images">
        <h3>Imagens da Aplicação</h3>
        <div className="images-container">
          {project.images.length > 0 &&
            project.images.map((image, index) => (
              <m.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="image-item"
              >
                <img src={image.url} alt={image.description} />
                <p>{image.description}</p>
              </m.div>
            ))}
        </div>
        <footer>
          <ul>
            {project.footerLinks.length > 0 &&
              project.footerLinks.map((footerLink, index) => (
                <li key={index}>
                  <a href={footerLink.url}>{footerLink.title}</a>
                </li>
              ))}
          </ul>
        </footer>
      </section>
    </m.div>
  );
};

export default ProjectsPageLayout;
