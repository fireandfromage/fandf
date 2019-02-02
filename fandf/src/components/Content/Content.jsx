import React, { Component } from "react";
import { Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Catering from "./Catering";
import FoodBooth from "./FoodBooth";
import Contact from "./Contact";

import "./content.scss";

export default class Content extends Component {
  render() {
    return (
      <main className="content">
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/catering" component={Catering} />
        <Route exact path="/booth" component={FoodBooth} />
        <Route exact path="/contact" component={Contact} />
      </main>
    );
  }
}
