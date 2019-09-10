import React from "react";
import { connect } from "react-redux";
import { loginThunk } from "../store";

class DCLogin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      password: ""
    };

    this.formController = this.formController.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  formController(event) {
    const { name, value } = event.target;
    const update = {};
    update[name] = value;
    this.setState(update);
  }

  onSubmit(event) {
    event.preventDefault();
    const { username, password } = this.state;
    this.props.login(username, password);
    this.setState({ username: "", password: "" });
  }

  render() {
    return (
      <div className="login-container">
      <form onSubmit={this.onSubmit} className="login-form">
        <label htmlFor="userName">User Name</label>
        <input type="text" name="userName" onChange={this.formController} />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" onChange={this.formController} />
        <button type="submit">Sign in</button>
      </form>
      </div>
    );
  }
}

const mapState = state => ({
  user: state.user.username
});

const mapDispatch = dispatch => ({
  login(userName, password) {
    dispatch(loginThunk(userName, password));
  }
});

const Login = connect(
  mapState,
  mapDispatch
)(DCLogin);

export { Login };
