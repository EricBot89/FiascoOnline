import axios from "axios";

const initState = {
  openGames: []
};

const ADD_GAME = "ADD_GAME";
const SYNC_ROOMS = "SYNC_ROOMS";

const addGame = game => {
  return { type: ADD_GAME, game };
};

const syncRooms = roomList => {
  return { type: SYNC_ROOMS, roomList };
};

const syncRoomsThunk = () => {
  return async dispatch => {
    try {
      const roomList = await axios.get("/api/games");
      console.log(roomList.data);
      dispatch(syncRooms(roomList.data));
    } catch (err) {
      console.log(err);
    }
  };
};

const gameList = (state = initState, action) => {
  switch (action.type) {
    case ADD_GAME:
      state.openGames.push(action.game);
      return { openGames: state.openGames };
    case SYNC_ROOMS:
      return { openGames: action.roomList };
    default:
      return state;
  }
};

export { gameList, syncRoomsThunk, addGame };
