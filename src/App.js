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

        <Route path="/About" component={About} />
        </div>
      </div>
    </Router>
  );
}

export default App;
