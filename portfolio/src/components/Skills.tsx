import React from 'react';

const Skills: React.FC = () => {
  const skills = [
    'React', 'TypeScript', 'Astro', 'CSS',
    'Kotlin', 'Spring Boot', 'MySQL', 'Docker', 'Python', 'Pandas', 'Django'
  ];

  return (
    <section id="skills" style={{
      padding: '5rem 0'
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
        }}>Stack</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
          maxWidth: '64rem',
          margin: '0 auto'
        }}>
          {skills.map((skill, index) => (
            <div key={index} style={{
              backgroundColor: 'white',
              padding: '1.5rem',
              borderRadius: '0.5rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
              transition: 'box-shadow 0.3s'
            }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600'
              }}>{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;