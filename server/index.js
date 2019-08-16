const express = require('express')
const path = require('path')
const volleyball = require('volleyball')

const PORT = 1337

const server = express()

server.use(express.static(path.join(__dirname, "../public")))
server.use(volleyball)


server.use( (error, req, res, next) =>{
    console.log(error)
    res.status(error.status || 500).send(err.message || "There was a problem")
})

server.listen(PORT, () => {
    console.log(`Now listning on ${PORT}`)
})