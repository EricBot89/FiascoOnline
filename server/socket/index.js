const chatCache = require("./chatCache");

module.exports = io => {
  const Global = new chatCache();

  cachedChats = {
    Global
  };

  io.on("connection", socket => {
    console.log(`say hello to ${socket.id}`);

    socket.join("Global");

    socket.on("join", locale => {
      socket.leave("Global");
      socket.join(locale);
    });

    socket.on("leave", () => {
      let rooms = socket.rooms;
      for (let room in rooms) {
        if (room != socket.id) socket.leave(room);
      }
      socket.join("Global");
    });

    socket.on("syncLog", locale => {
      if (cachedChats[locale]) {
        io.to(`${socket.id}`).emit(
          "logSync",
          cachedChats[locale].JSONFromChat()
        );
      } else {
        cachedChats[locale] = new chatCache();
        io.to(`${socket.id}`).emit(
          "logSync",
          "['A helpful message for an empty chat']"
        );
      }
    });

    socket.on("chatMessage", (user, mssg, locale) => {
      const currentTime = new Date();
      const mssgString = `[${user}: ${currentTime.getHours()}:${currentTime.getMinutes()}] ${mssg}`;
      cachedChats[locale].addChat(mssgString);
      if (locale != "Global") {
        //save this to the db
      }
      io.sockets.in(locale).emit("newChatMessage", mssgString);
    });

    socket.on("disconnect", () => {
      console.log(`bye ${socket.id}`);
    });
  });
};
