import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Content from "./components/Content/Content";
import Nav from "./components/Nav/Nav";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div id="outer-container" className="App">
          <Nav />
          <div id="page-wrap">
            <Content />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
