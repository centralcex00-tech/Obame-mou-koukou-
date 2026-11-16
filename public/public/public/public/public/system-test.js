const assert = require("node:assert/strict");

const AI_CONFIG = require("./ai-config");
const AIManager = require("./ai-manager");
const DebateEngine = require("./debate-engine");
const MemoryManager = require("./memory-manager");
const VoiceManager = require("./voice-manager");
const AvatarManager = require("./avatar-manager");
const VideoManager = require("./video-manager");
const SystemManager = require("./system-manager");

function runTests() {
  console.log("🚀 TESTS OBAME MOUÉKOUKOU");

  assert.equal(AI_CONFIG.appName, "OBAME MOUÉKOUKOU");
  console.log("✅ Configuration");

  assert.equal(AIManager.getAgentCount(), 5);
  console.log("✅ Gestion des 5 intelligences");

  const debate = DebateEngine.createDebate("L'avenir de l'IA");
  assert.equal(debate.participants.length, 5);
  console.log("✅ Moteur de débats");

  MemoryManager.save("test-user", "Bonjour OBAME");
  assert.equal(MemoryManager.getMemories("test-user").length, 1);
  console.log("✅ Gestion de la mémoire");

  assert.equal(VoiceManager.getStatus().enabled, true);
  console.log("✅ Module vocal");

  assert.equal(AvatarManager.getAvatar().name, "OBAME");
  console.log("✅ Gestion de l'avatar");

  assert.equal(VideoManager.getStatus().provider, "WebRTC");
  console.log("✅ Module vidéo");

  assert.equal(SystemManager.getSystemInfo().status, "online");
  console.log("✅ Gestionnaire central");

  console.log("--------------------------------");
  console.log("🎉 TOUS LES TESTS SONT RÉUSSIS !");
}

try {
  runTests();
} catch (error) {
  console.error("❌ ERREUR :", error.message);
  process.exitCode = 1;
}
