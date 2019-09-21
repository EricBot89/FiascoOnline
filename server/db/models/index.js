const User = require("./User");
const Chat = require("./Chat");
const Game = require("./Game");

User.hasMany(Game);

Game.hasMany(Chat);
Chat.belongsTo(Game);
Chat.belongsTo(User);

module.exports = {
  User,
  Chat,
  Game
};
