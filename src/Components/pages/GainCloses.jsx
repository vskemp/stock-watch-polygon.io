import React, { Component } from 'react';
import axios from 'axios';
import 'react-bulma-components/dist/react-bulma-components.min.css';



export default class GainCloses extends Component {
  state = {
    gcloses: [],
  };
  // mounting api data for previous gainer close
  async componentDidMount() {
    const { data } = await axios.get(`https://api.polygon.io/v1/meta/exchanges?apiKey=***`)
    this.setState({ gcloses: data })
    // console.log(data);
  }
  render() {
    console.log(this.state);
    return (
      <div className="card">
        <p className="title">
          Previous Gainer Closes:
        </p>
        {Object.keys(this.state.gcloses).map(gclose => (
          <ul key={gclose} value={gclose} className="card-content">
            {this.state.gcloses[gclose].name}
          </ul>
        ))}
      </div>
    );
  }
}