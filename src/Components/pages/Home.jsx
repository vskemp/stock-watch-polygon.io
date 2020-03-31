import React from 'react';
import Header from '../Header';

function Home() {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="columns " style={{ padding: 15 }}>
        <div className="column">
          <div className="box">
            <div className="title has-text-centered">
              Gainers:
        </div>
            <p className="subtitle has-text-centered">
              Stocks that increase in value over the course of the trading day are described as gainers or advancers. Those that increase the most in relation to their opening price are called percentage gainers, or percentage winners. Those that go up the greatest number of points are called net gainers, or dollar winners.    </p>
          </div>
        </div>
      </div>
      <div className="column">
        <div className="box">
          <div className="title has-text-centered">
            Losers:
        </div>
          <p className="subtitle has-text-centered">
            Stocks whose market prices drop the most during the trading day are described, rather bluntly, as losers. The stocks that lose the most value relative to their opening price are called percentage losers, and the stocks that lose the greatest number of points are called net losers or dollar losers.
            </p>
        </div>
      </div>
    </div>
  );
}

export default Home;