/**
 * OBAME MOUÉKOUKOU
 * SERVEUR PRINCIPAL
 * OBAME UNIVERSE
 */

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");
const OpenAI = require("openai");

const app = express();
const PORT = process.env.PORT || 3000;

// Configuration IA
const openai = process.env.OPENAI_API_KEY
  ? new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    })
  : null;

// Middlewares
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.static(path.join(__dirname, "public")));

// Modules OBAME
const universeRoutes = require("./universe-routes");
const AI_TEAM = require("./ai-team");
const TRANSLATOR = require("./translator");
const VISION = require("./vision");
const STUDIO = require("./studio");
const SCIENCE = require("./science");
const LIVE = require("./live");

// Routes principales
app.get("/api/status", (req, res) => {
  res.json({
    application: "OBAME MOUÉKOUKOU",
    universe: "OBAME UNIVERSE",
    version: "1.0.0",
    status: "online"
  });
});

// Routes univers
app.use("/api/universe", universeRoutes);

// Équipe IA
app.get("/api/team", (req, res) => {
  res.json({
    success: true,
    assistants: AI_TEAM.getAssistants()
  });
});

// Traducteur
app.get("/api/translator", (req, res) => {
  res.json({
    success: true,
    languages: TRANSLATOR.getLanguages()
  });
});

// Vision
app.get("/api/vision", (req, res) => {
  res.json({
    success: true,
    capabilities: VISION.getCapabilities()
  });
});

// Studio
app.get("/api/studio", (req, res) => {
  res.json({
    success: true,
    tools: STUDIO.getTools()
  });
});

// Science
app.get("/api/science", (req, res) => {
  res.json({
    success: true,
    domains: SCIENCE.getDomains()
  });
});

// Live
app.get("/api/live", (req, res) => {
  res.json({
    success: true,
    features: LIVE.getFeatures()
  });
});

// Conversation avec OBAME AI
app.post("/api/chat", async (req, res) => {
  try {
    const message = req.body.message;

    if (!message || typeof message !== "string") {
      return res.status(400).json({
        error: "Un message est nécessaire."
      });
    }

    if (!openai) {
      return res.status(503).json({
        error: "La clé API OpenAI n'est pas configurée."
      });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "Tu es OBAME MOUÉKOUKOU, un assistant intelligent, utile et respectueux."
        },
        {
          role: "user",
          content: message
        }
      ]
    });

    res.json({
      success: true,
      reply: completion.choices[0].message.content
    });

  } catch (error) {
    console.error("Erreur IA :", error.message);

    res.status(500).json({
      error: "Une erreur est survenue pendant la conversation."
    });
  }
});

// Page d'accueil
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Démarrage
app.listen(PORT, () => {
  console.log("=================================");
  console.log("OBAME MOUÉKOUKOU");
  console.log("OBAME UNIVERSE");
  console.log("Serveur démarré sur le port " + PORT);
  console.log("=================================");
});
