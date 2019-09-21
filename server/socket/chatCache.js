class ChatCache {
  log = [];

  addChat(chatMssg) {
    this.log.push(chatMssg);
    if (chat.length > 100) {
      this.log.shift();
    }
  }

  JSONFromChat() {
    return JSON.stringify(this.log);
  }
}

class ChacheLib {
  lib = {
    Global: new ChatCache()
  };

  set(chat) {
    lib[chat] = new ChatCache();
  }

  get(chat) {
    return lib[chat];
  }
}

module.exports = { ChatCache, ChacheLib };
