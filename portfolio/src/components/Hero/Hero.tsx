import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <h1 className="hero-title">Hola, soy Guillem Riera Padilla</h1>
        <p className="hero-subtitle">Desarrollador Full Stack apasionado por crear soluciones innovadoras</p>
        <a href="#about" className="hero-button">Conóceme más</a>
      </div>
    </section>
  );
};

export default Hero;