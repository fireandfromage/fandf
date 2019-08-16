import React, { Component } from "react";

import Home from "./Home";
import About from "./About";
import Catering from "./Catering";
import FoodBooth from "./FoodBooth";
import Contact from "./Contact";

import "./content.scss";

export default class Content extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.location.pathname !== nextProps.location.pathname
      ? true
      : false;
  }

  render() {
    return (
      <main className="content">
        <Home />
        <About />
        <Catering />
        <FoodBooth />
        <Contact />
      </main>
    );
  }
}
