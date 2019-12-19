import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navigation, Footer } from "./components/shared";
import "react-rater/lib/react-rater.css";

import {
  Home,
  Landmarks,
  LandmarkDetil,
  Culinary,
  CulinaryDetil,
  Stay,
  StayDetil,
  About,
  Contact,
  AddContent,
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
          <Route exact path="/about" component={About} />
          <Route exact path="/landmarks" component={Landmarks} />
          <Route path="/landmarks-detil/:id" component={LandmarkDetil} />
          <Route exact path="/culinary" component={Culinary} />
          <Route path="/culinary-detil/:id" component={CulinaryDetil} />
          <Route exact path="/stay" component={Stay} />
          <Route path="/stay-detil/:id" component={StayDetil} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/add-content" component={AddContent} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
