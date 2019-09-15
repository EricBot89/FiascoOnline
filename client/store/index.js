import { createStore, combineReducers, applyMiddleware } from "redux";
import { user, loginThunk, logout } from "./reducers/user";
import { game, joinRoom, leaveRoom } from "./reducers/game";
import { gameList } from "./reducers/gameList";
import { chat, updateLog, syncLog } from "./reducers/chat";
import { thunkMiddleware, loggingMiddleware } from "./middleware";
import { composeWithDevTools } from "redux-devtools-extension";
import { socket, sendChatMessage } from "./socket"

const reducer = combineReducers({
  user,
  game,
  gameList,
  chat
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware, loggingMiddleware))
);

export {
  store,
  socket,
  loginThunk,
  logout,
  joinRoom,
  leaveRoom,
  sendChatMessage,
  updateLog,
  syncLog
};
