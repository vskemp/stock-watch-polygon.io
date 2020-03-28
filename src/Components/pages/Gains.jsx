import React, { Component } from 'react';
import axios from 'axios';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import Header from '../Header';
import Footer from '../Footer';

export default class Gains extends Component {
  state = {
    gainers: [],
  };
  //allows auto population of data from api
  async componentDidMount() {
    const { data } = await axios.get(`https://api.polygon.io/v1/meta/exchanges?apiKey=***`)
    this.setState({ gainers: data })
    // debugger;
    // console.log(data);
  }

  render() {
    // Always double check that state is what it should be, same with the data you are receiving
    // console.log(this.state); 
    return (
      <div>
        <Header />
        <div className="columns">
          <div className="column"></div>
          <div className="column">
            <div className="box">
              <p className="title has-text-centered">
                Today's Top 20 Gainers:
          </p>
              {Object.keys(this.state.gainers).map(gain => (
                <ul key={gain} value={gain} className="content has-text-centered">
                  {this.state.gainers[gain].name}
                </ul>
              ))}
            </div>
          </div>
          <div className="column"></div>
        </div>
        <Footer />
      </div >
    );
  }
}

