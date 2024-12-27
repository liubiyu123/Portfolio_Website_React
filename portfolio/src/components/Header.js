import React, { useState, useEffect } from 'react';
import './css/Header.css';
import throttle from 'lodash/throttle';
import logo from '../img/carrot.png';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      if (window.scrollY > 0 && !isScrolled) {
        setIsScrolled(true);
      } else if (window.scrollY === 0 && isScrolled) {
        setIsScrolled(false);
      }
    }, 200);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo-container">
        <img src={logo} alt="Logo" />
        <span>LIU BIYU</span>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? '✖' : '☰'} {/* Hamburger or Close Icon */}
      </div>
      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>ABOUT</a></li>
          <li><a href="#experience" onClick={() => setMenuOpen(false)}>EXPERIENCE</a></li>
          <li><a href="#work" onClick={() => setMenuOpen(false)}>WORK</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>CONTACT</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
