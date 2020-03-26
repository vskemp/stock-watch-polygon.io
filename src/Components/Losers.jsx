import React, { Component } from 'react';
import axios from 'axios';
import { Columns } from 'react-bulma-components';

export default class Loser extends Component {
  state = {
    losers: "",
  };
  // mounting api data for losers
  async componentDidMount() {
    const { data } = await axios.get(`https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/gainers?apiKey=***`)
    this.setState({ losers: data })
    console.log(data);
  }
  render() {
    console.log(this.state);
    return (
      <Columns>
        <div>
          Todays top 20 losers:
        {Object.keys(this.state.losers).map(loss => (
          <ul key={loss} value={loss}>
            {this.state.losers[loss].name}
          </ul>
        ))}
        </div>
      </Columns>
    );
  }
}
