class VideoManager {
  constructor() {
    this.status = "inactive";
    this.provider = "WebRTC";
  }

  getStatus() {
    return {
      status: this.status,
      provider: this.provider,
      available: true
    };
  }

  startCall() {
    if (this.status === "active") {
      return {
        success: false,
        message: "Un appel est déjà en cours."
      };
    }

    this.status = "active";

    return {
      success: true,
      message: "Session vidéo initialisée."
    };
  }

  endCall() {
    this.status = "inactive";

    return {
      success: true,
      message: "Appel terminé."
    };
  }
}

module.exports = new VideoManager();
