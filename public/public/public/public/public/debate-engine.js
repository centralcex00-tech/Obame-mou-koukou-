const AIManager = require("./ai-manager");

class DebateEngine {
  constructor() {
    this.history = [];
  }

  createDebate(topic) {
    if (!topic || typeof topic !== "string" || !topic.trim()) {
      throw new Error("Un sujet de débat est obligatoire.");
    }

    const agents = AIManager.getAllAgents();

    const debate = {
      id: Date.now(),
      topic: topic.trim(),
      participants: agents.map(agent => ({
        name: agent.name,
        role: agent.role
      })),
      status: "created",
      createdAt: new Date().toISOString()
    };

    this.history.push(debate);

    return debate;
  }

  getHistory() {
    return this.history;
  }

  clearHistory() {
    this.history = [];
  }
}

module.exports = new DebateEngine();
