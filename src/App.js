import React, { Component } from "react";
import { BrowserRouter as Router, withRouter } from "react-router-dom";

import Header from "./components/Header";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Footer from "./components/Footer";

import "./components/styles.scss";

class App extends Component {
  render() {
    const ContentWithRouter = withRouter(Content);

    return (
      <Router>
        <div id="outer-container" className="App">
          <Nav />
          <div className="site" id="page-wrap">
            <Header />
            <ContentWithRouter />
            <Sidebar />
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
