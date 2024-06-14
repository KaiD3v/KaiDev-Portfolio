import "./IjatuMystery.css";

// images
import IjatuMysteryHome from "../../../assets/img/IjatuMysteryHome.png";
import IjatuMysteryItens from "../../../assets/img/IjatuMysteryItens.png";
import IjatuMysteryRules from "../../../assets/img/IjatuMysteryRules.png";
import IjatuMysteryCharacters from "../../../assets/img/IjatuMysteryCharacters.png";

import { motion as m } from "framer-motion";

const IjatuMystery = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="reactgram-container"
    >
      <header>
        <h1>Site - O Mistério de Ijatu</h1>
        <h2>Principais Tecnologias Utilizadas</h2>
        <ul>
          <li>
            <a href="https://react.dev/learn">ReactJs</a>
          </li>
          <li>
            <a href="https://www.typescriptlang.org/docs/">TypeScript</a>
          </li>
          <li>
            <a href="https://tailwindui.com/documentation">Tailwind CSS</a>
          </li>
        </ul>
      </header>
      <section className="reactgram-description">
        <h3>Sobre o Projeto</h3>
        <p>
          Este site é uma documentação para um RPG de mesa de mistério chamado
          "O Mistério de Ijatu".
        </p>
        <p>
          A aplicação possui páginas detalhadas sobre as regras do jogo, locais
          importantes, histórias envolventes, personagens únicos e itens
          especiais.
        </p>
        <p>
          Os jogadores podem navegar pelas páginas para aprender sobre as
          mecânicas do jogo, conhecer os diferentes locais do mundo de Ijatu,
          conhecer os personagens que encontrarão e descobrir os itens que podem
          usar durante suas aventuras.
        </p>
        <p>
          Cada seção é organizada para facilitar a compreensão e proporcionar
          uma experiência imersiva para todos os jogadores.
        </p>
      </section>
      <section className="reactgram-images">
        <h3>Imagens da Aplicação</h3>
        <div className="images-container">
          <m.div whileHover={{ scale: 1.05 }} className="image-item">
            <img src={IjatuMysteryCharacters} alt="Página de Personagens" />
            <p>
              Página de personagens, onde os jogadores podem conhecer e entender
              melhor cada personagem do jogo.
            </p>
          </m.div>
          <m.div whileHover={{ scale: 1.05 }} className="image-item">
            <img src={IjatuMysteryItens} alt="Página de Itens" />
            <p>
              Página de itens, onde os jogadores podem ver todos os itens
              disponíveis no jogo e suas descrições.
            </p>
          </m.div>
          <m.div whileHover={{ scale: 1.05 }} className="image-item">
            <img src={IjatuMysteryHome} alt="Página de Histórias" />
            <p>Home page, onde há uma breve apresentação do jogo.</p>
          </m.div>
          <m.div whileHover={{ scale: 1.05 }} className="image-item">
            <img src={IjatuMysteryRules} alt="Página de Histórias" />
            <p>
              Página de regras, onde estão documentadas todas as regras do jogo.
            </p>
          </m.div>
        </div>
        <footer>
          <a href="https://the-ijatu-mystery-rpg.vercel.app/">Acessar Site</a>
          <a href="https://github.com/KaiD3v/ReactGram">
            Acessar Repositório Open Source
          </a>
        </footer>
      </section>
    </m.div>
  );
};

export default IjatuMystery;
