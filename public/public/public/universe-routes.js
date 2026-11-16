/**
 * OBAME MOUÉKOUKOU
 * ROUTES API - OBAME UNIVERSE
 */

const express = require("express");
const router = express.Router();

const UNIVERSE = require("./universe-manager");

// Présentation générale de l'univers
router.get("/", (req, res) => {
  res.json(UNIVERSE.getOverview());
});

// Liste des modules
router.get("/modules", (req, res) => {
  res.json({
    success: true,
    modules: UNIVERSE.getModules()
  });
});

// Informations sur un module
router.get("/modules/:id", (req, res) => {
  const module = UNIVERSE.getModule(req.params.id);

  if (!module) {
    return res.status(404).json({
      success: false,
      error: "Module introuvable."
    });
  }

  res.json({
    success: true,
    name: module.name,
    status: "prepared"
  });
});

module.exports = router;
