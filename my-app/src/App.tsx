import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./Components/NavBar/NavBar"
import NavButton from "./Components/NavBar/NavButton"
import NavLogo from "./Components/NavBar/NavLogo"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from "./Components/Pages/LandingPage"
import AboutMe from "./Components/Pages/AboutMe"
import AboutWebsite from "./Components/Pages/AboutWebsite"
import Resume from "./Components/Pages/Resume"
import Portfolio from "./Components/Pages/Portfolio"
import ContactMe from "./Components/Pages/ContactMe"

function App() {
  return (
    <div className="App">
      <NavBar>
        <NavLogo/>
        <NavButton text="About Me" link="/aboutme" /> 
        <NavButton text="About The Website" link="/aboutwebsite" /> 
        <NavButton text="Resume" link="/resume" /> 
        <NavButton text="Portfolio" link="/portfolio" /> 
        <NavButton text="Contact Me" link="/contactme" /> 
      </NavBar>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/aboutwebsite" element={<AboutWebsite />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contactme" element={<ContactMe />} />
            
      
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
