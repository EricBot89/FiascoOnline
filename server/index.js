const express = require("express");
const path = require("path");
const volleyball = require("volleyball");
const socketio = require("socket.io");

const db = require("./db");
const PORT = 1337;

const server = express();

server.use(express.static(path.join(__dirname, "../public")));
server.use(volleyball);

server.use("/api", require("./api"));
server.use("/auth", require("./auth"));

server.get("*", (req, res, next) => {
  res.status(200).sendFile(path.join(__dirname, "../public/index.html"));
});

server.use((error, req, res, next) => {
  console.log(error);
  res.status(error.status || 500).send(error.message || "There was a problem");
});

const dbInit = () => {
  db.sync();
};

const serverInstance = server.listen(PORT, () => {
  dbInit();
  console.log(`Now listning on ${PORT}`);
});

const io = socketio(serverInstance);
const ioAPI = require("./socket")(io);
