import React from 'react';
import './App.css';
import Navbar from './components/navbar/nav';
import Home from './components/home/home'
import Binary from './components/moving/moving'

function App() {
  return (
    <div className="App">
      <Binary />
      <Home />

      <Navbar />
    </div>
  );
}

export default App;