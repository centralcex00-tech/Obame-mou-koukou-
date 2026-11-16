class AIDebate {
  constructor() {
    this.history = [];
  }

  start(topic) {
    if (!topic || !topic.trim()) {
      throw new Error("Un sujet est nécessaire.");
    }

    this.history = [];

    return {
      topic,
      status: "ready",
      participants: ["OpenAI", "Grok", "Gemini", "Claude"],
      message: "Le débat est prêt à commencer."
    };
  }

  addResponse(ai, response) {
    const entry = {
      ai,
      response,
      date: new Date().toISOString()
    };

    this.history.push(entry);
    return entry;
  }

  getHistory() {
    return this.history;
  }
}

module.exports = AIDebate;
