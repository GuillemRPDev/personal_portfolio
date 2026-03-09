import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" style={{
      padding: '5rem 0'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginBottom: '3rem'
        }}>Contacto</h2>
        <p style={{
          fontSize: '1.125rem',
          marginBottom: '2rem'
        }}>¿Interesado en trabajar juntos? ¡Hablemos!</p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1.5rem'
        }}>
          <a href="https://github.com/AwAGratis" style={{
            color: '#6b7280',
            textDecoration: 'none'
          }} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="mailto:guillem@example.com" style={{
            color: '#6b7280',
            textDecoration: 'none'
          }}>
            Email
          </a>
          <a href="https://linkedin.com/in/guillemriera" style={{
            color: '#6b7280',
            textDecoration: 'none'
          }} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;