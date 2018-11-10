import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Content from "./components/Content/Content";
import Nav from "./components/Nav";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Nav />
            <Content />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
