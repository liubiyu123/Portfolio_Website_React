import React from 'react';
import './App.css'; // 引用App.css文件
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Work from './components/Work';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Resume from './components/Resume';

function App() {
  return (
    <div className="app">
      <Header />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="Experience">
        <Experience />
      </section>
      <section id="Resume">
        <Resume />
      </section>
      <section id="Work">
        <Work />
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
}


export default App;
