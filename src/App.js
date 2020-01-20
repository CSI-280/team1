import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header';
import About from './components/pages/about';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header />
        <p>I dont know what to add, so this is a place holder.</p>
        <Route path="/About" component={About} />
        </div>
      </div>
    </Router>
  );
}

export default App;
