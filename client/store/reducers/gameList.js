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

let UPDATE = "UPDATE";

const syncRoomsThunk = () => {};

const createNewRoom = roomDat => {};

const gameList = (state = initState, action) => {
  switch (action.type) {
    case UPDATE:
      return action.openGames;
    default:
      break;
  }
  return state;
};

export { gameList };
