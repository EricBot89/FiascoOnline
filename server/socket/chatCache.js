class chatCache {
  log = [];

  addChat(chat) {
    this.log.push(chat);
    if (chat.length > 100) {
      this.log.shift();
    }
  }

  JSONFromChat() {
    return JSON.stringify(this.log);
  }
}

module.exports = chatCache;
