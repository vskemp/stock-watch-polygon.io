// import React from 'react';
// // import Gains from './Components/Gains';
// // import Loser from './Components/Losers';
// // import logo from './logo.svg';
// import './App.css';
// // import GainCloses from './Components/GainCloses';
// // import LossCloses from './Components/LossCloses';
// // import Header from './Components/Header';
// import Home from './Components/pages/Home'

// function App() {
//   return (
//     <div className="App">
//       <div>
//         <Home />
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import GainCloses from './Components/pages/GainCloses';
import LossCloses from './Components/pages/LossCloses';
import Home from './Components/pages/Home';
import Gains from './Components/pages/Gains';
import Losers from './Components/pages/Losers';

export default class NavBar extends Component {

  render() {
    console.log(this.state);
    return (
      <Router>
        <nav className="Nav">
          <a><img src="https://polygon.io/images/logo-symbol.png" width="50" height="200"></img></a>
          <div className="home">
            <Link to="/" >Home</Link>
          </div>
          <div className="gains">
            <Link to="/Gains">Gainers</Link>
          </div>
          <div className="losers">
            <Link to="/losers">Losers</Link>
          </div>
          <div className="pclose">
            <Link to="/pclose">Previous Close</Link>
          </div>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
                                      renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/pclose" target="_blank">
            <LossCloses />
            <GainCloses />
          </Route>
          <Route path="/losers">
            <Losers />
          </Route>
          <Route path="/Gains">
            <Gains />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router >
    );
  }
}