const express = require("express");
const router = express.Router();

const {
demanderChatGPT,
demanderGrok
} = require("./ai");

const { lancerDebat } = require("./debate");

// Vérifier le fonctionnement
router.get("/status", (req, res) => {
res.json({
application: "OBAME MOUÉKOUKOU",
statut: "En ligne",
intelligences: ["ChatGPT", "Grok"]
});
});

// Conversation avec ChatGPT
router.post("/chatgpt", async (req, res) => {
try {
const { message } = req.body;

if (!message) {
  return res.status(400).json({
    erreur: "Message manquant"
  });
}

const reponse = await demanderChatGPT(message);

res.json({ reponse });

} catch (erreur) {
res.status(500).json({
erreur: erreur.message
});
}
});

// Conversation avec Grok
router.post("/grok", async (req, res) => {
try {
const { message } = req.body;

if (!message) {
  return res.status(400).json({
    erreur: "Message manquant"
  });
}

const reponse = await demanderGrok(message);

res.json({ reponse });

} catch (erreur) {
res.status(500).json({
erreur: erreur.message
});
}
});

// Débat entre les intelligences artificielles
router.post("/debate", async (req, res) => {
try {
const { sujet } = req.body;

if (!sujet) {
  return res.status(400).json({
    erreur: "Sujet manquant"
  });
}

const resultat = await lancerDebat(sujet);

res.json({ resultat });

} catch (erreur) {
res.status(500).json({
erreur: erreur.message
});
}
});

module.exports = router;
