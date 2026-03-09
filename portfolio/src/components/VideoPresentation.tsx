import React from 'react';

const VideoPresentation: React.FC = () => {
  return (
    <section id="video" style={{
      padding: '5rem 0',
      backgroundColor: '#f9fafb'
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
          marginBottom: '2rem'
        }}>Presentación</h2>
        <p style={{
          fontSize: '1.125rem',
          marginBottom: '3rem',
          color: '#6b7280'
        }}>Conoce más sobre mí a través de este video</p>
        <div style={{
          position: 'relative',
          paddingBottom: '56.25%',
          height: 0,
          overflow: 'hidden',
          maxWidth: '800px',
          margin: '0 auto',
          borderRadius: '0.5rem',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
        }}>
          <iframe
            src="https://www.youtube.com/embed/lDuyW9wqZRo"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 0
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Presentación de Guillem Riera Padilla"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default VideoPresentation;