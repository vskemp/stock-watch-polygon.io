import React from 'react';
import Gains from './Components/Gains';
import Loser from './Components/Losers';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      It's a Polygon.io app
      <div>
        <Gains />
        <Loser />
      </div>
    </div>
  );
}

export default App;
