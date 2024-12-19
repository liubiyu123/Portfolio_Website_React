import React from 'react';
import './About.css'; // Make sure to include the CSS file
import myself from '../images/myself.jpg'; // Correct relative path


function About() {
    return (
        <div className="about-container">
            <div className="about-text">
                <h2>About Me</h2>
                <h3>Computer Science Student </h3>
                <p>
                Recent Computer Science graduate with a strong foundation in 
                software development, data analysis, and modern web technologies. 
                To seek and maintain fulltime position that offers professional challenges 
                utilizing interpersonal skills, excellent time management and problem-solving 
                skills.
                </p>
            </div>
            <div className="about-image">
                <img src={myself} alt="Your Name" />
            </div>
        </div>
    );
}

export default About;
