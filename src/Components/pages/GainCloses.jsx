import React, { Component } from 'react';
import axios from 'axios';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import Header from '../Header';

export default class GainCloses extends Component {
  state = {
    closes: [],
  };

  async componentDidMount() {
    const { data } = await axios.get(`https://api.polygon.io/v2/aggs/ticker/AAPL/prev?apiKey=***`)
    this.setState({ closes: data });
    // console.log(data);

  }

  // }
  render() {
    console.log(this.state);
    return (
      <div >
        <Header />
        <div className="columns " style={{ padding: 15 }}>
          {/* <div className="column"></div> */}
          <div className="column">
            <div className="box">
              <p className="title has-text-centered">
                Previous Close:
              </p>
              {Object.keys(this.state.closes).map(close => (
                <ol key={close} value={close} className="content has-text-centered">
                  {this.state.closes[close].tickers}
                </ol>
              ))}
            </div>
          </div>
        </div>
        <div className="column"></div>
      </div>
    );
  }
}