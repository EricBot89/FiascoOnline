module.exports = io => {
    io.on('connection', socket => {
        console.log(`say hello to ${socket.id}`)


        socket.on('disconnect', () => {
            console.log(`bye ${socket.id}`)
        })

        setTimeout( () => {
            socket.emit('test','teststring')
            console.log('socket test ')
        }
            , 3000)
            
    })
   
}