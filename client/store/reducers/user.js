const initState = {
    userName: null
}

const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const ERROR = 'ERROR'

const user = (state=initState, action) => {

    switch (action.type) {
        case LOGIN:
            return action.user
        case LOGOUT:
            return initState
        case ERROR:
            return action.error
        default:
            return state
    }

  return state
}

export {user}