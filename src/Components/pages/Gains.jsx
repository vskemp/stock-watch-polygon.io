import React, { Component } from 'react';
import axios from 'axios';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import Header from '../Header';

export default class Gains extends Component {
  state = {
    gainers: [],
    change: [],
  };
  //allows auto population of data from api
  async componentDidMount() {
    const { data } = await axios.get(`https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/gainers?apiKey=***`)
    this.setState({
      gainers: data.tickers,
      change: data.tickers
    })
    // debugger;
    // console.log(data);

  }


  render() {
    // Always double check that state is what it should be, same with the data you are receiving
    console.log(this.state);
    return (
      <div>
        <Header />
        <div className="columns">
          {/* <div className="column"></div> */}
          <div className="column">
            <div className="box">
              <p className="title has-text-centered">
                Today's Top 20 Gainers:
          </p>
              {Object.keys(
                this.state.gainers,
                this.state.change
              ).map(gain => (
                <ul key={gain} value={gain} className="content has-text-centered">
                  <li><div className="tick"> Ticker: </div> {this.state.gainers[gain].ticker}</li>
                  <li><div className="change">Change:</div>  {this.state.change[gain].todaysChange}</li>
                  --------------------------------------
                </ul>
              ))}
            </div>
          </div>
          {/* <div className="column"></div> */}
        </div>
      </div >
    );
  }
}

