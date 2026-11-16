/**
 * OBAME MOUÉKOUKOU
 * MODULE TEAM IA
 * Collaboration entre plusieurs intelligences artificielles.
 */

const AI_TEAM = {
  name: "OBAME TEAM IA",

  assistants: [
    {
      id: "openai",
      name: "ChatGPT",
      provider: "OpenAI",
      status: "configured"
    },
    {
      id: "grok",
      name: "Grok",
      provider: "xAI",
      status: "pending"
    },
    {
      id: "gemini",
      name: "Gemini",
      provider: "Google",
      status: "pending"
    },
    {
      id: "claude",
      name: "Claude",
      provider: "Anthropic",
      status: "pending"
    }
  ],

  getAssistants() {
    return this.assistants;
  },

  getAssistant(id) {
    return this.assistants.find(ai => ai.id === id) || null;
  },

  getAvailableAssistants() {
    return this.assistants.filter(ai => ai.status === "configured");
  },

  createMission(question) {
    if (!question || typeof question !== "string") {
      throw new Error("Une question est nécessaire.");
    }

    return {
      id: Date.now().toString(),
      question: question.trim(),
      assistants: this.assistants.map(ai => ai.name),
      status: "created",
      createdAt: new Date().toISOString()
    };
  },

  createDebate(question) {
    const mission = this.createMission(question);

    return {
      ...mission,
      type: "debate",
      rounds: [],
      status: "waiting_for_ai"
    };
  },

  compareAnswers(answers) {
    if (!Array.isArray(answers)) {
      throw new Error("Les réponses doivent être dans une liste.");
    }

    return {
      totalAnswers: answers.length,
      answers,
      comparisonDate: new Date().toISOString()
    };
  }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = AI_TEAM;
}
