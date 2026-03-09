import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Proyecto 1',
      description: 'Descripcion.',
      tech: ['React', 'TypeScript'],
      github: 'https://github.com/AwAGratis/proyecto1'
    },
    {
      title: 'Proyecto 2',
      description: 'Descripcion.',
      tech: ['Kotlin', 'Spring Boot'],
      github: 'https://github.com/AwAGratis/proyecto2'
    },
    {
      title: 'Proyecto 3',
      description: 'Descripcion.',
      tech: ['Python', 'Django'],
      github: 'https://github.com/AwAGratis/proyecto3'
    }
  ];

  return (
    <section id="projects" style={{
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
        }}>Proyectos</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          maxWidth: '80rem',
          margin: '0 auto'
        }}>
          {projects.map((project, index) => (
            <div key={index} style={{
              backgroundColor: 'white',
              padding: '1.5rem',
              borderRadius: '0.5rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              transition: 'box-shadow 0.3s'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                marginBottom: '1rem'
              }}>{project.title}</h3>
              <p style={{
                marginBottom: '1rem'
              }}>{project.description}</p>
              <div style={{
                marginBottom: '1rem'
              }}>
                {project.tech.map((tech, i) => (
                  <span key={i} style={{
                    display: 'inline-block',
                    backgroundColor: '#dbeafe',
                    color: '#1e40af',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '0.25rem',
                    marginRight: '0.5rem',
                    marginBottom: '0.5rem'
                  }}>{tech}</span>
                ))}
              </div>
              <a href={project.github} style={{
                color: '#2563eb',
                textDecoration: 'none'
              }} target="_blank" rel="noopener noreferrer">Ver en GitHub</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;