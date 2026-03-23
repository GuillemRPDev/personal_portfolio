import React from 'react';
import './AnimatedTitle.css';

interface AnimatedTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({
  title,
  subtitle,
  className = ''
}) => {
  return (
    <section className={`animated-title-section ${className}`}>
      <div className="shimmer-overlay"></div>
      <div className="title-content">
        <h1 className="title-text">{title}</h1>
        {subtitle && <p className="subtitle-text">{subtitle}</p>}
      </div>
    </section>
  );
};

export default AnimatedTitle;