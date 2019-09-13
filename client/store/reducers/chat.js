const dumyChatLog = [
  ["[user1 12:13:26] hi"],
  ["[user2 12:24:26] hello"],
  [
    "[user3 01:24:26] quite a long message to the chat, meant to bleed over onto another line"
  ]
];

const initState = {
  locale: "Global",
  chatLog: dumyChatLog
};

const JOIN_ROOM = "JOIN_ROOM";
const LEAVE_ROOM = "LEAVE_ROOM";
const UPDATE_LOG = "UPDATE_LOG";
const SYNC_LOG = "SYNC_LOG"

const updateLog = mssgString => {
  return { type: UPDATE_LOG, mssgString };
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
      return state;
    case SYNC_LOG:
      const { chatLog } = action;
      state.chatLog = chatLog
      return state;
    default:
      return state;
  }
};

export {chat, updateLog}