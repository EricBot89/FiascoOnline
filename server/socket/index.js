module.exports = io => {

  io.on("connection", socket => {

    console.log(`say hello to ${socket.id}`);

    socket.join("Global")

    socket.on("chatMessage", (user, mssg, locale) => {
      const currentTime = new Date();
      const mssgString = `[${user}: ${currentTime.getHours()}:${currentTime.getMinutes()}] ${mssg}`;
      io.emit("newChatMessage", mssgString);
    });

    socket.on("disconnect", () => {
      console.log(`bye ${socket.id}`);
    });

  });



};
