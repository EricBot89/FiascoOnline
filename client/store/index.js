import {createStore, combineReducers} from 'redux'
import {user} from './reducers/user'
import { socket } from './socket'

const initState = {
    state: null,
}

const rootReducer = (state = initState, action) => {
    return state
}

const reducer = combineReducers({
    rootReducer,
    user
})

const store = createStore(reducer)

socket.connect()

export {store}