import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Particle from "./Particles";
import Footer from './components/Footer/Footer';
import "./style.css";
import { Container} from "react-bootstrap";
import Header from './components/Header/Header';
import BackgroundPic from './components/BackgroundPic/BackgroundPic';

function App() {

  return (
    <div className="App">
      {/*<Particle/>*/}
      <div>
        {/*<Navigation/>*/}
      </div>
      <BackgroundPic/>
      <Container>
        <div>
          <Header/>
          <Home/>
          {/*<About/>
          <Projects/>
          <Contact/> */}
        </div>
        <Footer/>
      </Container>
    </div>
  );
}

export default App;
