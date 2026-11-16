const AI_CONFIG = require("./ai-config");

class AIManager {
  constructor() {
    this.agents = AI_CONFIG.agents;
  }

  getAllAgents() {
    return this.agents;
  }

  getAgent(name) {
    return this.agents.find(
      agent => agent.name.toLowerCase() === name.toLowerCase()
    ) || null;
  }

  getAgentCount() {
    return this.agents.length;
  }

  getSystemStatus() {
    return {
      application: AI_CONFIG.appName,
      status: "operational",
      totalAgents: this.getAgentCount(),
      agents: this.getAllAgents()
    };
  }
}

module.exports = new AIManager();
