// OBAME MOUÉKOUKOU
// Gestion de l'assistant intelligent

const AI = {
  name: "OBAME MOUÉKOUKOU",
  version: "1.0.0",

  async chat(message) {
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erreur IA");
      }

      return data.reply;

    } catch (error) {
      console.error(error);
      return "Une erreur est survenue. Réessaie.";
    }
  },

  speak(text) {
    if (!("speechSynthesis" in window)) {
      return;
    }

    speechSynthesis.cancel();

    const voice = new SpeechSynthesisUtterance(text);
    voice.lang = "fr-FR";

    speechSynthesis.speak(voice);
  },

  listen(callback) {
    const Recognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!Recognition) {
      alert("La reconnaissance vocale n'est pas disponible.");
      return;
    }

    const recognition = new Recognition();
    recognition.lang = "fr-FR";

    recognition.onresult = event => {
      callback(event.results[0][0].transcript);
    };

    recognition.start();
  }
};

window.OBAME_AI = AI;
