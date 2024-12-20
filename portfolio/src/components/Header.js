import React from 'react';
import './css/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="" alt="Logo" />
        <span>LIU BIYU</span>
      </div>
      <nav>
        <ul>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#passion">PASSION</a></li>
          <li><a href="#experience">EXPERIENCE</a></li>
          <li><a href="#work">WORK</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
