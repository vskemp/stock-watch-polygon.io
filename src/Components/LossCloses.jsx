import React, { Component } from 'react';
import axios from 'axios';


export default class LossCloses extends Component {
  state = {
    lcloses: "",
  };
  // mounting api data for previous gainer close
  async componentDidMount() {
    const { data } = await axios.get(`https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/losers?apiKey=***`)
    this.setState({ lcloses: data })
    console.log(data);
  }
  render() {
    console.log(this.state);
    return (
      <div>
        Previous Loser Closes:
        {Object.keys(this.state.lcloses).map(lclose => (
          <ul key={lclose} value={lclose}>
            {this.state.lcloses[lclose]}
          </ul>
        ))}
      </div>
    );
  }
}