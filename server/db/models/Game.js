const Sequelize = require("sequelize");
const db = require("../index");

const Game = db.define("game", {
  roomName: Sequelize.STRING
});

module.exports = Game;
