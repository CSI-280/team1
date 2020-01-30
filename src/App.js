import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './components/pages/home'
import About from './components/pages/about';
import SearchResults from './components/pages/searchresults';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header />
        <Route exact path = "/" component={Home} />
        <Route path="/About" component={About} />
		<Route path="/SearchResults" component={SearchResults} />
        </div>
      </div>
    </Router>
  );
}

export default App;
