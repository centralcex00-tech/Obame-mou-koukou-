class VoiceManager {
  constructor() {
    this.language = "fr-FR";
  }

  getStatus() {
    return {
      recognition: true,
      synthesis: true,
      language: this.language
    };
  }

  getConfiguration() {
    return {
      input: "speech",
      output: "audio",
      language: this.language
    };
  }
}

module.exports = new VoiceManager();
