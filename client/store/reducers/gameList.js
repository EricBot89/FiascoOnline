const initState = {
  openGames: []
};

let ADD_GAME = "ADD_GAME";

const addGame = game => {
  return { type: ADD_GAME, game };
};

const syncRoomsThunk = () => {};

const createNewRoomThunk = room => {
  return dispatch => {
    //emit create from socket
    dispatch(addGame(room));
  };
};

const gameList = (state = initState, action) => {
  switch (action.type) {
    case ADD_GAME:
      state.openGames.push(action.game)
      return {openGames: state.openGames}
    default:
      break;
  }
  return state;
};

export { gameList, createNewRoomThunk, syncRoomsThunk, addGame };
