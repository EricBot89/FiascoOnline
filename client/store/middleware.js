import { socket } from './socket'


  
  const middleware = ({ dispatch, getState }) => {
    return next => action => {

      if (typeof action === 'function') {
        console.log('thunk in progress')
        return action(dispatch, getState)
      }

      socket.on('test', (str) => {
          console.log(`The server sent a test with string ${str}`)
      })

      socket.on("newChatMessage", (mssgString) => {
        console.log(mssgString)
      })

      console.log(getState())
      console.log(next(action))
      console.log(getState())

      return next(action)
    }
  }

  export { middleware }