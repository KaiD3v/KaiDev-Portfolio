// styles
import './MiniBlog.css';

// framer
import { motion as m } from "framer-motion";

// images
import miniBlogLoginImg from "../../../assets/img/miniblog-login.png";
import miniBlogHomeImg from "../../../assets/img/miniblog-img.png";
import miniBlogPostImg from "../../../assets/img/miniblog-post.png";

const MiniBlog = () => {
    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className='mini-blog-container'>
            <header>
                <h1>Mini Blog</h1>
                <h2>Principais Tecnologias Utilizadas</h2>
                <ul>
                    <li><a href="https://react.dev/learn">ReactJs</a></li>
                    <li><a href="https://firebase.google.com/docs?hl=pt-br">Firebase</a></li>
                </ul>
            </header>
            <section className="mini-blog-description">
                <h3>Sobre o Projeto</h3>
                <p>
                    Este projeto é um miniblog desenvolvido puramente com ReactJS e suas tecnologias, utilizando o Firebase para o back-end.
                </p>
                <p>
                    Cada usuário pode se autenticar criando um perfil. Uma vez autenticado, é possível realizar postagens na página "New Post", incluindo uma imagem, título, descrição e tags.
                </p>
                <p>
                    As postagens aparecem na homepage ordenadas por data de lançamento e podem ser pesquisadas por suas tags.
                </p>
            </section>
            <section className="mini-blog-images">
                <h3>Imagens da Aplicação</h3>
                <div className="images-container">
                    <m.div
                        whileHover={{ scale: 1.05 }}
                        className="image-item">
                        <img src={miniBlogLoginImg} alt="Home Page" />
                        <p>Tela de cadastro da aplicação, onde é possível criar um perfil para começar a postar.</p>
                    </m.div>
                    <m.div
                        whileHover={{ scale: 1.05 }}
                        className="image-item">
                        <img src={miniBlogHomeImg} alt="Login Page" />
                        <p>Home Page da aplicação, onde todas as postagens aparecem e pode-se pesquisar cada uma por suas respectivas tags.</p>
                    </m.div>
                    <m.div
                        whileHover={{ scale: 1.05 }}
                        className="image-item">
                        <img src={miniBlogPostImg} alt="New Post Page" />
                        <p>Página de postagens, onde o usuário autenticado pode escrever e realizar suas postagens.</p>
                    </m.div>
                </div>
                <footer>
                    <a href="https://mini-blog-git-main-kaid3vs-projects.vercel.app/">Acessar Mini Blog</a>
                    <a href="https://github.com/KaiD3v/MiniBlog">Acessar Repositório Open Source</a>
                </footer>
            </section>
        </m.div>
    );
}

export default MiniBlog;
