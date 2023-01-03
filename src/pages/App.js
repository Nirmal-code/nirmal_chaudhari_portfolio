import React from 'react';
import './App.css';
import Navbar from './components/navbar/nav';
import Home from './components/home/home';
import About from './components/about/about';
import Skills from './components/skills/skills';
import Projects from './components/projects/projects';
import Experience from './components/experience/experience';




function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Navbar />
    </div>
  );
}

export default App;