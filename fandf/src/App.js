import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Content from "./components/Content";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div id="outer-container" className="App">
          <Nav />
          <div className="site" id="page-wrap">
            <Header />
            <Content />
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
