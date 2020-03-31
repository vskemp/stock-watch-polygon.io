
import React, { Component } from 'react';
import axios from 'axios';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import Header from '../Header';

export default class PCloses extends Component {
  state = {
    name: [],
    open: [],
    close: []
  };

  async componentDidMount() {
    const { data } = await axios.get(`https://api.polygon.io/v2/aggs/ticker/AAPL/prev?apiKey=***`)
    this.setState({
      name: data,
      open: data,
      close: data
    });
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
              <ul className="content has-text-centered">
                <li>Ticker: {this.state.name}</li>
                <li>Open: {this.state.open}</li>
                <li>Close: {this.state.open}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="column"></div>
      </div>
    );
  }
}