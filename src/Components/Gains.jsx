import React, { Component } from 'react';
import axios from 'axios';

export default class Gains extends Component {
  state = {
    gainers: [],
  };
  async componentDidMount() {
    const { data } = await axios.get(`https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/gainers?apiKey=***`)
    this.setState({ gainers: data.tickers })
    // console.log(data);
  }
  render() {
    console.log(this.state);
    return (
      <div>
        Todays top 20 gainers:
        {Object.keys(this.state.gainers).map(gain => (
          <ul key={gain} value={gain}>
            {gain}
          </ul>
        ))}
      </div>
    );
  }
}

