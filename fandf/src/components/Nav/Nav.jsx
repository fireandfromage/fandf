import React, { Component } from "react";
import { Link } from "react-router-dom";
import { push as Menu } from "react-burger-menu";

import "./nav.css";

const styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    right: "36px",
    top: "36px"
  },
  bmBurgerBars: {
    background: "#373a47",
    borderRadius: "3px"
  },
  bmCrossButton: {
    height: "24px",
    width: "24px"
  },
  bmCross: {
    background: "#bdc3c7"
  },
  bmMenu: {
    background: "#373a47",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em"
  },
  bmMorphShape: {
    fill: "#373a47"
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em"
  },
  bmItem: {
    display: "inline-block"
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)"
  }
};

export default class Nav extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Menu
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
        styles={styles}
        right
      >
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/catering">Catering</Link>
            </li>
            <li>
              <Link to="/booth">Food Booth</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </Menu>
    );
  }
}
