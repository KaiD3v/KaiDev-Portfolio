import "../App.css";
import { motion as m } from "framer-motion";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ProfileSection = () => {
  return (
    <m id="profile" className="profile-container">
      <m.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <section className="profile-picture">
          <img
            src="https://avatars.githubusercontent.com/u/126838751?v=4"
            alt="profile"
          />
        </section>
        <section className="profile-description">
          <h2>Kaique Melo</h2>
          <p>Freelancer, Desenvolvedor & Estudante</p>
          <ul>
            <li>
              <a href="https://github.com/KaiD3v">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/kaique-ricardo-de-melo-98969b256/">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="mailto:kaikricardo99@gmail.com">
                <MdEmail />
              </a>
            </li>
          </ul>
        </section>
      </m.div>
    </m>
  );
};

export default ProfileSection;
