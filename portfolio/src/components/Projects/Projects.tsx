import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
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
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
              github={project.github}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;