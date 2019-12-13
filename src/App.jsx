import React, { Component } from 'react';
import { BrowserRouter as Router , Route } from "react-router-dom";
import  Navigation from "./components/shared/Navigation";
import  Footer from "./components/shared/Footer";

import Home from './components/Home';
import About from './components/About';
import Landmarks from './components/Landmarks';

import Contact from './components/Contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>  
        
        <div>
        <Navigation/>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/landmarks" component={Landmarks} />        
        <Route path="/contact" component={Contact} />
        <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
