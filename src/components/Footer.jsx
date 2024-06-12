import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="footer">
            <h2>Desenvolvido por <b>KaiD3v</b></h2>
            <ul>
                <li><a href="https://github.com/KaiD3v"><FaGithub size={25} /></a></li>
                <li><a href="https://www.linkedin.com/in/kaique-ricardo-de-melo-98969b256/"><FaLinkedin size={25} /></a></li>
                <li><a href="mailto:kaikricardo99@gmail.com"><MdEmail size={25} /></a></li>
            </ul>
        </footer>
    );
}

export default Footer;
