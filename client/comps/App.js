import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home, Rooms, Game } from "../comps";
import { Login } from "./Login";
import { connect } from "react-redux";
import "./App.css";

const App = props => (
  <div className="app">
    <Router>
      <div className="header">
        <h1>Fiasco Online</h1>
        <nav>
          <div className="links">
            <Link to="/home">Home</Link>
            <Link to="/home/games">Public Games</Link>
            {props.user ? <Link to="/home/profile">Profile</Link> : ""}
          </div>
          <div className="login">
            <Link to="/login">Login</Link>
          </div>
        </nav>
      </div>
      <Route exact path="/login" component={Login} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/home/games" component={Rooms} />
      <Route path="/game" component={Game} />
    </Router>
  </div>
);

const mapState = state => ({
  user: state.user.userName
});

export default connect(
  mapState,
  null
)(App);
