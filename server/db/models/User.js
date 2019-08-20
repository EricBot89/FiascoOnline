const Sequelize = require("sequelize");
const db = require("../index").db;

module.exports = db.define('user', {
    userName: Sequelize.STRING
})