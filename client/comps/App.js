import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home, Rooms } from "..";
import { connect } from "react-redux";

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

      <Route path="/home" exact component={Home} />
      <Route path="/home/games" exact component={Rooms} />
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
