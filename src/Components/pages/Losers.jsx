import React, { Component } from 'react';
import axios from 'axios';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import Header from '../Header';

export default class Losers extends Component {
  state = {
    losers: [],
    change: []
  };
  // mounting api data for losers
  async componentDidMount() {
    const { data } = await axios.get(`https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/losers?apiKey=****`)
    this.setState({
      losers: data.tickers,
      change: data.tickers
    })
    console.log(data);
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <Header />
        <div className="columns ">
          {/* <div className="column"></div> */}
          <div className="column">
            <div className="box">
              <p className="title has-text-centered">
                Today's Top 20 Losers:
          </p>
              {Object.keys(
                this.state.losers,
                this.state.change
              ).map(loss => (
                <ul key={loss} value={loss} className="content has-text-centered">
                  <li><div className="tick">Tickers:</div> {this.state.losers[loss].ticker}</li>
                  <li><div className="change">Change:</div>  {this.state.change[loss].todaysChange}</li>
                  --------------------------------------
                </ul>
              ))}
            </div>
          </div>
          {/* <div className="column"></div> */}
        </div>
      </div>
    );
  }
}
