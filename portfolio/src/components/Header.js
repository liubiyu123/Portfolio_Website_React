import React, { useState, useEffect } from 'react';
import './css/Header.css';
import throttle from 'lodash/throttle';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
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
