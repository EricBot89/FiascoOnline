const cubeCaller = require("connectycube");
const {credentials, config} = require("../../secrets")

cubeCaller.init(credentials, config)

module.exports = cubeCaller;
