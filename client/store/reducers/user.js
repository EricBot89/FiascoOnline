import axios from "axios";
import '@babel/polyfill'

const initState = {
  userName: null
};

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const ERROR = "ERROR";

const login = user => {
  return { type: LOGIN, user };
};
const logout = () => {
  return { type: LOGOUT };
};
const err = error => {
  return { type: ERROR, error };
};

const loginThunk = (userName, password) => {
  return async dispatch => {
    try {
      const { data } = await axios({
        method: "POST",
        url: `${window.location.origin}/auth/login`,
        data: { userName, password}
      });
      if(data){
      dispatch(login(data));
      }
      else {
        dispatch(err("invalid login attempt"))
      }
    } catch (error) {
      dispatch(err(error));
    }
  };
};

const user = (state = initState, action) => {
  switch (action.type) {
    case LOGIN:
      return action.user;
    case LOGOUT:
      return initState;
    case ERROR:
      return action.error;
    default:
      return state;
  }
};

export { user, loginThunk, logout };
