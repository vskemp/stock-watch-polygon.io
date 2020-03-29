import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import GainCloses from '../Components/pages/GainCloses';
import Home from '../Components/pages/Home';
import Gains from '../Components/pages/Gains';
import Losers from '../Components/pages/Losers';


export default class NavBar extends Component {

  render() {
    return (
      <Router>
        {/* Bulma Burger Navbar */}
        <nav className="navbar is-light" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="/" ><img src="https://polygon.io/images/logo-symbol.png" alt="Polygon.io Brand Icon" ></img></a>
            <label
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              htmlFor="nav-toggle-state"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </label>
          </div>
          <input type="checkbox" id="nav-toggle-state" />

          <div className="navbar-menu has-background-light">
            <div className="navbar-item">
              <Link to="/">Home</Link>
            </div>
            <div className="navbar-item">
              <Link to="/gains">Gainers</Link>
            </div>
            <div className="navbar-item">
              <Link to="/losers">Losers</Link>
            </div>
            <div className="navbar-item">
              <Link to="/pclose">Previous Close</Link>
            </div>
          </div>
        </nav>
        {/* Navbar Burger Ends */}

        {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/pclose">
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