class ChatCache {
  log = [];

  addChat(chatMssg) {
    this.log.push(chatMssg);
    if (this.log.length > 100) {
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
    this.lib[chat] = new ChatCache();
  }

  get(chat) {
    return this.lib[chat];
  }
}

module.exports = { ChacheLib };
