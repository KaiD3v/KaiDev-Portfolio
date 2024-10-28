import React from "react";

const AboutSection = () => {
  return (
    <section className="about-container">
      <h2>Olá!</h2>
      <p>
        Meu nome é Kaique, e sou um desenvolvedor fullstack apaixonado por
        solucionar problemas através da programação.
      </p>
      <p>
        No momento, trabalho como freelancer, onde utilizo as stacks{" "}
        <a href="https://nextjs.org/docs">Next.js</a> e{" "}
        <a href="https://docs.nestjs.com/">Nest.js</a> do JavaScript para criar
        soluções inovadoras e eficientes para meus clientes.
      </p>
    </section>
  );
};

export default AboutSection;
