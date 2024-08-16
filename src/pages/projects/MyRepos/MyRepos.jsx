// styles
import "./MyRepos.css";

// framer
import { motion as m } from "framer-motion";

//images
import myRepos from "../../../assets/img/MyRepos.png";
import myReposTwo from "../../../assets/img/MyReposRepo.png";

const MyRepos = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="my-repos-container"
    >
      <header>
        <h1>My Repos</h1>
        <h2>Principais Tecnologias Utilizadas</h2>
        <ul>
          <li>
            <a href="https://react.dev/learn">ReactJs</a>
          </li>
          <li>
            <a href="https://docs.github.com/en/rest">GitHub API</a>
          </li>
        </ul>
      </header>
      <section className="my-repos-description">
        <h3>Sobre o Projeto</h3>
        <p>
          Este projeto é um site que se conecta à API do GitHub e foi
          desenvolvido puramente com ReactJS. Ele permite aos usuários salvar
          repositórios de interesse de forma prática.
        </p>
        <p>
          Os usuários podem buscar por repositórios no GitHub, visualizá-los e
          salvá-los para referência futura. O projeto foca na simplicidade e na
          integração direta com o GitHub.
        </p>
      </section>
      <section className="my-repos-images">
        <h3>Imagens da Aplicação</h3>
        <div className="images-container">
          <m.div whileHover={{ scale: 1.05 }} className="image-item">
            <img src={myRepos} alt="Busca de Repositórios" />
            <p>Página inicial da aplicação web.</p>
          </m.div>
          <m.div whileHover={{ scale: 1.05 }} className="image-item">
            <img src={myReposTwo} alt="Lista de Repositórios Salvos" />
            <p>Página de detalhes do repositório.</p>
          </m.div>
        </div>
        <footer>
          <a href="https://github.com/KaiD3v/My-Repos">
            Acessar Repositório Open Source
          </a>
        </footer>
      </section>
    </m.div>
  );
};

export default MyRepos;
