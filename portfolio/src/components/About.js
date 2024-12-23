import React from 'react';
import './css/About.css'; // Make sure to include the CSS file

function About() {
    return (
        <div className="about-container">
            <div className="about-text">
                <h2>A LITTLE BIT ABOUT ME</h2>
                <p>
                Hi! My name is Liu Biyu, and I'm a web developer with a passion for 
                front-end development and design. I graduated from the
                {' '}<a href="https://www.uow.edu.au" target="_blank" rel="noopener noreferrer">
                University of Wollongong
                </a>{' '}
                with a degree in 
                {' '}<a href="https://www.sim.edu.sg/degrees-diplomas/programmes/programme-listing/bachelor-of-computer-science-big-data" target="_blank" rel="noopener noreferrer">
                Computer Science (Big Data)
                </a>
                , which has 
                provided me with a strong foundation in software development, 
                data analysis, and modern web technologies.
                I aspire to build a career where I can craft beautiful and 
                functional software solutions.
                </p>
            </div>
        </div>
    );
}

export default About;
