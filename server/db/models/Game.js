const Sequelize = require("sequelize");
const db = require("../index");

const Game = db.define("game", {
    roomName: Sequelize.STRING,
    gameId: Sequelize.STRING
});

module.exports = Game;
