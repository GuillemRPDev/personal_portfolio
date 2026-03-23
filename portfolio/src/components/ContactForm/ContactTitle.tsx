import React from 'react';
import AnimatedTitle from '../AnimatedTitle/AnimatedTitle';

interface ContactTitleProps {
  title: string;
  subtitle: string;
}

export const ContactTitle: React.FC<ContactTitleProps> = ({ title, subtitle }) => {
  return (
    <AnimatedTitle
      title={title}
      subtitle={subtitle}
      className="snap-section"
    />
  );
};