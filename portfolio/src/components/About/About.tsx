import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">Sobre Mí</h2>
        <div className="about-content">
          <p className="about-paragraph">
            Soy Guillem Riera Padilla, un desarrollador full stack con experiencia en una variedad de tecnologías.
            Me apasiona crear aplicaciones web y móviles que sean eficientes, escalables y fáciles de usar.
          </p>
          <p className="about-paragraph">
            Mi experiencia incluye trabajar con React, TypeScript, Astro, Kotlin, Spring Boot, MySQL, Docker, Python, Pandas y Django.
            Siempre estoy aprendiendo nuevas tecnologías para mejorar mis habilidades y ofrecer las mejores soluciones.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;