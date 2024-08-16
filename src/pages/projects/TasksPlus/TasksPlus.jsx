// styles
import "./TasksPlus.css";

// framer
import { motion as m } from "framer-motion";

// images
import tasksPlus from "../../../assets/img/TasksPlus.png";
import taskPlusDashboard from "../../../assets/img/TasksPlusDashboard.png";
import tasksPlusPage from "../../../assets/img/TasksPlusPage.png";

const TasksPlus = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="tasks-container"
    >
      <header>
        <h1>Tasks+</h1>
        <h2>Principais Tecnologias Utilizadas</h2>
        <ul>
          <li>
            <a href="https://nextjs.org/docs">NextJs</a>
          </li>
          <li>
            <a href="https://firebase.google.com/">Firebase</a>
          </li>
          <li>
            <a href="https://developers.google.com/identity">Google Auth</a>
          </li>
        </ul>
      </header>
      <section className="tasks-description">
        <h3>Sobre o Projeto</h3>
        <p>
          O Tasks+ é um projeto que permite aos usuários criar e gerenciar
          tarefas em um painel pessoal após fazer login com sua conta do Google.
          As tarefas podem ser comentadas por outros usuários e compartilhadas
          caso sejam definidas como públicas.
        </p>
        <p>
          A plataforma foi desenvolvida com foco em facilitar a organização
          pessoal e a colaboração em tarefas entre diferentes usuários.
        </p>
      </section>
      <section className="tasks-images">
        <h3>Imagens da Aplicação</h3>
        <div className="images-container">
          <m.div whileHover={{ scale: 1.05 }} className="image-item">
            <img src={tasksPlus} alt="Painel de Tarefas" />
            <p>Página inicial da aplicação.</p>
          </m.div>
          <m.div whileHover={{ scale: 1.05 }} className="image-item">
            <img src={taskPlusDashboard} alt="Detalhes da Tarefa" />
            <p>Página de painel de tarefas.</p>
          </m.div>
          <m.div whileHover={{ scale: 1.05 }} className="image-item">
            <img src={tasksPlusPage} alt="Detalhes da Tarefa" />
            <p>Página de detalhes e comentários da tarefa.</p>
          </m.div>
        </div>
        <footer>
          <a href="https://github.com/KaiD3v/tasks-plus">
            Acessar Repositório Open Source
          </a>
          <a href="https://tasks-plus-silk.vercel.app/">Acessar Tasks+</a>
        </footer>
      </section>
    </m.div>
  );
};

export default TasksPlus;
