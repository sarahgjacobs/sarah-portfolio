import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path='/'element={<Home />}/>
      <Route path='/'element={<Projects />}/>
      <Route path='/'element={<Contact />}/>    
    </Routes>
  </Router>
  
  );
}

export default App;

