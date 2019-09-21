class chatCache {
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

class chacheLib {
  lib = {
    Global: new chatCache()
  };

  set(chat) {
    lib[chat] = new chatCache();
  }

  get(chat) {
    return lib[chat];
  }
}

module.exports = { chatCache, chacheLib };
