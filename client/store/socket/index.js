import io from "socket.io-client";
import { store, updateLog, syncLog, addGame } from "../../store";
const socket = io(window.location.origin);

socket.connect();

socket.on("connect", () => {
  console.log("server socket connection established");
});

socket.on("logSync", log => {
  const parsedlog = JSON.parse(log);
  store.dispatch(syncLog(parsedlog));
});

socket.on("newChatMessage", mssgString => {
  store.dispatch(updateLog(mssgString));
});

socket.on("roomCreated", room => {
  store.dispatch(addGame(room));
});

const sendChatMessage = (user, mssg, locale) => {
  socket.emit("chatMessage", user, mssg, locale);
};

const requestLog = locale => {
  socket.emit("syncLog", locale);
};

const join = room => {
  socket.emit("join", room);
};

const leave = () => {
  socket.emit("leave");
};

const createRoom = (room, userID) => {
  socket.emit("createRoom", room, userID);
};

export { socket, sendChatMessage, requestLog, join, leave, createRoom };
