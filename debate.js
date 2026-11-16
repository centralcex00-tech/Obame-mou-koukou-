const {
demanderChatGPT,
demanderGrok
} = require("./ai");

async function lancerDebat(sujet) {
const historique = [];

try {
// Première intervention de ChatGPT
const avisChatGPT = await demanderChatGPT(
"Tu participes à un débat entre intelligences artificielles. Donne ton avis sur : " + sujet
);

historique.push({
  ia: "ChatGPT",
  message: avisChatGPT
});

// Analyse de Grok
const avisGrok = await demanderGrok(
  "Analyse et critique cet avis sur le sujet : " +
  sujet +
  "\n\nAvis de ChatGPT : " +
  avisChatGPT
);

historique.push({
  ia: "Grok",
  message: avisGrok
});

// Réponse de ChatGPT
const reponseChatGPT = await demanderChatGPT(
  "Réponds à la critique de Grok : " + avisGrok
);

historique.push({
  ia: "ChatGPT",
  message: reponseChatGPT
});

return historique;

} catch (erreur) {
throw new Error(
"Le débat n'a pas pu être terminé : " + erreur.message
);
}
}

module.exports = { lancerDebat };
