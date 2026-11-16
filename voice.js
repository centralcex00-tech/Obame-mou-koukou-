function configurerVoix() {
const reconnaissance =
window.SpeechRecognition ||
window.webkitSpeechRecognition;

if (!reconnaissance) {
alert("La reconnaissance vocale n'est pas disponible sur ce navigateur.");
return null;
}

const micro = new reconnaissance();

micro.lang = "fr-FR";
micro.continuous = false;
micro.interimResults = false;

return micro;
}

function ecouterUtilisateur(callback) {
const micro = configurerVoix();

if (!micro) return;

micro.onresult = (event) => {
const texte =
event.results[0][0].transcript;

callback(texte);

};

micro.onerror = (event) => {
console.error("Erreur du microphone :", event.error);
};

micro.start();
}

function parler(texte) {
if (!("speechSynthesis" in window)) {
alert("La lecture vocale n'est pas disponible.");
return;
}

window.speechSynthesis.cancel();

const message = new SpeechSynthesisUtterance(texte);

message.lang = "fr-FR";
message.rate = 1;
message.pitch = 1;

window.speechSynthesis.speak(message);
}

module.exports = {
ecouterUtilisateur,
parler
};
