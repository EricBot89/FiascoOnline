

const thunkMiddleware = ({ dispatch, getState }) => {
  return next => action => {
    if (typeof action === "function") {
      console.log("thunk in progress");
      return action(dispatch, getState);
    }

    return next(action);
  };
};

const loggingMiddleware = ({ dispatch, getState }) => {
  return next => action => {
    console.log(getState());
    console.log(next(action));
    console.log(getState());
  };
};

export { thunkMiddleware, loggingMiddleware };
