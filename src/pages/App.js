import React from 'react';
import './App.css';
import Navbar from './components/navbar/nav';
import Home from './components/home/home';
import About from './components/about/about';
import Skills from './components/skills/skills';
import Projects from './components/projects/projects';
import Experience from './components/experience/experience';
import Footer from './components/footer/footer';





function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;