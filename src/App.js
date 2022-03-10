import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import axious from "axios";
import './App.css';
import Views from './Views';
import Navbar from './Navbar';

function App() {
  return (
    
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>React Rest Api with cats</h1>
          <Navbar/>
        </header> 
      </div>
      <Views/>
    </Router> 

  );
}

export default App;
