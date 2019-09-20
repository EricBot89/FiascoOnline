/*const dummyRooms = [
  {
    id: "room1",
    name: "newbie friendly!!"
  },
  {
    id: "room2",
    name: "Alpha Complex Playset"
  },
  {
    id: "room3",
    name: "private game to which you have an invite"
  },
  {
    id: "room3",
    name: "private game to which you have an invite"
  },
  {
    id: "room3",
    name: "private game to which you have an invite"
  },
  {
    id: "room3",
    name: "private game to which you have an invite"
  },
  {
    id: "room3",
    name: "private game to which you have an invite"
  },
  {
    id: "room3",
    name: "private game to which you have an invite"
  },
  {
    id: "room3",
    name: "private game to which you have an invite"
  },
  {
    id: "room3",
    name: "private game to which you have an invite"
  },
  {
    id: "room3",
    name: "private game to which you have an invite"
  }
];
*/
const initState = {
  openGames: []
};

let ADD_GAME = "ADD_GAME";

const addGame = (game) => {
  return {type: ADD_GAME, game}
}

const syncRoomsThunk = () => {};

const createNewRoom = roomDat => {};

const gameList = (state = initState, action) => {
  switch (action.type) {
    case ADD_GAME:
      
      return action.openGames;
    default:
      break;
  }
  return state;
};

export { gameList, addGame };
