import { createStore, combineReducers, applyMiddleware } from "redux";
import { user, loginThunk, logout } from "./reducers/user";
import { game, joinRoom, leaveRoom } from "./reducers/game";
import { socket } from "./socket";
import { middleware } from "./middleware";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
  user,
  game
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(middleware))
);

socket.connect();

export { store, loginThunk, logout, joinRoom, leaveRoom };
