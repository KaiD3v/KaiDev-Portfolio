import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import CardProject from "../components/CardProject";
import { useState } from "react";

const Home = () => {
    const [projectContainer, setProjectContainer] = useState("projects")

    const toggleProjectContainer = () => {
        setProjectContainer("projects")
    }

    const toggleWorkContainer = () => {
        setProjectContainer("works")
    }

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
            <section className="portfolio-container">
                <h2>Portfólio</h2>
            </section>
            <section id='projects' className="projects-principal-container">
                <section className='projects-container'>
                    <header>
                        <button onClick={toggleProjectContainer} className={projectContainer === "projects" ? "active" : ""}>Projetos</button>
                        <button onClick={toggleWorkContainer} className={projectContainer === "works" ? "active" : ""}>Trabalhos</button>
                    </header>
                    <div><h2>Projetos</h2></div>
                    <section className='projects-list'>
                        {
                            projectContainer === "works" && (
                                <main>
                                    <CardProject projectName="Trabalho" projectImg="https://assets.thehansindia.com/h-upload/2021/07/31/1092805-tech.jpg" projectDesc="Descrição do trabalho" projectTechIcons={<FaGithub />} />
                                    <CardProject projectName="Trabalho" projectImg="https://assets.thehansindia.com/h-upload/2021/07/31/1092805-tech.jpg" projectDesc="Descrição do trabalho" projectTechIcons={<FaLinkedin />} />
                                    <CardProject projectName="Trabalho" projectImg="https://assets.thehansindia.com/h-upload/2021/07/31/1092805-tech.jpg" projectDesc="Descrição do trabalho" projectTechIcons={<FaLinkedin />} />
                                    <CardProject projectName="Trabalho" projectImg="https://assets.thehansindia.com/h-upload/2021/07/31/1092805-tech.jpg" projectDesc="Descrição do trabalho" projectTechIcons={<FaLinkedin />} />
                                    <CardProject projectName="Trabalho" projectImg="https://assets.thehansindia.com/h-upload/2021/07/31/1092805-tech.jpg" projectDesc="Descrição do trabalho" projectTechIcons={<FaLinkedin />} />
                                </main>
                            )
                        }
                        {
                            projectContainer === "projects" && (
                                <main>
                                    <CardProject projectName="Projeto" projectImg="https://wallpaperaccess.com/full/829012.jpg" projectDesc="Descrição do Projeto" projectTechIcons={<FaGithub />} />
                                    <CardProject projectName="Projeto" projectImg="https://wallpaperaccess.com/full/829012.jpg" projectDesc="Descrição do Projeto" projectTechIcons={<FaLinkedin />} />
                                    <CardProject projectName="Projeto" projectImg="https://wallpaperaccess.com/full/829012.jpg" projectDesc="Descrição do Projeto" projectTechIcons={<FaLinkedin />} />
                                    <CardProject projectName="Projeto" projectImg="https://wallpaperaccess.com/full/829012.jpg" projectDesc="Descrição do Projeto" projectTechIcons={<FaLinkedin />} />
                                    <CardProject projectName="Projeto" projectImg="https://wallpaperaccess.com/full/829012.jpg" projectDesc="Descrição do Projeto" projectTechIcons={<FaLinkedin />} />
                                </main>
                            )
                        }
                    </section>
                </section>
            </section>
        </div>
    )
}

export default Home