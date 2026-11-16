/**
 * OBAME MOUÉKOUKOU
 * OBAME UNIVERSE - CONNEXION
 */

const OBAME_UNIVERSE = {

  async initialize() {
    const status = document.createElement("p");

    status.id = "universe-status";
    status.style.textAlign = "center";
    status.style.color = "#75caff";
    status.textContent = "Connexion à OBAME UNIVERSE...";

    const welcome = document.querySelector(".welcome");

    if (welcome) {
      welcome.appendChild(status);
    }

    try {
      const response = await fetch("/api/universe");

      if (!response.ok) {
        throw new Error("Serveur indisponible");
      }

      const data = await response.json();

      status.textContent =
        "🌌 " + data.application +
        " — " + data.totalModules + " modules prévus";

      this.updateModules(data.modules);

    } catch (error) {
      status.textContent =
        "Connexion au serveur en attente.";
    }
  },

  updateModules(modules) {
    if (!Array.isArray(modules)) return;

    document.querySelectorAll(".card").forEach(card => {
      const title = card.querySelector("h2");

      if (!title) return;

      const module = modules.find(item =>
        item.name.toLowerCase() === title.textContent.trim().toLowerCase()
      );

      if (module) {
        const badge = card.querySelector(".status");

        if (badge) {
          badge.textContent = "Module préparé";
        }
      }
    });
  }

};

document.addEventListener("DOMContentLoaded", () => {
  OBAME_UNIVERSE.initialize();
});
