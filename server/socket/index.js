const { ChacheLib } = require("./chatCache");
const { User, Game, Chat } = require("../db/models");

const cachedChats = new ChacheLib();

const storeChat = async (mssg, locale, userID = 0) => {
  try {
    Chat.create({ messageText: mssg, locale });
  } catch (err) {
    console.log(err);
  }
};

const storeRoom = async (room, userID = 0) => {
  try {
    const returnRoom = await Game.create({
      roomName: room
    });
    return returnRoom;
  } catch (err) {
    console.log(err);
  }
};

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
      io.to(`${socket.id}`).emit("logSync", cache.JSONFromChat());
    });

    socket.on("chatMessage", (user, mssg, locale, userID) => {
      const currentTime = new Date();
      const mssgString = `[${user}: ${currentTime.getHours()}:${currentTime.getMinutes()}] ${mssg}`;
      const cache = cachedChats.get(locale);
      cache.addChat(mssgString)
      cache.addChat(mssgString);
      if (locale !== "Global") {
        storeChat(mssg, locale);
      }
      io.sockets.in(locale).emit("newChatMessage", mssgString);
    });

    socket.on("createRoom", async (room, userID) => {
      cachedChats.set(room);
      const returnRoom = await storeRoom(room);
      io.emit("roomCreated", returnRoom);
    });

    socket.on("disconnect", () => {
      console.log(`bye ${socket.id}`);
    });
  });
};
