import React from 'react';

function AboutMe() {
  return (
    <section>
        <img src="profile.jpg" alt="Profile Picture" />
        <h1>Welcome to My Portfolio!</h1>
        <p>
            Hi, I'm [Your Name], a passionate frontend developer specializing in ReactJS and web development. 
            I love building interactive and responsive web applications.
        </p>
        <button onClick={() => window.open('mailto:your.email@example.com')}>
            Contact Me
        </button>
    </section>
  );
}

export default AboutMe;