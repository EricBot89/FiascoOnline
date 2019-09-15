const initState = {
  locale: "Global",
  chatLog: ["CHAT"]
};

const JOIN_ROOM = "JOIN_ROOM";
const LEAVE_ROOM = "LEAVE_ROOM";
const UPDATE_LOG = "UPDATE_LOG";
const SYNC_LOG = "SYNC_LOG";

const updateLog = mssgString => {
  return { type: UPDATE_LOG, mssgString };
};

const syncLog = (chatLog = ["CHAT"]) => {
  return { type: SYNC_LOG, chatLog };
};

const chat = (state = initState, action) => {
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
      return {chatLog: state.chatLog, locale: state.locale};
    case SYNC_LOG:
      const { chatLog } = action;
      state.chatLog = chatLog;
      return state;
    default:
      return state;
  }
};

export { chat, updateLog, syncLog };
