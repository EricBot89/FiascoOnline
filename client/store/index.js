import {createStore, combineReducers} from 'redux'
import {user} from './reducers/user'

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

export {store}