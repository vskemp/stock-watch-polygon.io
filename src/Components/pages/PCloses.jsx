


import React, { Component } from 'react';
import axios from 'axios';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import Header from '../Header';

export default class PCloses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      symbol: "",
      result: "",
      open: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ symbol: event.target.value.toUpperCase() });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
      .get(`https://api.polygon.io/v2/aggs/ticker/${this.state.symbol.toUpperCase()}/prev?apiKey=***`, {
        result: this.state.result,
        open: this.state.open,
        symbol: this.state.value
      })
      .then(data => {
        console.log(data);
        this.setState({
          result: data.data.results[0].c,
          open: data.data.results[0].o
        });
      })
  }

  render() {
    console.log(this.state);
    return (
      <div >
        <Header />
        <div className="columns " style={{ padding: 15 }}>
          {/* <div className="column"></div> */}
          <div className="column">
            <div className="box has-text-centered">
              <form onSubmit={this.handleSubmit}>
                <label className="title has-text-centered">
                  Previous Close:
              </label>
                <input
                  placeholder="Enter Symbol, Ex: AAPL, GOOG"
                  className="input is-link is-rounded"
                  value={this.state.symbol}
                  onChange={this.handleChange}
                  type="text"
                />
                <button className="button is-link" type="submit" value="Submit">Submit</button>
              </form>
              <ul className="content has-text-centered">
                <li>Symbol:
                  <div className="tick">{this.state.symbol}</div></li>
                <li>Open:
                  <div className="change">{this.state.open}</div>
                </li>
                <li>Close:
                  <div className="change">{this.state.result}</div></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="column"></div>
      </div>
    );
  }
}
