import React from 'react';
import './App.css'; // 引用App.css文件
import Header from './components/Header';
import About from './components/About';
import Passion from './components/Passion';
import Experience from './components/Experience';
import Work from './components/Work';
import Contact from './components/Contact';
import Hero from './components/Hero';

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
      <section id="passion">
        <Passion />
      </section>
      <section id="Experience">
        <Experience />
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
