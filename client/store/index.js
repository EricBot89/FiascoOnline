import { createStore, combineReducers, applyMiddleware } from "redux";
import { user, loginThunk, logout } from "./reducers/user";
import { game } from "./reducers/game";
import { gameList, addGame } from "./reducers/gameList";
import { chat, updateLog, syncLog } from "./reducers/chat";
import { thunkMiddleware, loggingMiddleware } from "./middleware";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  socket,
  sendChatMessage,
  requestLog,
  join,
  leave,
  createRoom
} from "./socket";

const JOIN_ROOM = "JOIN_ROOM";
const LEAVE_ROOM = "LEAVE_ROOM";

const joinRoom = room => {
  join(room);
  return { type: JOIN_ROOM, room };
};

const leaveRoom = room => {
  leave(room);
  return { type: LEAVE_ROOM };
};

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
  syncLog,
  requestLog,
  createRoom,
  addGame
};
