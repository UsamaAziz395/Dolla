import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Tokenomics from './Pages/Tokenomics';
import HowToBuy from './Pages/HowToBuy';


function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/about" element={ <About /> } />
      <Route path="/tokenomics" element={ <Tokenomics /> } />
      <Route path="/how-to-buy" element={ <HowToBuy /> } />
  
    </Routes>
  );
}

export default App;