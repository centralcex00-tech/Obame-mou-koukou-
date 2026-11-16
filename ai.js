const https = require("https");

function appelerIA(url, apiKey, modele, message) {
return new Promise((resolve, reject) => {
const donnees = JSON.stringify({
model: modele,
messages: [
{
role: "user",
content: message
}
]
});

const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${apiKey}`,
    "Content-Length": Buffer.byteLength(donnees)
  }
};

const requete = https.request(url, options, (reponse) => {
  let resultat = "";

  reponse.on("data", (partie) => {
    resultat += partie;
  });

  reponse.on("end", () => {
    try {
      const json = JSON.parse(resultat);

      if (json.error) {
        return reject(new Error(json.error.message));
      }

      resolve(json.choices[0].message.content);
    } catch (erreur) {
      reject(erreur);
    }
  });
});

requete.on("error", reject);
requete.write(donnees);
requete.end();

});
}

async function demanderChatGPT(message) {
return appelerIA(
"https://api.openai.com/v1/chat/completions",
process.env.OPENAI_API_KEY,
"gpt-4o-mini",
message
);
}

async function demanderGrok(message) {
return appelerIA(
"https://api.x.ai/v1/chat/completions",
process.env.XAI_API_KEY,
"grok-3-mini",
message
);
}

module.exports = {
demanderChatGPT,
demanderGrok
};
