import React, { Component } from 'react';
import axios from 'axios';


export default class GainCloses extends Component {
  state = {
    gcloses: "",
  };
  // mounting api data for previous gainer close
  async componentDidMount() {
    const { data } = await axios.get(`https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/gainers?apiKey=****`)
    this.setState({ gcloses: data })
    console.log(data);
  }
  render() {
    console.log(this.state);
    return (
      <div>
        Previous Gainer Closes:
        {Object.keys(this.state.gcloses).map(gclose => (
          <ul key={gclose} value={gclose}>
            {this.state.gcloses[gclose]}
          </ul>
        ))}
      </div>
    );
  }
}