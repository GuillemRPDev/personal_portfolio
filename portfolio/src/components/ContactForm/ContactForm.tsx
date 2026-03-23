import React from 'react';
import { ContactTitle } from './ContactTitle';
import { ContactFormFields } from './ContactFormFields';
import { SocialLinks } from './SocialLinks';
import './ContactForm.css';

const ContactForm = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/AwAGratis',
      icon: 'github'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/guillem-riera-padilla-01387b386',
      icon: 'linkedin'
    },
    {
      name: 'Email',
      url: 'mailto:guillemrierapadilla2004@gmail.com',
      icon: 'email'
    }
  ];

  return (
    <div className="contact-form-container">
      {/* Slide 1: Título de contacto */}
      <ContactTitle
        title="¡Contactame!"
        subtitle="Estoy disponible para nuevos proyectos y colaboraciones"
      />

      {/* Slide 2: Formulario y redes sociales */}
      <section className="snap-section contact-section">
        <div className="contact-content">
          <ContactFormFields
            title="Envíame un mensaje"
            subtitle="¿Tienes un proyecto en mente? ¡Hablemos!"
          />

          <SocialLinks
            title="Conecta conmigo"
            links={socialLinks}
          />
        </div>
      </section>
    </div>
  );
};

export default ContactForm;