const Sequelize = require("sequelize");
const db = require("../index");

const Chat = db.define("chat", {
    messageText: Sequelize.STRING,
    locale: Sequelize.STRING,
})

module.exports = Chat