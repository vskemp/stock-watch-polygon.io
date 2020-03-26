import React, { Component } from 'react';
import axios from 'axios';

export default class Loser extends Component {
  state = {
    losers: "",
  };
  async componentDidMount() {
    const { data } = await axios.get(`https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/losers?apiKey=***`)
    this.setState({ losers: data.tickers })
    // console.log(data);
  }
  render() {
    console.log(this.state);
    return (
      <div>
        Todays top 20 losers:
        {Object.keys(this.state.losers).map(loss => (
          <ul key={loss} value={loss}>
            {loss}
          </ul>
        ))}
      </div>
    );
  }
}
