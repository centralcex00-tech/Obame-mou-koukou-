const AI_CONFIG = {
  application: {
    name: "OBAME MOUÉKOUKOU",
    version: "1.0.0",
    language: "fr"
  },

  assistants: [
    {
      id: "openai",
      name: "OpenAI",
      enabled: true,
      provider: "openai"
    },
    {
      id: "xai",
      name: "Grok",
      enabled: true,
      provider: "xai"
    },
    {
      id: "google",
      name: "Gemini",
      enabled: true,
      provider: "google"
    },
    {
      id: "anthropic",
      name: "Claude",
      enabled: true,
      provider: "anthropic"
    }
  ],

  features: {
    conversation: true,
    voice: true,
    multiAI: true,
    debates: true,
    memory: true
  }
};

module.exports = AI_CONFIG;
