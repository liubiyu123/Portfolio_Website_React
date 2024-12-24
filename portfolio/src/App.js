import React from 'react';
import './App.css'; // 引用App.css文件
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Work from './components/Work';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Resume from './components/Resume';
import Footer from "./components/Footer";

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
      <section id="experience">
        <Experience />
      </section>
      <section id="resume">
        <Resume />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}


export default App;
