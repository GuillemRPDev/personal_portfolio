import React from 'react';
import './Skills.css';

const Skills = () => {
  // Lista de habilidades o tecnologias
  const skills = [
    'React', 'TypeScript', 'Astro', 'CSS',
    'Kotlin', 'Spring Boot', 'MySQL', 'Docker', 'Python', 'Pandas', 'Django'
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">Stack</h2>
        <div className="skills-grid">
          {/* Recorre cada habilidad y crea una tarjeta */}
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <h3 className="skill-name">{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;