import React from "react";
import "./css/Footer.css"; // Add CSS file for styling
import uplogo from '../img/up.png';
function Footer() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    };
  
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>

      <div className="footer-logo" >
        <img src={uplogo} alt="Arrow Up" className="arrow-up" onClick={scrollToTop}/>
      </div>
      
      <p className="footer-text">© Liu Biyu 2024</p>
    </footer>
  );
}

export default Footer;
