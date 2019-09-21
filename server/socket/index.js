const { chatCache, chacheLib } = require("./chatCache");

const cachedChats = new chacheLib();

module.exports = io => {
  io.on("connection", socket => {
    console.log(`say hello to ${socket.id}`);

    socket.on("join", locale => {
      console.log("joining ", locale);
      socket.join(locale);
    });

    socket.on("leave", locale => {
      console.log("leaving ", locale);
      socket.join(locale);
    });

    socket.on("syncLog", locale => {
      if (cachedChats[locale]) {
        const cache = cachedChats.get(locale);
        io.to(`${socket.id}`).emit("logSync", cache.JSONFromChat());
      }
    });

    socket.on("chatMessage", (user, mssg, locale) => {
      const currentTime = new Date();
      const mssgString = `[${user}: ${currentTime.getHours()}:${currentTime.getMinutes()}] ${mssg}`;
      const cache = cachedChats.get(locale);
      cache.addChat(mssgString);
      console.log(locale);
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
