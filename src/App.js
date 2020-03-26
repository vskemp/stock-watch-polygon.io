import React from 'react';
import Gains from './Components/Gains';
import Loser from './Components/Losers';
// import logo from './logo.svg';
import './App.css';
import GainCloses from './Components/GainCloses';
import LossCloses from './Components/LossCloses';

function App() {
  return (
    <div className="App">
      It's a Polygon.io app
      <div>
        <Gains />
        <Loser />
        <GainCloses />
        <LossCloses />
      </div>
    </div>
  );
}

export default App;
