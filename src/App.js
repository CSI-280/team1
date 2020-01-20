import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header />
        </div>
      </div>
    </Router>
  );
}

export default App;
