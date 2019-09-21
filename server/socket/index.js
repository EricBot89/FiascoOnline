const { ChacheLib } = require("./chatCache");
const { User, Game, Chat} = require("../db/models")

const cachedChats = new ChacheLib();

const  storeChat = async (mssg, locale) => {
  try{
    Chat.create({ messageText: mssg, locale})
  } catch (err){
    console.log(err)
  }
}

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

    socket.on("chatMessage", (user, mssg, locale, userID) => {
      const currentTime = new Date();
      const mssgString = `[${user}: ${currentTime.getHours()}:${currentTime.getMinutes()}] ${mssg}`;
      const cache = cachedChats.get(locale);
      cache.addChat(mssgString);
      if (locale !== "Global") {
        //save this to the db
        storeChat(mssg, locale)
      }
      io.sockets.in(locale).emit("newChatMessage", mssgString);
    });

    socket.on("createRoom", (room, userID) => {
      cachedChats.set(room);
      //add the new game to the db
      socket.emit.broadcast("roomCreated", room);
    });

    socket.on("disconnect", () => {
      console.log(`bye ${socket.id}`);
    });
  });
};
