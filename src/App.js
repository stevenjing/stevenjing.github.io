import React, { Component } from 'react';
import './App.css';

import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Hero />
        <Portfolio />
      </div>
    );
  }
}

export default App;
