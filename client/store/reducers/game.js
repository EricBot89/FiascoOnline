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
      const { room } = action;
      state.room = room;
      return state;
    case LEAVE_ROOM:
      state.room = null;
      return state;
    default:
      return state;
  }
};

export { game, joinRoom, leaveRoom };
