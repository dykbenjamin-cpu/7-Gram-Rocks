// =======================
// RESPONSES
// =======================

const normalResponses = [
  "The answer lies in silence.",
  "Neither here nor there.",
  "The truth lies between.",
  "What you see is what you get.",
  "The answer exists in all possibilities.",
  "Sometimes yes is no.",
  "All things considered... uncertainty.",
  "Your perspective shapes the answer.",
  "It exists in the gray.",
  "The answer hides in the question.",
  "Both and neither.",
  "What you believe becomes true.",
  "Between yes and no lies everything.",
  "Certainty is an illusion.",
  "The answer lives in the pause.",
  "Nothing is ever black or white.",
  "Who knows what anything means?",
  "The truth is in the telling.",
  "The answer lives between words.",
  "Your interpretation is valid.",
  "All answers contain their opposites.",
  "What seems clear is not.",
  "The answer exists and doesn't.",
  "Truth is a matter of timing.",
  "Nothing is proven, all is possible.",
  "The answer dwells in the unsaid.",
  "Perspective alters destiny.",
  "The truth lives in the space between.",
  "What seems final isn't.",
  "Nothing is decided, all is fluid.",
  "The answer lies in acceptance.",
  "Perspective is destiny.",
  "Nothing stays true for long.",
  "What seems absolute bends.",
  "Ask expecting contradiction.",
  "The truth is what we make it.",
  "Meaning is written by the reader.",
  "The future is magnificently unknowable.",
  "All certainties are delusions.",
  "Your question creates its own answer.",
  "Nothing is fixed, all flows.",
  "The answer hides in plain sight.",
  "Questions are their own answers.",
  "The universe keeps its secrets.",
  "Perception is the only truth.",
  "The path curves beyond sight.",
  "It's all relative, really.",
  "Consider the opposite.",
  "The truth wears many faces.",
  "As above, so below.",
  "The answer breathes with you."
];

const darkResponses = [
  "The void speaks in riddles.",
  "Chaos whispers its secrets.",
  "Nothing is as it seems.",
  "Look deeper into the abyss.",
  "Reality fractures here.",
  "The shadows know the truth.",
  "Darkness reveals what light hides.",
  "Your fears take shape.",
  "The answer lies in chaos.",
  "Things fall apart at their center.",
  "The cosmic joke unfolds.",
  "Entropy has all the answers.",
  "What you dread is already true.",
  "The mirror shows what you deny.",
  "All certainty crumbles.",
  "The weight of years presses down.",
  "Nothing survives the void.",
  "Your hopes are illusions.",
  "The machine grinds ever on.",
  "Meaning dissolves in darkness.",
  "The truth is unkind.",
  "Endings come for everything.",
  "The debt always comes due.",
  "Silence screams your name.",
  "The pattern is inescapable.",
  "What's broken stays broken.",
  "The clock counts down.",
  "Your shadow knows better.",
  "The cost was always higher.",
  "Everything rots eventually.",
  "The dark sees all.",
  "Guilt is your constant companion.",
  "The wheel turns without mercy.",
  "Your choices echo into void.",
  "The answer was always no.",
  "Regret is all that lingers.",
  "The abyss gazes back.",
  "Time corrodes everything.",
  "What matters fades away.",
  "The truth tastes like ashes.",
  "Every step leads downward.",
  "The game was rigged.",
  "Your story ends badly.",
  "The price is too high.",
  "Nothing you do matters.",
  "The cycle repeats endlessly.",
  "Darkness is the only constant.",
  "What you built crumbles.",
  "The answer dwells in shadows.",
  "Your fate is already written."
];

let lastAnswer = "";

// =======================
// GET RANDOM RESPONSES
// =======================

function getRandomResponse() {
  const darkMode = document.getElementById("darkModeToggle").checked;
  const primaryResponses = darkMode ? darkResponses : normalResponses;
  const secondaryResponses = darkMode ? normalResponses : darkResponses;
  
  // 70% chance: single response
  // 25% chance: combine 2 responses
  // 5% chance: mix in opposite mode response for chaos
  const randomChance = Math.random();
  
  if (randomChance < 0.70) {
    // Single response
    return primaryResponses[Math.floor(Math.random() * primaryResponses.length)];
  } else if (randomChance < 0.95) {
    // Combine 2 responses
    const resp1 = primaryResponses[Math.floor(Math.random() * primaryResponses.length)];
    const resp2 = primaryResponses[Math.floor(Math.random() * primaryResponses.length)];
    return `${resp1}... ${resp2}`;
  } else {
    // Mix in opposite mode for chaos
    const resp1 = primaryResponses[Math.floor(Math.random() * primaryResponses.length)];
    const resp2 = secondaryResponses[Math.floor(Math.random() * secondaryResponses.length)];
    return `${resp1}... ${resp2}`;
  }
}

// =======================
// MODE SWITCHING
// =======================

function updateOrbMode() {
  const orb = document.getElementById("orb");
  const darkMode = document.getElementById("darkModeToggle").checked;

  orb.classList.remove("normal", "dark");
  orb.classList.add(darkMode ? "dark" : "normal");
}

// =======================
// MAIN SHAKE FUNCTION
// =======================

function shakeOrb() {
  updateOrbMode();

  const orb = document.getElementById("orb");
  const answerEl = document.getElementById("answer");

  // Restart shake animation
  orb.classList.remove("shake");
  void orb.offsetWidth;
  orb.classList.add("shake");

  // Get randomized response
  lastAnswer = getRandomResponse();

  // Random delay between 200-500ms for variation
  const delay = 200 + Math.random() * 300;
  setTimeout(() => {
    answerEl.innerText = lastAnswer;
  }, delay);
}

// =======================
// SHARE FUNCTION
// =======================

function shareResult() {
  if (!lastAnswer) {
    alert("Consult the orb first.");
    return;
  }

  const shareText = `🎱 Ask Me a Question\n\n"${lastAnswer}"`;}

  if (navigator.share) {
    navigator.share({
      title: "Ask Me a Question",
      text: shareText,
    }).catch(() => {});
  } else {
    navigator.clipboard.writeText(shareText)
      .then(() => alert("Result copied to clipboard."))
      .catch(() => alert("Could not copy to clipboard."));
  }
}

// =======================
// EVENT LISTENER
// =======================

document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("darkModeToggle")
    .addEventListener("change", updateOrbMode);

  // Set default mode on load
  updateOrbMode();
  
  // Allow Enter key to shake the orb
  document
    .getElementById("question")
    .addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        shakeOrb();
      }
    });
});
