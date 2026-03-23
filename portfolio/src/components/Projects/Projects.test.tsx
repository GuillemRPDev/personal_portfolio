import React from 'react';
import { render, screen } from '@testing-library/react';
import Projects from './Projects';

describe('Projects page component', () => {
  it('renders project list title and three project cards', () => {
    render(<Projects />);

    expect(screen.getByText('Proyectos')).toBeInTheDocument();
    // Espera al menos los 3 proyectos fijos
    expect(screen.getAllByRole('link')).toHaveLength(3);
  });
});
