import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import About from './Components/About';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Extracurricular from './Components/Extracurricular';
import Sidebar from './Components/SideBar';
import React from 'react';
import { Element } from 'react-scroll';

function App() {
  return (
    <div class="row">
      <Sidebar />
      <div class="col-lg-7 col-md-12 col-sm-12" id="main">
        <Element name="about" className="about"><About /></Element>
        <Element name="projects" className="projects"><Projects /></Element>
        <Element name="experience" className="experience"><Experience /></Element>
        <Element name="extracurricular" className="extracurricular"><Extracurricular /></Element>
      </div>
    </div>
  );
}

export default App;
