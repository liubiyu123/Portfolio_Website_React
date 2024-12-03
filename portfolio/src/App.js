import React from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="app">
      <Header />
      <section id="about">
        <h2>About Me</h2>
        <p>
          Write a brief introduction about yourself here. Include your career goals,
          what you're passionate about, etc.
        </p>
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
    </div>
  );
}

export default App;