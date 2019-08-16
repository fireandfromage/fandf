import React, { Component } from "react";
import alpsHorn from "../../../assets/images/alps_horn.jpg";

export default class Catering extends Component {
  render() {
    return (
      <section id="catering">
        <h1>Raclette Caterer in Provo, UT.</h1>
        <img src={alpsHorn} />
        <p>
          The main focus of Fire and Fromage is to provide an excellent culinary
          experience without sacrificing tradition.
        </p>

        <p>We provide various types of catered dinners.</p>

        <ul>
          <li>Plated Raclette Dinners</li>
          <li>Buffet Raclette Dinners</li>
          <li>Small Scale Raclette Parties ( For Families and Friends)</li>
          <li>Fondue Parties</li>
          <li>Cheese Tastings</li>
        </ul>

        <p>
          Also as a professionally trained Chef, Degen can really cook anything
          you would like for a catered event.
        </p>
        <br />
        <p>Contact us today for your custom quote!</p>
      </section>
    );
  }
}
