import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Sjportfolio from './components/Sjportfolio';

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
    <Route path='/sjportfolio'element={<Sjportfolio />}/>
      <Route path='/'element={<Home />}/>
      <Route path='/projects'element={<Projects />}/>
      <Route path='/contact'element={<Contact />}/>    
    </Routes>
  </Router>
  
  );
}

export default App;

