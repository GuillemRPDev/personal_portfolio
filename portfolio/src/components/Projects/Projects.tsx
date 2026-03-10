import React from 'react';
import './Projects.css';

const Projects = () => {
  // Lista de proyectos con sus datos
  const projects = [
    {
      title: 'Repositorio de DAW',
      description: 'En este repositorio encontrarás mis proyectos desarrollados durante el curso de Desarrollo de Aplicaciones Web.',
      tech: ['JavaScript', 'Python'],
      github: 'https://github.com/AwAGratis/DAW2'
    },
    {
      title: 'Nessun Dorma',
      description: 'Proyecto final del primer año de Desarrollo de Aplicaciones Web.',
      tech: ['JavaScript', 'PHP'],
      github: 'https://github.com/Javiooli/NessunDorma'
    },
    {
      title: 'Cuina Ped-Rie',
      description: 'Proyecto de Python con Django desarrollado en el segundo año de Desarrollo de Aplicaciones Web.',
      tech: ['Python', 'Django'],
      github: 'https://github.com/Javiooli/Cuina-PedRie'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">Proyectos</h2>
        <div className="projects-grid">
          {/* Recorre cada proyecto y renderiza una tarjeta */}
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {/* Recorre la lista de tecnologias y las renderiza */}
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">Ver en GitHub</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;