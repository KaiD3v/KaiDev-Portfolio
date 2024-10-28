// icons
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";

// images
import thriftStoreImg from "/assets/thrif-store-img.png";
import ijatuMysteryImg from "/assets/ijatu-mystery-img.png";
import miniblogImg from "/assets/miniblog-img.png";
import reactgramImg from "/assets/reactgram-img.png";
import myRepos from "/assets/MyRepos.png";
import tasksPlus from "/assets/TasksPlus.png";

// hooks
import { useState } from "react";

// libs
import { motion as m } from "framer-motion";

// components
import CardProject from "./CardProject";

const worksCardsContents = [
  {
    id: 1,
    projectLink: "/works/1",
    projectName: "Gerenciador de Brechó",
    projectImg: thriftStoreImg,
    projectDesc: "Uma aplicação de gerenciamento para lojas e brechós.",
    projectTechIcons: [<FaReact />, <SiExpress />, <RiTailwindCssFill />],
  },
  {
    id: 2,
    projectLink: "/works/2",
    projectName: "Site de Documentação - O Mistério de IJatu",
    projectImg: ijatuMysteryImg,
    projectDesc: "Um site de documentação para um RPG de mesa.",
    projectTechIcons: [<FaReact />, <SiTypescript />, <RiTailwindCssFill />],
  },
];

const projectsCardsContents = [
  {
    id: 1,
    projectLink: "/projects/4",
    projectName: "Tasks+",
    projectImg: tasksPlus,
    projectDesc: "Um site para gerenciar tarefas",
    projectTechIcons: [<RiNextjsFill />],
  },
  {
    id: 2,
    projectLink: "/projects/2",
    projectName: "My Repos",
    projectImg: myRepos,
    projectDesc: "Um site para armazenar repositórios do Github",
    projectTechIcons: [<RiNextjsFill />],
  },
  {
    id: 3,
    projectLink: "/projects/1",
    projectName: "MiniBlog",
    projectImg: miniblogImg,
    projectDesc: "Um pequeno blog que permite realizar postagens",
    projectTechIcons: [<FaReact />],
  },
  {
    id: 4,
    projectLink: "/projects/3",
    projectName: "ReactGram",
    projectImg: reactgramImg,
    projectDesc: "Um clone do instagram feito com ReactJs",
    projectTechIcons: [<FaReact />],
  },
];

const ProjectsSection = () => {
  const [projectContainer, setProjectContainer] = useState("projects");

  const toggleProjectContainer = () => {
    setProjectContainer("projects");
  };

  const toggleWorkContainer = () => {
    setProjectContainer("works");
  };

  return (
    <section
      id={projectContainer === "projects" ? "projects" : "works"}
      className="projects-principal-container"
    >
      <section className="projects-container">
        <header>
          <button
            onClick={toggleProjectContainer}
            className={projectContainer === "projects" ? "active" : ""}
          >
            Projetos
          </button>
          <button
            onClick={toggleWorkContainer}
            className={projectContainer === "works" ? "active" : ""}
          >
            Trabalhos
          </button>
        </header>
        <div className="projects-container-title">
          <h2>Projetos</h2>
        </div>
        <section className="projects-list">
          {projectContainer === "works" && (
            <m.main
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="home-container"
            >
              {worksCardsContents.length > 0 &&
                worksCardsContents.map((content, index) => (
                  <CardProject
                    key={content.id}
                    projectLink={content.projectLink}
                    projectName={content.projectName}
                    projectImg={content.projectImg}
                    projectDesc={content.projectDesc}
                    projectTechIcons={content.projectTechIcons}
                  />
                ))}
            </m.main>
          )}
          {projectContainer === "projects" && (
            <m.main
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="home-container"
            >
              {projectsCardsContents.length > 0 &&
                projectsCardsContents.map((content, index) => (
                  <CardProject
                    key={content.id}
                    projectLink={content.projectLink}
                    projectName={content.projectName}
                    projectImg={content.projectImg}
                    projectDesc={content.projectDesc}
                    projectTechIcons={content.projectTechIcons}
                  />
                ))}
            </m.main>
          )}
        </section>
      </section>
    </section>
  );
};

export default ProjectsSection;
