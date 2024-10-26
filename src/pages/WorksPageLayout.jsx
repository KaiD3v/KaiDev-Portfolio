import { useParams } from "react-router-dom";
import "../App.css";
import jobs from "../json/jobs.json";
import { motion as m } from "framer-motion";

const WorksPageLayout = () => {
  const { id } = useParams();
  const job = jobs.find((job) => job.id === parseInt(id));

  if (!job) {
    return <p>Trabalho não encontrado.</p>;
  }

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="page-container"
    >
      <header>
        <h1>{job.title}</h1>
        <h2>Principais Tecnologias Utilizadas</h2>
        <ul>
          {job.techs.length > 0 &&
            job.techs.map((tech, index) => (
              <li key={index}>
                <a href={tech.url}>{tech.title}</a>
              </li>
            ))}
        </ul>
      </header>
      <section className="page-description">
        <h3>Sobre o Projeto</h3>
        {job.paragraphs.length > 0 &&
          job.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
      </section>
      <section className="page-images">
        <h3>Imagens da Aplicação</h3>
        <div className="images-container">
          {job.images.length > 0 &&
            job.images.map((image, index) => (
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
            {job.footerLinks.length > 0 &&
              job.footerLinks.map((footerLink, index) => (
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

export default WorksPageLayout;
