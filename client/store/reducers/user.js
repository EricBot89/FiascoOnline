import axios from "axios";

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
  try {
    const { data } = axios({
      method: "PUT",
      url: `${window.location.origin}/auth`,
      data: {
        userName,
        password
      }
    });

    dispatch(login(data));
  } catch (error) {
    dispatch(err(error));
  }
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
