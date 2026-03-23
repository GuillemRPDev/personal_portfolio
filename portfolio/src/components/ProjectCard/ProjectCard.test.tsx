import React from 'react';
import { render, screen } from '@testing-library/react';
import ProjectCard from './ProjectCard';

describe('ProjectCard component', () => {
  const project = {
    title: 'Test Project',
    description: 'Project description',
    tech: ['JS', 'React'],
    github: 'https://github.com/test/test'
  };

  it('renders project card content', () => {
    render(<ProjectCard {...project} />);

    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('Project description')).toBeInTheDocument();
    expect(screen.getByText('JS')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();

    const cardElement = screen.getByRole('link');
    expect(cardElement).toHaveAttribute('href', project.github);
  });

  it('applies animation delay style', () => {
    render(<ProjectCard {...project} delay={0.7} />);
    expect(screen.getByRole('link')).toHaveStyle({ animationDelay: '0.7s' });
  });
});
