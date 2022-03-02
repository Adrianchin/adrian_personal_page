import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Particle from "./Particles";
import Footer from './components/Footer/Footer';
import "./style.css";

function App() {

  return (
    <div className="App">
      <Particle/>
      <div>
        <Navigation/>
      </div>
      <div>
      <Home/>
      {/*<About/>
      <Projects/>
      <Contact/> */}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
