import React, { Component } from "react";

export default class FoodBooth extends Component {
  render() {
    return (
      <section id="booth" style={{ paddingTop: "120px" }}>
        <h1>Raclette Cheese Provo, UT</h1>

        <p>
          As part of our mission to spread the enjoyment of Raclette to Utah
          Valley we have set up a booth at the Provo Farmers Market. Every
          Saturday starting the first weekend of June to the last weekend of
          October from 9 AM to 2 PM.
        </p>

        <p>
          Follow us on Facebook, Twitter and Instagram to see where we will be
          next!
        </p>

        <p>Our Menu Includes:</p>

        <ul>
          <li>
            Traditionel Platte Truffled Potatoes, French Pickles, Prosciutto and
            Melted Raclette.
          </li>
          <li>Basic Raclette</li>
          Truffled Potatoes, Chives and Raclette.
          <li>Das Alpenhorn</li>
          Toasted Baguette, Lemon Aioli, Italian Salumi Meats, Pickled
          Watermelon Rind, and Spring Greens. + Side of Truffle Chips.
          <li>L’American</li>
          Toasted Brioche, Bourbon Bacon Marmalade and Raclette. + Side of
          Truffle Chips.
        </ul>
      </section>
    );
  }
}
