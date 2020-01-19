import React from 'react';
import './App.scss';

import Header from './components/Header'
import Hero from './components/Hero';
import Artists from './components/Artists';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Artists />
    </div>
  );
}

export default App;
