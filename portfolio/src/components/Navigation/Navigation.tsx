import React, { useState, useEffect } from 'react';
import './Navigation.css';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo/Home link */}
        <a href="/" className="nav-logo" onClick={closeMenu}>
          <span className="logo-text">GR</span>
        </a>

        {/* Desktop Navigation */}
        <div className="nav-links">
          <a href="/" className="nav-link">Inicio</a>
          <a href="/projects-by-tech" className="nav-link">Proyectos</a>
          <a href="/contact-form" className="nav-link">Contacto</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
        <a href="/" className="mobile-nav-link" onClick={closeMenu}>Inicio</a>
        <a href="/projects-by-tech" className="mobile-nav-link" onClick={closeMenu}>Proyectos</a>
        <a href="/contact-form" className="mobile-nav-link" onClick={closeMenu}>Contacto</a>
      </div>
    </nav>
  );
};

export default Navigation;