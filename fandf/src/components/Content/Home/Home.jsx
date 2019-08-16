import React, { Component } from "react";
import raclette from "../../../assets/images/pewter_with_board.jpg";

export default class Home extends Component {
  render() {
    return (
      <section id="home">
        <h1>Raclette, The Swiss Tradition</h1>
        <img src={raclette} />
        <p>
          Raclette is a traditional dish of cheese melted on the wheel or block,
          that is then scraped over bread, potatoes and pickles.
        </p>

        <p>
          This was the traditional dish of Swiss herdsman, when they would take
          their cows up into the high summer pastures of the Alps. They would
          take the cheese, that was made especially for melting, and
          non-perishable items like pickles and potatoes. After a hard days work
          they would build a fire and melt the cheese on the block, scraping it
          over their food.
        </p>

        <p>
          At Fire and Fromage, we seek to bring this wonderful tradition to Utah
          valley. We present our lovely Raclette with tradition in mind, but
          adding our own new twists.
        </p>

        <p>Contact us to set up your event today!</p>
      </section>
    );
  }
}
