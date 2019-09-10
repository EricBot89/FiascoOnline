
const dummyRooms = [
    {
        id: 'room1',
        name: 'newbie friendly!!'
    },
    {
        id: 'room2',
        name: 'Alpha Complex Playset'
    },
    {
        id: 'room3',
        name: 'private game to which you have an invite'
    }
]

const initState = {
    openGames: dummyRooms
}

let UPDATE = "UPDATE"

const gameList = (state = initState, action) => {
    switch (action.type) {
        case UPDATE:
            return action.openGames
        default:
            break
    }
    return state
}

export {gameList}