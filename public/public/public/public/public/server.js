const express = require("express");
const AI_CONFIG = require("./ai-config");
const AIManager = require("./ai-manager");
const DebateEngine = require("./debate-engine");
const MemoryManager = require("./memory-manager");
const SystemManager = require("./system-manager");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("public"));

app.get("/api/status", (req, res) => {
  res.json(SystemManager.getSystemInfo());
});

app.get("/api/agents", (req, res) => {
  res.json(AIManager.getAllAgents());
});

app.post("/api/debate", (req, res) => {
  try {
    const debate = DebateEngine.createDebate(req.body.topic);
    res.json({ success: true, debate });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
});

app.post("/api/memory", (req, res) => {
  try {
    const memory = MemoryManager.save(
      req.body.userId,
      req.body.message
    );

    res.json({ success: true, memory });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
});

app.get("/api/memory/:userId", (req, res) => {
  res.json(MemoryManager.getMemories(req.params.userId));
});

app.get("/api/config", (req, res) => {
  res.json({
    name: AI_CONFIG.appName,
    version: AI_CONFIG.version
  });
});

app.get("*", (req, res) => {
  res.sendFile("index.html", { root: "public" });
});

app.listen(PORT, () => {
  console.log("--------------------------------");
  console.log("🚀 OBAME MOUÉKOUKOU");
  console.log("Serveur démarré sur le port " + PORT);
  console.log("--------------------------------");
});
