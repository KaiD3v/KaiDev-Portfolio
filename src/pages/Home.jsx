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
                            <li><a href=""><FaGithub /></a></li>
                            <li><a href=""><FaLinkedin /></a></li>
                            <li><a href=""><MdEmail /></a></li>
                        </ul>
                    </section>
                </div>
            </section>
        </div>
    )
}

export default Home