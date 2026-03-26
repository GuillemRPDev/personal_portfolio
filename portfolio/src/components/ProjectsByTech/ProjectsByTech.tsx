import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import AnimatedTitle from '../AnimatedTitle/AnimatedTitle';
import ProjectCard from '../ProjectCard/ProjectCard';
import './ProjectsByTech.css';

const ProjectsByTechPage = () => {
  // Datos de proyectos organizados por tecnología
  const projectsByTech = {
    'JavaScript': [
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
      }
    ],
    'Python': [
      {
        title: 'Repositorio de DAW',
        description: 'En este repositorio encontrarás mis proyectos desarrollados durante el curso de Desarrollo de Aplicaciones Web.',
        tech: ['JavaScript', 'Python'],
        github: 'https://github.com/AwAGratis/DAW2'
      },
      {
        title: 'Cuina Ped-Rie',
        description: 'Proyecto de Python con Django desarrollado en el segundo año de Desarrollo de Aplicaciones Web.',
        tech: ['Python', 'Django'],
        github: 'https://github.com/Javiooli/Cuina-PedRie'
      }
    ],
    'React': [
      {
        title: 'Repositorio de DAW',
        description: 'En este repositorio encontrarás mis proyectos desarrollados durante el curso de Desarrollo de Aplicaciones Web.',
        tech: ['JavaScript', 'Python'],
        github: 'https://github.com/AwAGratis/DAW2'
      }
    ],
    'Django': [
      {
        title: 'Cuina Ped-Rie',
        description: 'Proyecto de Python con Django desarrollado en el segundo año de Desarrollo de Aplicaciones Web.',
        tech: ['Python', 'Django'],
        github: 'https://github.com/Javiooli/Cuina-PedRie'
      }
    ],
    'PHP': [
      {
        title: 'Nessun Dorma',
        description: 'Proyecto final del primer año de Desarrollo de Aplicaciones Web.',
        tech: ['JavaScript', 'PHP'],
        github: 'https://github.com/Javiooli/NessunDorma'
      }
    ]
  };

  return (
    <div className="projects-by-tech-container">
      {/* Slide de título */}
      <AnimatedTitle
        title="Mis Proyectos"
        subtitle="Organizados por tecnología"
        className="snap-section"
      />

      {/* Slides por tecnología */}
      {Object.entries(projectsByTech).map(([tech, projects]) => (
        <section key={tech} className="snap-section tech-section">
          <div className="tech-content">
            <h2 className="tech-title">{tech}</h2>
            <div className="tech-projects-grid">
              {projects.slice(0, 3).map((project, index) => (
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
      ))}
    </div>
  );
};

const ProjectsByTech = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<ProjectsByTechPage />} />
      </Routes>
    </HashRouter>
  );
};

export default ProjectsByTech;
