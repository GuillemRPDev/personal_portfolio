import React from 'react';
import './VideoPresentation.css';

const VideoPresentation = () => {
  return (
    <section id="video" className="video-section">
      <div className="video-container">
        <h2 className="video-title">Presentación</h2>
        <p className="video-description">Conoce más sobre mí a través de este video</p>
        <div className="video-wrapper">
          {/* Iframe para mostrar el video de YouTube */}
          <iframe
            src="https://www.youtube.com/embed/lDuyW9wqZRo"
            className="video-iframe"
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