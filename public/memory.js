class AIMemory {
  constructor() {
    this.conversations = [];
  }

  save(userMessage, aiResponse) {
    const entry = {
      user: userMessage,
      assistant: aiResponse,
      date: new Date().toISOString()
    };

    this.conversations.push(entry);

    return entry;
  }

  getHistory() {
    return this.conversations;
  }

  clear() {
    this.conversations = [];
  }
}

module.exports = new AIMemory();
