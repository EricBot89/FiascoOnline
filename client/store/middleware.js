import { socket } from './socket'
import {updateLog} from "./"


  
  const middleware = ({ dispatch, getState }) => {
    return next => action => {

      if (typeof action === 'function') {
        console.log('thunk in progress')
        return action(dispatch, getState)
      }

      socket.on("newChatMessage", (mssgString) => {
        console.log(mssgString)
        dispatch(updateLog(mssgString))
      })

      console.log(getState())
      console.log(next(action))
      console.log(getState())

      return next(action)
    }
  }

  export { middleware }