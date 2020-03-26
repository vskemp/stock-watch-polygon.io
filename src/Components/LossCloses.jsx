import React, { Component } from 'react';
import axios from 'axios';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Columns } from 'react-bulma-components';


export default class LossCloses extends Component {
  state = {
    lcloses: [],
  };
  // mounting api data for previous gainer close
  async componentDidMount() {
    const { data } = await axios.get(`https://api.polygon.io/v1/meta/exchanges?apiKey=***`)
    this.setState({ lcloses: data })
    // console.log(data);
  }
  render() {
    console.log(this.state);
    return (
      <div className="card">
        <p className="title">
          Previous Loser Closes:
          </p>
        {Object.keys(this.state.lcloses).map(lclose => (
          <ul key={lclose} value={lclose} className="card-content">
            {this.state.lcloses[lclose].name}
          </ul>
        ))}
      </div>
    );
  }
}