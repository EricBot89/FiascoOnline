import {createStore, combineReducers} from 'redux'
import { create } from 'domain';

const initState = {
    state: null,
}

const rootReducer = (state = initState, action) => {
    return state
}

const reducer = combineReducers({
    rootReducer,
})

const store = createStore(reducer)

export {store}