class VoiceManager {
  constructor() {
    this.enabled = true;
    this.language = "fr-FR";
  }

  getStatus() {
    return {
      enabled: this.enabled,
      language: this.language,
      engine: "Web Speech API"
    };
  }

  speak(text) {
    if (!this.enabled) {
      return false;
    }

    if (typeof text !== "string" || !text.trim()) {
      return false;
    }

    return {
      text: text.trim(),
      language: this.language,
      status: "ready"
    };
  }

  stop() {
    return {
      status: "stopped"
    };
  }

  setLanguage(language) {
    this.language = language;
    return this.language;
  }
}

module.exports = new VoiceManager();
