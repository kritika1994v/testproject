
import './App.css';
import React from 'react';
import {Route, Routes } from "react-router-dom";
import NavbaarElements from './components/Navbaar/NavbaarElements';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About'
import Card from './components/pages/Card';


function App() {
  return (
  <div>

  <NavbaarElements/>


    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Contact" element={<Contact/>} />
        <Route exact path="/Card" element={<Card/>} />
    </Routes>


 
  </div>
  );
};

export default App;
