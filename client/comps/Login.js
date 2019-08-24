import React from "react";
import {connect} from 'react-redux'
import { loginThunk } from "../store";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      password: ""
    };
  }

  formController = (event) => {
      const {name, value} = event.target
      const update = {}
      update[name] = value
      this.setState({...update})
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    this.props.login(username, password)
    this.setState({username: '', password: ''})
  }

  render() {
    return (
      <form onSubmit = {this.onSubmit}>
        <label for="userName">User Name</label>
        <input type="text" name="userName" onChange={this.formController} />
        <label for="password">Password</label>
        <input type="password" name="password" onChange={this.formController} />
        <button type="submit">Sign in</button>
      </form>
    );
  }
}

mapState = state => ({
    user: state.user.username
})

mapDispatch = dispatch => ({
  login(userName,password){
      dispatch(loginThunk(userName,password))
  }
})

export default connect()(Login)