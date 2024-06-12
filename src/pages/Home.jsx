import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Home = () => {
    return (
        <div className='home-container'>
            <section id='profile' className='profile-container'>
                <div>
                    <section className="profile-picture">
                        <img src="https://avatars.githubusercontent.com/u/126838751?v=4" alt="profile" />
                    </section>
                    <section className="profile-description">
                        <h2>Kaique Melo</h2>
                        <p>Freelancer, Desenvolvedor & Estudante</p>
                        <ul>
                            <li><a href="https://github.com/KaiD3v"><FaGithub /></a></li>
                            <li><a href="https://www.linkedin.com/in/kaique-ricardo-de-melo-98969b256/"><FaLinkedin /></a></li>
                            <li><a href="mailto:kaikricardo99@gmail.com"><MdEmail /></a></li>
                        </ul>
                    </section>
                </div>
            </section>
            <section className="about-container">
                <h2>Olá!</h2>
                <p>Meu nome é Kaique, e sou um desenvolvedor fullstack apaixonado por solucionar problemas através da programação.</p>
                <p>No momento, trabalho como freelancer, onde utilizo as stacks <a href="https://nextjs.org/docs">Next.js</a> e <a href="https://docs.nestjs.com/">Nest.js</a> do JavaScript para criar soluções inovadoras e eficientes para meus clientes.</p>
            </section>
            <section id='projects' className="projects-principal-container">
                <section className='projects-container'>
                    <header>
                        <button>Projetos</button>
                        <button>Trabalhos</button>
                    </header>
                    <section>

                    </section>
                </section>
            </section>
        </div>
    )
}

export default Home