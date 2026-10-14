import { useState } from 'react';
import { SOCIAL } from '../data/portfolio.js';

const links = [
  ['Sobre mí', '#sobre-mi'],
  ['Proyectos', '#proyectos'],
  ['Tecnologías', '#stack'],
  ['Certificación', '#certificaciones'],
  ['Contacto', '#contacto'],
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Guillermo Pereyra, ir al inicio" onClick={() => setMenuOpen(false)}>
        <span className="brand-mark">GP</span><span className="brand-dot">.</span>
      </a>
      <nav className={`primary-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Navegación principal" id="primary-nav">
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
        ))}
        <a className="mobile-linkedin" href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
      </nav>
      <div className="header-actions">
        <a className="header-cta" href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
        <button type="button" className="menu-toggle" aria-expanded={menuOpen} aria-controls="primary-nav" aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} onClick={() => setMenuOpen((open) => !open)}>
          <span/><span/><span/>
        </button>
      </div>
    </header>
  );
}

export default Header;
