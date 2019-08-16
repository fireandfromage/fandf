import React, { Component } from "react";
import { Link } from "react-router-dom";
import { push as Menu } from "react-burger-menu";

import "./nav.css";

const styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "26px",
    height: "20px",
    right: "20px",
    top: "26px"
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
    fontSize: "1.2em"
  },
  bmMorphShape: {
    fill: "#373a47"
  },
  bmItemList: {
    color: "#b8b7ad",
    height: "90%",
    padding: "0.8em"
  },
  bmItem: {
    display: "inline-block",
    fontFamily: "Raleway",
    padding: ".7rem 0"
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)"
  }
};

export default class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false
    };
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  showSettings(event) {
    event.preventDefault();
  }

  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  render() {
    const { closeMenu } = this.props;

    return (
      <div
        tabIndex="0"
        role="button"
        onClick={() => this.toggleMenu()}
        onKeyPress={() => this.toggleMenu()}
      >
        <Menu
          isOpen={this.state.menuOpen}
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
          styles={styles}
          right
        >
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="/#catering">Catering</a>
              </li>
              <li>
                <a href="#booth">Food Booth</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </nav>
        </Menu>
      </div>
    );
  }
}
