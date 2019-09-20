import io from "socket.io-client";
import { store, updateLog, syncLog } from "../../store";
const socket = io(window.location.origin);

socket.connect();

socket.on("connect", () => {
  console.log("server socket connection established");
});

socket.on("logSync", log => {
  console.log(log)
  const parsedlog = JSON.parse(log);
  store.dispatch(syncLog(parsedlog));
});

socket.on("newChatMessage", mssgString => {
  store.dispatch(updateLog(mssgString));
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

export { socket, sendChatMessage, requestLog, join, leave };
