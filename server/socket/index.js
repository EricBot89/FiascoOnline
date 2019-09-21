const { ChacheLib } = require("./chatCache");

const cachedChats = new ChacheLib();

module.exports = io => {
  io.on("connection", socket => {
    console.log(`say hello to ${socket.id}`);

    socket.on("join", locale => {
      socket.join(locale);
    });

    socket.on("leave", locale => {
      socket.join(locale);
    });

    socket.on("syncLog", locale => {
      const cache = cachedChats.get(locale);
      if (cache) {
        io.to(`${socket.id}`).emit("logSync", cache.JSONFromChat());
      }
    });

    socket.on("chatMessage", (user, mssg, locale) => {
      const currentTime = new Date();
      const mssgString = `[${user}: ${currentTime.getHours()}:${currentTime.getMinutes()}] ${mssg}`;
      const cache = cachedChats.get(locale);
      cache.addChat(mssgString);
      if (locale !== "Global") {
        //save this to the db
      }
      io.sockets.in(locale).emit("newChatMessage", mssgString);
    });

    socket.on("createRoom", room => {
      cachedChats.set(room);
      //add the new game to the db
      socket.emit.broadcast("roomCreated", room);
    });

    socket.on("disconnect", () => {
      console.log(`bye ${socket.id}`);
    });
  });
};
