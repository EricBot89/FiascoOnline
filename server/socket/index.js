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
      socket.join(locale);
    });

    socket.on("leave", locale => {
      socket.leave(locale);
    });

    socket.on("syncLog", locale => {
      console.log(cachedChats[locale])
      console.log(cachedChats[locale].JSONFromChat())
      io.to(`${socket.id}`).emit("logSync", cachedChats[locale].JSONFromChat() )
    })

    socket.on("chatMessage", (user, mssg, locale) => {
      const currentTime = new Date();
      const mssgString = `[${user}: ${currentTime.getHours()}:${currentTime.getMinutes()}] ${mssg}`;
      cachedChats[locale].addChat(mssgString)
      if(locale != "Global"){
        //save this to the db
      }
      io.sockets.in(locale).emit("newChatMessage", mssgString);
    });

    socket.on("disconnect", () => {
      console.log(`bye ${socket.id}`);
    });
  });
};
