import React from 'react';
import Gains from './Components/Gains';
import Loser from './Components/Losers';
// import logo from './logo.svg';
import './App.css';
import GainCloses from './Components/GainCloses';
import LossCloses from './Components/LossCloses';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <div className="container">
          <Gains />
          <Loser />
          <GainCloses />
          <LossCloses />
        </div>
      </div>
    </div>
  );
}

export default App;
