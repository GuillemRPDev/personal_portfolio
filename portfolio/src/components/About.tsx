import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" style={{
      padding: '5rem 0',
      backgroundColor: '#f3f4f6'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '3rem'
        }}>Sobre Mí</h2>
        <div style={{
          maxWidth: '48rem',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <p style={{
            fontSize: '1.125rem',
            marginBottom: '1.5rem'
          }}>
            Soy Guillem Riera Padilla, un desarrollador full stack con experiencia en una variedad de tecnologías.
            Me apasiona crear aplicaciones web y móviles que sean eficientes, escalables y fáciles de usar.
          </p>
          <p style={{
            fontSize: '1.125rem'
          }}>
            Mi experiencia incluye trabajar con React, TypeScript, Astro, Kotlin, Spring Boot, MySQL, Docker, Python, Pandas y Django.
            Siempre estoy aprendiendo nuevas tecnologías para mejorar mis habilidades y ofrecer las mejores soluciones.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;