const reflections = [
  "Le passé ne peut être changé, mais il peut être compris.",
  "Ce que tu évites aujourd’hui façonne ton demain.",
  "La clarté vient souvent après l’acceptation.",
  "Grandir, c’est choisir même dans l’incertitude.",
  "Le silence est parfois une réponse.",
  "Ce que tu nourris en toi grandit.",
  "La vie ne punit pas, elle enseigne.",
  "Chaque doute est une porte vers la connaissance.",
  "Avancer lentement vaut mieux que rester immobile.",
  "La vérité intérieure demande du courage."
];

function newReflection() {
  const random = Math.floor(Math.random() * reflections.length);
  document.getElementById("reflection").innerText = reflections[random];
}

function analyzeThought() {
  const input = document.getElementById("userInput").value.trim();
  const response = document.getElementById("response");

  if (input === "") {
    response.innerText = "Exprime d’abord ce que tu ressens.";
    return;
  }

  response.innerText =
    "Ce que tu ressens mérite d’être observé sans jugement. Prends du recul, identifie ce qui dépend de toi, et avance avec lucidité.";
}
