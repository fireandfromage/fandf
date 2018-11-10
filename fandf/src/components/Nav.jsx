import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/catering">Catering</Link>
        <Link to="/booth">Food Booth</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
    );
  }
}
