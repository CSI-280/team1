import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './components/pages/home';
import About from './components/pages/about';
import RandomPet from './components/pages/randomPet.js';
import Adopt from './components/pages/adopt';


function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header />
        <Route exact path = "/" component={Home} />
        <Route path="/Adopt" component={Adopt} />
        <Route exact path = "/RandomPet" component={RandomPet} />
        <Route path="/About" component={About} />
        </div>
      </div>
    </Router>
  );
}

export default App;
