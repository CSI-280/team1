import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header';
import Search from './components/search';
import Home from './components/pages/home';
import About from './components/pages/about';
import RandomPet from './components/pages/randomPet.js';
import Adopt from './components/pages/adopt';
import SearchResults from './components/pages/searchresults'


function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Search/>
        <Route exact path = "/" component={Home} />
        <Route path="/Adopt" component={Adopt} />
        <Route path="/SearchResults" component={SearchResults} />
        <Route exact path = "/RandomPet" component={RandomPet} />
        <Route path="/About" component={About} />
        </div>
      </div>
    </Router>
  );
}

export default App;
