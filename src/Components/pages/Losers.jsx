import React, { Component } from 'react';
import axios from 'axios';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import Header from '../Header';

export default class Losers extends Component {
  state = {
    losers: [],
  };
  // mounting api data for losers
  async componentDidMount() {
    const { data } = await axios.get(`https://api.polygon.io/v1/meta/exchanges?apiKey=***`)
    this.setState({ losers: data })
    // console.log(data);
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <Header />
        <div className="columns ">
          <div className="column"></div>
          <div className="column">
            <div className="box">
              <p className="title has-text-centered">
                Today's Top 20 Losers:
          </p>
              {Object.keys(this.state.losers).map(loss => (
                <ul key={loss} value={loss} className="content has-text-centered">
                  {this.state.losers[loss].name}
                </ul>
              ))}
            </div>
          </div>
          <div className="column"></div>
        </div>
      </div>
    );
  }
}
