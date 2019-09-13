const Chat = require("../db/models/Chat")

module.exports = io => {
  io.on("connection", socket => {
    console.log(`say hello to ${socket.id}`);

    socket.on("disconnect", () => {
      console.log(`bye ${socket.id}`);
    });

    socket.on("chatMessage", (user, mssg, locale ) => {
        const currentTime = new Date
        const mssgString = `[${user}: ${currentTime}] ${mssg}`
        console.log(mssgString)
        io.sockets.emit("newChatMessage", mssgString)
    } );
  });
};
