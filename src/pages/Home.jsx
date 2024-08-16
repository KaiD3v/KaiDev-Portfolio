// hooks & libs
import { useState } from "react";
import { motion as m } from "framer-motion";

// icons
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// Images
import thriftStoreImg from "../assets/img/thrif-store-img.png";
import ijatuMysteryImg from "../assets/img/ijatu-mystery-img.png";
import miniblogImg from "../assets/img/miniblog-img.png";
import reactgramImg from "../assets/img/reactgram-img.png";
import myRepos from "../assets/img/MyRepos.png";

// components
import CardProject from "../components/CardProject";

import emailjs from "@emailjs/browser";

const Home = () => {
  const [projectContainer, setProjectContainer] = useState("projects");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailSend, setEmailSend] = useState("");
  const [message, setMessage] = useState("");
  const [monitorEmailShipment, setMonitorEmailShipment] = useState("");

  const toggleProjectContainer = () => {
    setProjectContainer("projects");
  };

  const toggleWorkContainer = () => {
    setProjectContainer("works");
  };

  const handelSendEmail = async e => {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      setEmailSend("Preencha todos os campos!");
      setMonitorEmailShipment("error");
      return;
    }

    const templateParams = {
      from_name: name,
      email: email,
      message: message
    };

    emailjs
      .send(
        "service_n4tz3te",
        "template_vcv1hpm",
        templateParams,
        "EnhX-oOCHeYE88ttm"
      )
      .then(res => {
        setEmailSend("E-Mail enviado com sucesso!");
        setMonitorEmailShipment("success");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch(err =>
        setEmailSend("Ocorreu um erro, tente novamente mais tarde.")
      );
  };

  return (
    <m.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="home-container"
    >
      <section id="profile" className="profile-container">
        <div>
          <section className="profile-picture">
            <img
              src="https://avatars.githubusercontent.com/u/126838751?v=4"
              alt="profile"
            />
          </section>
          <section className="profile-description">
            <h2>Kaique Melo</h2>
            <p>Freelancer, Desenvolvedor & Estudante</p>
            <ul>
              <li>
                <a href="https://github.com/KaiD3v">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/kaique-ricardo-de-melo-98969b256/">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="mailto:kaikricardo99@gmail.com">
                  <MdEmail />
                </a>
              </li>
            </ul>
          </section>
        </div>
      </section>
      <section className="about-container">
        <h2>Olá!</h2>
        <p>
          Meu nome é Kaique, e sou um desenvolvedor fullstack apaixonado por
          solucionar problemas através da programação.
        </p>
        <p>
          No momento, trabalho como freelancer, onde utilizo as stacks{" "}
          <a href="https://nextjs.org/docs">Next.js</a> e{" "}
          <a href="https://docs.nestjs.com/">Nest.js</a> do JavaScript para
          criar soluções inovadoras e eficientes para meus clientes.
        </p>
      </section>
      <section className="portfolio-container">
        <h2>Portfólio</h2>
      </section>
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
            {projectContainer === "works" &&
              <m.main
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="home-container"
              >
                <CardProject
                  projectLink={"/works/thrift-store-manager"}
                  projectName="Gerenciador de Brechó"
                  projectImg={thriftStoreImg}
                  projectDesc="Uma aplicação de gerenciamento para lojas e brechós."
                  projectTechIcons={[
                    <FaReact />,
                    <SiExpress />,
                    <RiTailwindCssFill />
                  ]}
                />
                <CardProject
                  projectLink={"/works/ijatu-mystery-rpg"}
                  projectName="Site de Documentação - O Mistério de IJatu"
                  projectImg={ijatuMysteryImg}
                  projectDesc="Um site de documentação para um RPG de mesa."
                  projectTechIcons={[
                    <FaReact />,
                    <SiTypescript />,
                    <RiTailwindCssFill />
                  ]}
                />
              </m.main>}
            {projectContainer === "projects" &&
              <m.main
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="home-container"
              >
                <CardProject
                  projectLink={"/projects/mini-blog"}
                  projectName="MiniBlog"
                  projectImg={miniblogImg}
                  projectDesc="Um pequeno blog que permite realizar postagens"
                  projectTechIcons={<FaReact />}
                />
                <CardProject
                  projectLink={"/projects/reactgram"}
                  projectName="ReactGram"
                  projectImg={reactgramImg}
                  projectDesc="Um clone do instagram feito com ReactJs"
                  projectTechIcons={<FaReact />}
                />
                <CardProject
                  projectLink={"/projects/my-repos"}
                  projectName="My Repos"
                  projectImg={myRepos}
                  projectDesc="Um site para armazenar repositórios do Github"
                  projectTechIcons={<FaReact />}
                />
              </m.main>}
          </section>
        </section>
      </section>
      <section id="contact" className="contact-container">
        <header>
          <h2>Contato</h2>
        </header>
        <main>
          <form onSubmit={handelSendEmail}>
            <label>
              <span>Nome</span>
              <input
                required
                type="text"
                placeholder="Seu nome"
                onChange={e => setName(e.target.value)}
                value={name || ""}
              />
            </label>
            <label>
              <span>E-Mail</span>
              <input
                required
                type="email"
                placeholder="Seu E-Mail"
                onChange={e => setEmail(e.target.value)}
                value={email || ""}
              />
            </label>
            <label>
              <span>Mensagem</span>
              <textarea
                required
                placeholder="Sua Mensagem"
                onChange={e => setMessage(e.target.value)}
                value={message || ""}
              />
            </label>
            <div
              className={`email-send ${monitorEmailShipment === "success"
                ? "success"
                : monitorEmailShipment === "error" ? "error" : ""}`}
            >
              {emailSend}
            </div>
            <button type="submit">Enviar</button>
          </form>
        </main>
      </section>
    </m.div>
  );
};

export default Home;
