import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navigation, Footer } from "./components/shared";

import { About, Contact, Home, Landmarks } from "./components/pages";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/landmarks" component={Landmarks} />
          <Route path="/contact" component={Contact} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
