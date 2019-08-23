import {createStore, combineReducers, applyMiddleware} from 'redux'
import {user} from './reducers/user'
import { socket } from './socket'
import {middleware} from './middleware'
import { composeWithDevTools } from 'redux-devtools-extension';


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

const store = createStore(reducer, composeWithDevTools(applyMiddleware(middleware)))

socket.connect()

export {store}