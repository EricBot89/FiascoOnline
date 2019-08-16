import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home, Rooms } from "./";

export const App = () => (
  <div className="app">
    <Router>
      <div className="header">
        <h1>Fiasco Online</h1>
        <nav>
            <div className='links'>
          <Link to="/home">Home</Link>
          <Link to="/home/games">Public Games</Link>
          <Link to="/home/profile">Profile</Link>
          </div>
          <div className='login'>
              Login
          </div>
        </nav>
      </div>

      <Route path="/home" exact component={Home} />
      <Route path="/home/games" exact component={Rooms} />

    </Router>
  </div>
);
