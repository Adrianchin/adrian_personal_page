import React, {useState, useEffect} from 'react';
import './App.css';
import "./style.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Particle from "./Particles";
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

/*<Particle/>*/

/* Note: This is constructed as a const first so when I impliment signin and signout, i can reset user settings */
//const adrianState={
//  route:'home',
//  isSignedIn:false
//}

function App () {
//  constructor () {
//   super();
//    this.state=adrianState
// }

const [route, setRoute] = useState('home')
const [isSignedIn, setIsSignedIn] = useState(false)

// const onRouteChange = (route) => {
//    this.setState({route : route});
//  }

const onRouteChange = (route) => {
  setRoute(route)
}

  return (
    <div className="App">
      <Navigation routeChange={onRouteChange}/>
      {
      route === 'home'
      ?<div><Home/></div>
      :route=== 'about'
      ?<div><About/></div>
      :route=== 'projects'
      ?<div><Projects/></div>
      :<div><Contact/></div>
      }
    </div>
  );
}

export default App;
