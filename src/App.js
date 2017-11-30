import React, { Component } from 'react';
import './App.css';

import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Hero />
        <Resume />
        <Portfolio />
        <Contact />
      </div>
    );
  }
}

export default App;
