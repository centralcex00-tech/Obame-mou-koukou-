const config = require("./ai-config");

class AIManager {
  constructor() {
    this.assistants = config.assistants;
  }

  getAssistants() {
    return this.assistants.filter(ai => ai.enabled);
  }

  getAssistant(id) {
    return this.assistants.find(ai => ai.id === id);
  }

  getStatus() {
    return {
      application: config.application.name,
      totalAI: this.assistants.length,
      activeAI: this.getAssistants().length,
      assistants: this.getAssistants()
    };
  }
}

module.exports = new AIManager();
