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
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
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
