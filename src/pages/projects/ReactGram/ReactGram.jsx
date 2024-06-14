import "./ReactGram.css";

// images
import reactGramHomeImg from "../../../assets/img/reactgram-home.png";
import reactGramPostImg from "../../../assets/img/reactgram-post.png";
import reactGramProfileImg from "../../../assets/img/reactgram-profile.png";

import { motion as m } from "framer-motion";

const ReactGram = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="reactgram-container"
    >
      <header>
        <h1>ReactGram</h1>
        <h2>Principais Tecnologias Utilizadas</h2>
        <ul>
          <li>
            <a href="https://react.dev/learn">ReactJs</a>
          </li>
          <li>
            <a href="https://expressjs.com/en/starter/installing.html">
              Express
            </a>
          </li>
        </ul>
      </header>
      <section className="reactgram-description">
        <h3>Sobre o Projeto</h3>
        <p>
          Este projeto é um clone do Instagram desenvolvido com ReactJS para o
          front-end e Express para o back-end.
        </p>
        <p>
          Na aplicação, cada usuário pode criar um perfil, editar o perfil com
          foto, bio e outras informações, e também realizar postagens de suas
          próprias fotos.
        </p>
        <p>
          As postagens aparecem na homepage ordenadas por data de lançamento e
          podem ser pesquisadas por seus títulos.
        </p>
        <p>
          Cada imagem postada pode ser curtida e descurtida pelos usuários. Ao
          acessar o perfil de um usuário, é possível ver todas as informações
          fornecidas, bem como todas as fotos postadas por aquele usuário.{" "}
        </p>
      </section>
      <section className="reactgram-images">
        <h3>Imagens da Aplicação</h3>
        <div className="images-container">
          <m.div whileHover={{ scale: 1.05 }} className="image-item">
            <img src={reactGramProfileImg} alt="ReactGram profile" />
            <p>
              Página de perfil do usuário, onde pode editar suas informações,
              alterar foto de perfil e visualizar fotos já postadas.
            </p>
          </m.div>
          <m.div whileHover={{ scale: 1.05 }} className="image-item">
            <img src={reactGramPostImg} alt="Página de Postagem" />
            <p>
              Página de postagens, onde o usuário autenticado pode realizar as
              postagens de suas fotos.
            </p>
          </m.div>
          <m.div whileHover={{ scale: 1.05 }} className="image-item">
            <img src={reactGramHomeImg} alt="Home Page" />
            <p>
              Home Page da aplicação, onde todas as postagens aparecem e podem
              ser pesquisadas por seus respectivos títulos.
            </p>
          </m.div>
        </div>
        <footer>
          <a href="https://github.com/KaiD3v/ReactGram">
            Acessar Repositório Open Source
          </a>
        </footer>
      </section>
    </m.div>
  );
};

export default ReactGram;
