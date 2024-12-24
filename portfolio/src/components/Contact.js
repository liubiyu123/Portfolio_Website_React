import React from 'react';
import './css/Contact.css'; 
import emailIcon from '../img/email.png'

function Contact() {
  return (
    <div className="contact">
      <img src={emailIcon} alt="Email Icon" className="email-icon" />
      <h2>Contact Me!</h2>
      <p>If you have any inquiries or collaborations, Feel free to shoot me an email!</p>
      <button
        className="email-button"
        onClick={() => (window.location.href = 'mailto:lby19981017@gmail.com')}
      >
        Click Me
      </button>
    </div>
  );
}

export default Contact;
