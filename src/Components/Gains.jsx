import React, { Component } from 'react';
import axios from 'axios';
import {
  // Columns,
  Section
} from "react-bulma-components";

export default class Gains extends Component {
  state = {
    gainers: [],
  };
  //allows auto population of data from api
  async componentDidMount() {
    const { data } = await axios.get(`https://api.polygon.io/v1/meta/exchanges?apiKey=***`)
    this.setState({ gainers: data })
    // debugger;
    console.log(data);
  }

  render() {
    console.log(this.state);
    return (
      <Section>
        <div>
          Todays top 20 gainers:
        {Object.keys(this.state.gainers).map(gain => (
          <ul key={gain} value={gain}>
            {this.state.gainers[gain].name}
          </ul>
        ))}
        </div>
      </Section>
    );
  }
}

