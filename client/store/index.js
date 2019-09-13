import { createStore, combineReducers, applyMiddleware } from "redux";
import { user, loginThunk, logout } from "./reducers/user";
import { game, joinRoom, leaveRoom } from "./reducers/game";
import { gameList } from "./reducers/gameList";
import {chat, updateLog} from './reducers/chat'
import { socket, sendChatMessage} from "./socket";
import { middleware } from "./middleware";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
  user,
  game,
  gameList,
  chat
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(middleware))
);

socket.connect();

export { store, loginThunk, logout, joinRoom, leaveRoom, sendChatMessage, updateLog };
