const fs = require("fs");
const path = require("path");

const dossier = path.join(__dirname, "data");
const fichier = path.join(dossier, "conversations.json");

function preparerMemoire() {
if (!fs.existsSync(dossier)) {
fs.mkdirSync(dossier, { recursive: true });
}

if (!fs.existsSync(fichier)) {
fs.writeFileSync(fichier, JSON.stringify([], null, 2));
}
}

function lireConversations() {
preparerMemoire();

try {
return JSON.parse(fs.readFileSync(fichier, "utf8"));
} catch (erreur) {
return [];
}
}

function enregistrerConversation(conversation) {
const historique = lireConversations();

historique.push({
...conversation,
date: new Date().toISOString()
});

fs.writeFileSync(
fichier,
JSON.stringify(historique, null, 2)
);
}

function rechercherConversation(mot) {
const historique = lireConversations();

return historique.filter((conversation) =>
JSON.stringify(conversation)
.toLowerCase()
.includes(mot.toLowerCase())
);
}

module.exports = {
lireConversations,
enregistrerConversation,
rechercherConversation
};
