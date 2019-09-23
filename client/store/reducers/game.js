const initState = {
  room: null
};

const JOIN_ROOM = "JOIN_ROOM";
const LEAVE_ROOM = "LEAVE_ROOM";

const joinRoom = room => {
  return { type: JOIN_ROOM, room };
};
const leaveRoom = room => {
  return { type: LEAVE_ROOM };
};

const game = (state = initState, action) => {
  switch (action.type) {
    case JOIN_ROOM:
      return { room: action.room };
    case LEAVE_ROOM:
      return { room: null };
    default:
      return state;
  }
};

export { game, joinRoom, leaveRoom };
