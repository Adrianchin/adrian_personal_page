import React, {Component} from 'react';
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
const adrianState={
  route:'about',
  isSignedIn:false
}

class App extends Component {
  constructor () {
    super();
    this.state=adrianState
  }

  onRouteChange=(route)=>{
    this.setState({route : route});
  }
  
  render(){
    return (
      <div className="App">
        <Navigation onRouteChange={this.onRouteChange}/>
        {
        this.state.route === 'home'
        ?<div><Home/></div>
        :this.state.route=== 'about'
        ?<div><About/></div>
        :this.state.route=== 'projects'
        ?<div><Projects/></div>
        :<div><Contact/></div>
        }
      </div>
    );
  }
}
export default App;
