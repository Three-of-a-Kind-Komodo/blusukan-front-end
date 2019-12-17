import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navigation, Footer } from "./components/shared";
import "react-rater/lib/react-rater.css";

import {
  Home,
  Landmarks,
  About,
  Contact,
  Login,
  SignUp
} from "./components/pages";

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
          <Route path="/login" component={Login} />
          <Route path="/sign-up" component={SignUp} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
