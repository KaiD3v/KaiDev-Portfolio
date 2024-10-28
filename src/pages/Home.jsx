// hooks & libs
import { useState } from "react";
import { motion as m } from "framer-motion";

import ProfileSection from "../components/ProfileSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import EmailSection from "../components/EmailSection";

const Home = () => {
  return (
    <m.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="home-container"
    >
      <ProfileSection />
      <AboutSection />
      <section className="portfolio-container">
        <h2>Portfólio</h2>
      </section>
      <ProjectsSection />
      <EmailSection />
    </m.div>
  );
};

export default Home;
