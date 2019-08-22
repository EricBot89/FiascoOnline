const Sequelize = require('sequelize')
const log =  require('./log')

const db = new Sequelize('postgres://localhost:5432/fiascoapp', {
    logging: log
})

module.exports = db