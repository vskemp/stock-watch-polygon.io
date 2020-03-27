import React, { Component } from 'react';
import axios from 'axios';
import 'react-bulma-components/dist/react-bulma-components.min.css';
// import NavBar from '../NavBar';
// import Header from '../Header';

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
        {/* <Header />
        <NavBar /> */}
        <div className="card">
          <p className="title">
            Todays top 20 losers:
          </p>
          {Object.keys(this.state.losers).map(loss => (
            <ul key={loss} value={loss} className="card-content">
              {this.state.losers[loss].name}
            </ul>
          ))}
        </div>
      </div>
    );
  }
}
