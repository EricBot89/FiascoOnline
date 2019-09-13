const initState = {
  locale: "Global",
  chatLog: []
};

const JOIN_ROOM = "JOIN_ROOM";
const LEAVE_ROOM = "LEAVE_ROOM";
const UPDATE_LOG = "UPDATE_LOG";

const updateLog = mssgString => {
  return { type: UPDATE_LOG, mssgString };
};

const game = (state = initState, action) => {
  switch (action.type) {
    case JOIN_ROOM:
      const { room } = action;
      state.locale = room;
      return state;
    case LEAVE_ROOM:
      state.locale = "Global";
      return state;
    case UPDATE_LOG:
      const { mssgString } = action;
      state.chatLog.push(mssgString);
      return state;
    case SYNC_LOG:
      const { chatLog } = action;
      return { ...state, chatLog };
    default:
      return state;
  }
};
