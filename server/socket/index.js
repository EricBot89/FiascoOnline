module.exports = io => {
  io.on("connection", socket => {
    console.log(`say hello to ${socket.id}`);

    socket.on("disconnect", () => {
      console.log(`bye ${socket.id}`);
    });

    socket.on("chatMessage", (user, mssg, locale ) => {
        socket.emit("newChatMessage", mssg)
        console.log("a chat got here: ", mssg)
    } );
  });
};
