import React from 'react';

const Hero: React.FC = () => {
  return (
    <section style={{
      background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
      color: 'white',
      padding: '5rem 0'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          marginBottom: '1rem'
        }}>Hola, soy Guillem Riera Padilla</h1>
        <p style={{
          fontSize: '1.25rem',
          marginBottom: '2rem'
        }}>Desarrollador Full Stack apasionado por crear soluciones innovadoras</p>
        <a href="#about" style={{
          backgroundColor: 'white',
          color: '#2563eb',
          padding: '0.75rem 1.5rem',
          borderRadius: '9999px',
          fontWeight: '600',
          textDecoration: 'none',
          display: 'inline-block',
          transition: 'background-color 0.3s'
        }}>Conóceme más</a>
      </div>
    </section>
  );
};

export default Hero;