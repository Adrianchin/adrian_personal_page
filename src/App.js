import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Particle from "./Particles";
import Footer from './components/Footer/Footer';
import "./style.css";
import { Container} from "react-bootstrap";
import Frontpage from './components/Frontpage/Frontpage';

function App() {

  return (
    <div className="App">
      {/*<Particle/>*/}
      {/*<Navigation/>*/}

      {/* frontpage 

      <Frontpage/>

      frontpage */}

     {/* <BackgroundPic/> */}
      <Container className="column1">
        <div>
          <Home/> 
          {/*<About/>
          <Projects/>
          <Contact/> */}
          <Footer/>
        </div>
      </Container> 
    </div>
  );
}

export default App;
