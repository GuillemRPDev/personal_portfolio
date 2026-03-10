import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Contacto</h2>
        <p className="contact-description">¿Interesado en trabajar juntos? ¡Hablemos!</p>
        <div className="contact-links">
          {/* Enlaces a redes sociales y contacto */}
          <a href="https://github.com/AwAGratis" className="contact-link" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="mailto:guillemrierapadilla2004@gmail.com" className="contact-link">
            Email
          </a>
          <a href="https://www.linkedin.com/in/guillem-riera-padilla-01387b386" className="contact-link" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;