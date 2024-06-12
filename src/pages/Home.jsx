import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import CardProject from "../components/CardProject";
import { useState } from "react";
import { motion as m } from "framer-motion";

import emailjs from "@emailjs/browser"

const Home = () => {
    const [projectContainer, setProjectContainer] = useState("projects")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [emailSend, setEmailSend] = useState("")
    const [message, setMessage] = useState("")
    const [monitorEmailShipment, setMonitorEmailShipment] = useState("")

    const toggleProjectContainer = () => {
        setProjectContainer("projects")
    }

    const toggleWorkContainer = () => {
        setProjectContainer("works")
    }

    const handelSendEmail = async (e) => {
        e.preventDefault()

        if (name === '' || email === '' || message === '') {
            setEmailSend("Preencha todos os campos!")
            setMonitorEmailShipment("error")
            return
        }

        const templateParams = {
            from_name: name,
            email: email,
            message: message
        }

        emailjs.send('service_6kla6y4', 'template_h2y1rq4', templateParams, '7KcDDP-U9UAQk-iD9')
            .then((res) => {
                setEmailSend('E-Mail enviado com sucesso!')
                setMonitorEmailShipment("success")
                setName("")
                setEmail("")
                setMessage("")
            })
            .catch(err => setEmailSend('Ocorreu um erro, tente novamente mais tarde.'))
    }

    return (
        <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className='home-container'>
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
            <section id={projectContainer === 'projects' ? 'projects' : 'works'} className="projects-principal-container">
                <section className='projects-container'>
                    <header>
                        <button onClick={toggleProjectContainer} className={projectContainer === "projects" ? "active" : ""}>Projetos</button>
                        <button onClick={toggleWorkContainer} className={projectContainer === "works" ? "active" : ""}>Trabalhos</button>
                    </header>
                    <div className="projects-container-title">
                        <h2>Projetos</h2>
                    </div>
                    <section className='projects-list'>
                        {
                            projectContainer === "works" && (
                                <m.main initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }} className='home-container'>
                                    <CardProject projectName="Trabalho" projectImg="https://assets.thehansindia.com/h-upload/2021/07/31/1092805-tech.jpg" projectDesc="Descrição do trabalho" projectTechIcons={<FaGithub />} />
                                    <CardProject projectName="Trabalho" projectImg="https://assets.thehansindia.com/h-upload/2021/07/31/1092805-tech.jpg" projectDesc="Descrição do trabalho" projectTechIcons={<FaLinkedin />} />
                                    <CardProject projectName="Trabalho" projectImg="https://assets.thehansindia.com/h-upload/2021/07/31/1092805-tech.jpg" projectDesc="Descrição do trabalho" projectTechIcons={<FaLinkedin />} />
                                    <CardProject projectName="Trabalho" projectImg="https://assets.thehansindia.com/h-upload/2021/07/31/1092805-tech.jpg" projectDesc="Descrição do trabalho" projectTechIcons={<FaLinkedin />} />
                                    <CardProject projectName="Trabalho" projectImg="https://assets.thehansindia.com/h-upload/2021/07/31/1092805-tech.jpg" projectDesc="Descrição do trabalho" projectTechIcons={<FaLinkedin />} />
                                </m.main>
                            )
                        }
                        {
                            projectContainer === "projects" && (
                                <m.main
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    className='home-container'>
                                    <CardProject projectName="Projeto" projectImg="https://wallpaperaccess.com/full/829012.jpg" projectDesc="Descrição do Projeto" projectTechIcons={<FaGithub />} />
                                    <CardProject projectName="Projeto" projectImg="https://wallpaperaccess.com/full/829012.jpg" projectDesc="Descrição do Projeto" projectTechIcons={<FaLinkedin />} />
                                    <CardProject projectName="Projeto" projectImg="https://wallpaperaccess.com/full/829012.jpg" projectDesc="Descrição do Projeto" projectTechIcons={<FaLinkedin />} />
                                    <CardProject projectName="Projeto" projectImg="https://wallpaperaccess.com/full/829012.jpg" projectDesc="Descrição do Projeto" projectTechIcons={<FaLinkedin />} />
                                    <CardProject projectName="Projeto" projectImg="https://wallpaperaccess.com/full/829012.jpg" projectDesc="Descrição do Projeto" projectTechIcons={<FaLinkedin />} />
                                </m.main>
                            )
                        }
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
                            <input required type="text" placeholder="Seu nome" onChange={e => setName(e.target.value)} value={name || ""} />
                        </label>
                        <label>
                            <span>E-Mail</span>
                            <input required type="email" placeholder="Seu E-Mail" onChange={e => setEmail(e.target.value)} value={email || ""} />
                        </label>
                        <label>
                            <span>Mensagem</span>
                            <textarea required placeholder="Sua Mensagem" onChange={e => setMessage(e.target.value)} value={message || ""}></textarea>
                        </label>
                        <div className={`email-send ${monitorEmailShipment === "success" ? "success" : monitorEmailShipment === "error" ? "error" : ""}`}>
                            {emailSend}
                        </div>
                        <button type="submit">Enviar</button>
                    </form>
                </main>
            </section>
        </m.div>
    )
}

export default Home