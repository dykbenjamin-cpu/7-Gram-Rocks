// =======================
// RESPONSES
// =======================

const normalResponses = [
  "Maybe. Maybe not.",
  "The answer lies in silence.",
  "It could be anything really.",
  "Time will tell.",
  "Signs point to... something.",
  "Better not ask right now.",
  "The universe is unclear.",
  "Ask again later.",
  "It depends on perspective.",
  "Chances are equal either way.",
  "That's... complicated.",
  "Only you can answer that.",
  "The signs are mixed.",
  "Outlook uncertain.",
  "Your guess is as good as mine."
];

const darkResponses = [
  "She tested you. You failed.",
  "You existed incorrectly.",
  "It's not about today. It's about the pattern.",
  "You showed weakness.",
  "You forgot her dream from 2014.",
  "You tried to win.",
  "You felt safe.",
  "Everything you did was wrong.",
  "Your presence is the problem.",
  "She remembers what you don't.",
  "You prioritized yourself.",
  "You'll never understand.",
  "The damage is permanent.",
  "You always miss the point.",
  "She's keeping score."
];

// Relevant responses based on question keywords
const normalRelevant = {
  communication: [
    "It's what you didn't say.",
    "Your tone matters more.",
    "Listen to the subtext.",
    "It's about how you said it."
  ],
  actions: [
    "Actions speak louder.",
    "It's something you did.",
    "What you did next matters.",
    "The action, not the intent."
  ],
  emotions: [
    "It's about the feeling.",
    "Emotions don't need logic.",
    "It's deeper than words.",
    "The heart knows."
  ],
  memory: [
    "Something from the past.",
    "You forgot something.",
    "It connects to before.",
    "History repeats."
  ],
  love: [
    "It's always about care.",
    "Show, don't tell.",
    "Love is in the details.",
    "Effort shows love."
  ],
  forgiveness: [
    "Time helps, but slowly.",
    "Sorry isn't enough.",
    "Redemption takes effort.",
    "Trust must be rebuilt."
  ]
};

const darkRelevant = {
  communication: [
    "You said the wrong thing.",
    "Your words hurt more than you know.",
    "You never listen anyway.",
    "Silence would've been better."
  ],
  actions: [
    "You chose wrong.",
    "Your actions betrayed you.",
    "You proved her right.",
    "You did exactly what she feared."
  ],
  emotions: [
    "You don't deserve her feelings.",
    "Your emotions don't matter.",
    "She feels nothing for you.",
    "Emotions are her weapon now."
  ],
  memory: [
    "You erased what matters to her.",
    "The past owns you now.",
    "She'll never forget.",
    "You're doomed to repeat it."
  ],
  love: [
    "You don't know what love is.",
    "Love died when you weren't looking.",
    "You destroyed it yourself.",
    "She stopped loving you."
  ],
  forgiveness: [
    "You don't deserve forgiveness.",
    "She'll never forgive you.",
    "The bridge is burned.",
    "Some mistakes are permanent."
  ]
};

let lastAnswer = "";

// =======================
// QUESTION ANALYSIS
// =======================

function analyzeQuestion(question) {
  const lowerQuestion = question.toLowerCase();
  
  const keywords = {
    communication: /say|tell|talk|speak|listen|talk|word|explain|discuss|conversation|heard/i,
    actions: /do|did|action|behav|choose|chose|decision|made|forgot|remember|show/i,
    emotions: /feel|emotion|care|love|heart|sense|know|understand/i,
    memory: /remember|forget|past|before|when|then|last|always|used to|yesterday/i,
    love: /love|care|cherish|adore|affection|romance|relationship|commitment/i,
    forgiveness: /forgive|sorry|apologize|excuse|pardon|redeem|wrong|mistake/i
  };
  
  // Check which category the question falls into
  for (const [category, regex] of Object.entries(keywords)) {
    if (regex.test(lowerQuestion)) {
      return category;
    }
  }
  
  return null; // No specific category matched
}

// =======================
// GET RELEVANT RESPONSE
// =======================

function getRelevantResponse(question, isDarkMode) {
  const category = analyzeQuestion(question);
  const relevantMap = isDarkMode ? darkRelevant : normalRelevant;
  
  if (category && relevantMap[category]) {
    const categoryResponses = relevantMap[category];
    return categoryResponses[Math.floor(Math.random() * categoryResponses.length)];
  }
  
  // Fall back to random response if no category matched
  const fallbackResponses = isDarkMode ? darkResponses : normalResponses;
  return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
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
  const questionEl = document.getElementById("question");
  const darkMode = document.getElementById("darkModeToggle").checked;
  const question = questionEl.value.trim();

  // Restart shake animation
  orb.classList.remove("shake");
  void orb.offsetWidth;
  orb.classList.add("shake");

  // Get relevant response based on question content
  lastAnswer = question ? getRelevantResponse(question, darkMode) : (darkMode ? darkResponses[0] : normalResponses[0]);

  // Dramatic delay
  setTimeout(() => {
    answerEl.innerText = lastAnswer;
  }, 300);
}

// =======================
// SHARE FUNCTION
// =======================

function shareResult() {
  if (!lastAnswer) {
    alert("Consult the orb first.");
    return;
  }

  const shareText = `🎱 Why Is She Mad?\n\n"${lastAnswer}"`;

  if (navigator.share) {
    navigator.share({
      title: "Why Is She Mad?",
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
