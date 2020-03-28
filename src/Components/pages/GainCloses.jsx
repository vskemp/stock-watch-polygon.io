import React, { Component } from 'react';
import axios from 'axios';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import Header from '../Header';
import Footer from '../Footer';

export default class GainCloses extends Component {
  state = {
    gcloses: [],
    lcloses: []
  };

  async componentDidMount() {
    const { data } = await axios.get(`https://api.polygon.io/v1/meta/exchanges?apiKey=***`)
    this.setState({ lcloses: data });
    this.setState({ gcloses: data });
    // console.log(data);

  }

  // }
  render() {
    // console.log(this.state);
    return (
      <div>
        <Header />
        <div className="columns" style={{ padding: 15 }}>
          {/* <div className="column"></div> */}
          <div className="column">
            <div className="box">
              <p className="title has-text-centered">
                Previous Gainer Close:
              </p>
              {Object.keys(this.state.gcloses).map(gclose => (
                <ol key={gclose} value={gclose} className="content has-text-centered">
                  {this.state.gcloses[gclose].name}
                </ol>
              ))}
            </div>
          </div>
          <div className="column">
            <div className="box">
              <p className="title has-text-centered">
                Previous Loser Close:
                  </p>
              {Object.keys(this.state.lcloses).map(lclose => (
                <ol key={lclose} value={lclose} className="content has-text-centered">
                  {this.state.lcloses[lclose].name}
                </ol>
              ))}
            </div>
          </div>
          {/* <div className="column"></div> */}
        </div>
        <Footer />
      </div>
    );
  }
}