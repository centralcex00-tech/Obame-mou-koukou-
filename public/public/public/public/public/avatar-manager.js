class AvatarManager {
  constructor() {
    this.avatar = {
      name: "OBAME",
      status: "idle",
      animation: "breathing",
      expressions: [
        "happy",
        "thinking",
        "speaking",
        "listening",
        "surprised"
      ]
    };
  }

  getAvatar() {
    return this.avatar;
  }

  setStatus(status) {
    const allowed = [
      "idle",
      "speaking",
      "listening",
      "thinking"
    ];

    if (!allowed.includes(status)) {
      throw new Error("Statut inconnu.");
    }

    this.avatar.status = status;

    return this.avatar;
  }

  setExpression(expression) {
    if (!this.avatar.expressions.includes(expression)) {
      throw new Error("Expression inconnue.");
    }

    this.avatar.expression = expression;

    return this.avatar;
  }
}

module.exports = new AvatarManager();
