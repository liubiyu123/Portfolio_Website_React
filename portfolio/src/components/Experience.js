import React from 'react';
import './css/Experience.css';

//logo import
const images = require.context('../logo', false, /\.png$/);
const logos = images.keys().map(images);

function Experience() {
  return (
    <div className="experience-container">
      <div className="experience-header">
        <h2>EXPERIENCE</h2>
        <p>
        I am a Computer Science graduate with expertise in software development and data analysis, 
        passionate about crafting beautiful and functional software solutions that deliver 
        innovative and data-driven results.
        </p>
      </div>
      <div className="experience-content">
        <div className="technologies">
          <h3>Technologies I Learn:</h3>
          <div className="logos">
            {logos.map((logo, index) => (
              <img key={index} src={logo} alt={`Logo ${index + 1}`} className="logo" />
            ))}
          </div>
        </div>
        <div className="education">
          <h3>Education:</h3>
          <p>University of Wollongong (SIM Global Education)</p>
          <p>Bachelor's in Computer Science (Big Data)</p>
          <p>Graduated: April 2024</p>
          <br/>
          <p>Singapore Polytechnic</p>
          <p>Diplomas in Interior Design</p>
          <p>Graduated: April 2019</p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
