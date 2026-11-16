/**
 * OBAME MOUÉKOUKOU
 * CENTRE DE COMMANDE OBAME UNIVERSE
 */

const AI_TEAM = require("./ai-team");
const TRANSLATOR = require("./translator");
const VISION = require("./vision");
const STUDIO = require("./studio");
const SCIENCE = require("./science");
const LIVE = require("./live");

const OBAME_UNIVERSE = {

  name: "OBAME UNIVERSE",

  slogan: "L'union des intelligences artificielles pour repousser les limites du possible.",

  version: "1.0.0",

  modules: {
    ai: AI_TEAM,
    translator: TRANSLATOR,
    vision: VISION,
    studio: STUDIO,
    science: SCIENCE,
    live: LIVE
  },

  getModules() {
    return Object.keys(this.modules).map(key => ({
      id: key,
      name: this.modules[key].name,
      status: "prepared"
    }));
  },

  getModule(id) {
    return this.modules[id] || null;
  },

  getOverview() {
    return {
      application: this.name,
      version: this.version,
      slogan: this.slogan,
      modules: this.getModules(),
      totalModules: 8,
      preparedModules: 6,
      status: "integration_in_progress"
    };
  }

};

module.exports = OBAME_UNIVERSE;
