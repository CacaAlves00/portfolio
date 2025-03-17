import React, { useState } from 'react';
import { BiMenu, BiX } from 'react-icons/bi';
import './Nav.css';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`nav ibm-plex-mono-regular ${menuOpen ? 'open' : ''}`}>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <BiX /> : <BiMenu />}
      </button>
      <div className={`nav-links ${menuOpen ? 'show' : ''}`}>
        <a href="#main" onClick={() => setMenuOpen(false)}>Intro</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>
    </nav>
  );
}
