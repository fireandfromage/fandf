import React, { Component } from "react";
import "./sidebar.scss";

export default class Sidebar extends Component {
  render() {
    return (
      <aside className="sidebar">
        <form
          method="POST"
          action="https://formspree.io/seanrichardparker@gmail.com"
          target="_blank"
          rel="nofollow noopener"
        >
          <h4>Contact Us</h4>
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <textarea name="message" placeholder="Message" />
          <button type="submit">Submit</button>
        </form>
      </aside>
    );
  }
}
