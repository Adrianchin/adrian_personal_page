import React, {Component} from 'react';
import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Particle from "./Particles";
import Footer from './components/Footer/Footer';
import "./style.css";
import { Container} from "react-bootstrap";
import Navigation from './components/Navigation/Navigation';
import Frontpage from './components/Frontpage/Frontpage';
import Projects from './components/Projects/Projects';
import About from './components/About/About';

function App() {

  return (
    <div className="App">
      {/*<Particle/>*/}
      {/*<Navigation/>*/}
      
      <About/>
      
      {/*
      <Frontpage/>
      
      <Projects/>
      <Contact/> 
      <Footer/>
      */}
    </div>
  );
}

export default App;
