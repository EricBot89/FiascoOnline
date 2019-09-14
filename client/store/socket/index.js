import io from 'socket.io-client'

const socket = io(window.location.origin)

socket.on('connect', () => {
    console.log('server socket connection established')
})

socket.on('test', (str) => {
    console.log(`The server sent a test with string ${str}`)
})

const sendChatMessage = (user, mssg ,locale) => {
    socket.emit("chatMessage", user, mssg, locale)
}

socket.connect();


export { socket, sendChatMessage}