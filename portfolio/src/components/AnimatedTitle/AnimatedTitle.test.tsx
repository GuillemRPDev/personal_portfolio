import React from 'react';
import { render, screen } from '@testing-library/react';
import AnimatedTitle from './AnimatedTitle';

describe('AnimatedTitle component', () => {
  it('renders title and subtitle', () => {
    render(<AnimatedTitle title="Prueba" subtitle="Subtitulo" />);

    expect(screen.getByText('Prueba')).toBeInTheDocument();
    expect(screen.getByText('Subtitulo')).toBeInTheDocument();
  });

  it('does not render subtitle when not provided', () => {
    render(<AnimatedTitle title="Solo título" />);

    expect(screen.getByText('Solo título')).toBeInTheDocument();
    expect(screen.queryByText('Subtitulo')).not.toBeInTheDocument();
  });
});
