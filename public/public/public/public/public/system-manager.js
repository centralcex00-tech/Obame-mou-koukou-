const AI_CONFIG = require("./ai-config");
const AIManager = require("./ai-manager");
const DebateEngine = require("./debate-engine");
const MemoryManager = require("./memory-manager");
const VoiceManager = require("./voice-manager");
const AvatarManager = require("./avatar-manager");
const VideoManager = require("./video-manager");

class SystemManager {
  getSystemInfo() {
    return {
      name: AI_CONFIG.appName,
      version: AI_CONFIG.version,
      status: "online",

      intelligence: {
        agents: AIManager.getAgentCount(),
        list: AIManager.getAllAgents()
      },

      modules: {
        debates: true,
        memory: true,
        voice: true,
        avatar: true,
        video: true
      },

      services: {
        voice: VoiceManager.getStatus(),
        avatar: AvatarManager.getAvatar(),
        video: VideoManager.getStatus()
      }
    };
  }

  getModules() {
    return {
      AIManager,
      DebateEngine,
      MemoryManager,
      VoiceManager,
      AvatarManager,
      VideoManager
    };
  }
}

module.exports = new SystemManager();
