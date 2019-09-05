import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NoMatch extends Component {
  render() {
    return (
      <div>
        <h1>Page not found, 404 error</h1>
        <h2 className="margin-top">
          We&apos;re sorry, something went wrong on our end.
        </h2>
        Go to the <Link to="/">Home page</Link> and try again.
      </div>
    );
  }
}
