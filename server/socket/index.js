const chatCache = require("./chatCache");

module.exports = io => {
  const Global = new chatCache();

  cachedChats = {
    Global
  };

  io.on("connection", socket => {
    console.log(`say hello to ${socket.id}`);

    socket.on("join", locale => {
      console.log("joining ", locale)
      socket.join(locale);
    });

    socket.on("leave", (locale) => {
      console.log("leaving ", locale)
      socket.join(locale);
    });

    socket.on("syncLog", locale => {
      if (cachedChats[locale]) {
        console.log(locale)
        io.to(`${socket.id}`).emit(
          "logSync",
          cachedChats[locale].JSONFromChat()
        );
      } else {
        cachedChats[locale] = new chatCache();
        io.to(`${socket.id}`).emit(
          "logSync",
          JSON.stringify(['A helpful message for an empty chat'])
        );
      }
    });

    socket.on("chatMessage", (user, mssg, locale) => {
      const currentTime = new Date();
      const mssgString = `[${user}: ${currentTime.getHours()}:${currentTime.getMinutes()}] ${mssg}`;
      cachedChats[locale].addChat(mssgString);
      console.log(locale)
      if (locale !== "Global") {
        //save this to the db
      }
      io.sockets.in(locale).emit("newChatMessage", mssgString);
    });

    socket.on("disconnect", () => {
      console.log(`bye ${socket.id}`);
    });
  });
};
