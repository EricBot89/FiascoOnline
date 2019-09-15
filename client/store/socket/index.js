import io from 'socket.io-client'
import { store, updateLog } from "../../store"
const socket = io(window.location.origin)

socket.connect();

socket.on('connect', () => {
    console.log('server socket connection established')
})

socket.on('test', (str) => {
    console.log(`The server sent a test with string ${str}`)
})

socket.on("newChatMessage", mssgString => {
    console.log(mssgString);
    store.dispatch(updateLog(mssgString));
  });

const sendChatMessage = (user, mssg ,locale) => {
    socket.emit("chatMessage", user, mssg, locale)
}



export { socket, sendChatMessage}