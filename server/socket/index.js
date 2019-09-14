const Chat = require("../db/models/Chat");

module.exports = io => {
  io.on("connection", socket => {
    console.log(`say hello to ${socket.id}`);

    socket.join("Global")

    io.sockets.in("Global").emit("handshake")

    io.sockets.in("Global").emit("test", "hi")


    socket.on("chatMessage", (user, mssg, locale) => {
      const currentTime = new Date();
      const mssgString = `[${user}: ${currentTime}] ${mssg}`;
      console.log(mssgString)
      socket.broadcast.to("Global").emit("newChatMessage", mssgString)
    });

    socket.on("disconnect", () => {
      console.log(`bye ${socket.id}`);
    });
  });
};
