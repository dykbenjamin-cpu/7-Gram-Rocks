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
  "Your guess is as good as mine.",
  "Ask the universe, not me.",
  "The future is unwritten.",
  "Seven times yes, seven times no.",
  "Neither here nor there.",
  "The answer shifts with the wind.",
  "Perhaps in another lifetime.",
  "That depends on what you mean.",
  "Perception is reality.",
  "The truth lies between.",
  "Ask again when the stars align.",
  "It's all relative, really.",
  "Who can say?",
  "The answer hides in the question.",
  "Consider the opposite.",
  "Both and neither.",
  "The path diverges ahead.",
  "Timing is everything.",
  "What you see is what you get.",
  "The answer exists in all possibilities.",
  "Reality bends for the willing.",
  "It depends on your truth.",
  "The universe is ambivalent.",
  "Sometimes yes is no.",
  "The answer you seek seeks you.",
  "Entropy whispers softly.",
  "The answer waits in the silence.",
  "All things considered... uncertainty.",
  "The future holds many doors.",
  "Your perspective shapes the answer.",
  "The ancient texts are unclear.",
  "It exists in the gray.",
  "The universe shrugs.",
  "Ask the question differently.",
  "That answer died with the old moon.",
  "The threads of fate are tangled."
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
  "She's keeping score.",
  "You betrayed her trust.",
  "The wrong choices compound.",
  "You're repeating the pattern.",
  "She gave you chances. You wasted them.",
  "Your apologies mean nothing.",
  "You knew better.",
  "This is exactly what she feared.",
  "You proved her right about you.",
  "The hurt goes deeper than you know.",
  "You're incapable of change.",
  "She's done trying.",
  "Your words are hollow.",
  "You did it again, didn't you?",
  "She deserves better.",
  "The clock is running out.",
  "You had one job.",
  "Your selfishness speaks volumes.",
  "Time doesn't heal this.",
  "You're the villain in her story.",
  "She's moving on without you.",
  "Your love was never enough.",
  "The foundation is cracked.",
  "You broke something irreplaceable.",
  "She sees through your lies.",
  "You're too late.",
  "The distance grows every day.",
  "You chose wrong.",
  "Her love has limits. You found them.",
  "You're the pattern she hates.",
  "Redemption isn't possible.",
  "You made your bed.",
  "She's with someone better now.",
  "Your actions speak louder than silence.",
  "The end is written.",
  "You'll regret this forever."
];

// Relevant responses based on question keywords
const normalRelevant = {
  communication: [
    "It's what you didn't say.",
    "Your tone matters more.",
    "Listen to the subtext.",
    "It's about how you said it.",
    "The words were wrong.",
    "Silence would've helped.",
    "It's not what you said, it's when.",
    "Communication fails at the edges.",
    "She heard something else.",
    "Your message got lost."
  ],
  actions: [
    "Actions speak louder.",
    "It's something you did.",
    "What you did next matters.",
    "The action, not the intent.",
    "Choices have consequences.",
    "It's what you chose.",
    "The deed defines you.",
    "Actions are permanent.",
    "You'll know when you see it.",
    "The past action echoes."
  ],
  emotions: [
    "It's about the feeling.",
    "Emotions don't need logic.",
    "It's deeper than words.",
    "The heart knows.",
    "Feelings are valid regardless.",
    "Emotions trump reason.",
    "The feeling is mutual.",
    "What she feels matters most.",
    "Emotions are the truth.",
    "The heart has spoken."
  ],
  memory: [
    "Something from the past.",
    "You forgot something.",
    "It connects to before.",
    "History repeats.",
    "The past isn't past.",
    "Memory is the witness.",
    "You're forgetting the timeline.",
    "It all connects back.",
    "The past haunts.",
    "She remembers what you don't."
  ],
  love: [
    "It's always about care.",
    "Show, don't tell.",
    "Love is in the details.",
    "Effort shows love.",
    "Love requires sacrifice.",
    "Care manifests in actions.",
    "Love isn't words.",
    "Devotion shows.",
    "Love is proven, not stated.",
    "She measures love by deeds."
  ],
  forgiveness: [
    "Time helps, but slowly.",
    "Sorry isn't enough.",
    "Redemption takes effort.",
    "Trust must be rebuilt.",
    "Forgiveness is earned.",
    "Words mean nothing now.",
    "Actions redeem, not apologies.",
    "She's not ready.",
    "Forgiveness has no timeline.",
    "You must prove yourself again."
  ]
};

const darkRelevant = {
  communication: [
    "You said the wrong thing.",
    "Your words hurt more than you know.",
    "You never listen anyway.",
    "Silence would've been better.",
    "She heard your lies.",
    "You don't communicate, you excuse.",
    "Your words are cheap.",
    "She's tired of hearing it.",
    "You talked too much.",
    "Your explanations are pathetic."
  ],
  actions: [
    "You chose wrong.",
    "Your actions betrayed you.",
    "You proved her right.",
    "You did exactly what she feared.",
    "Your choices define your character.",
    "You knew better and did it anyway.",
    "The deed is unforgivable.",
    "You made the wrong call.",
    "Your actions revealed the truth.",
    "She knew what you'd do."
  ],
  emotions: [
    "You don't deserve her feelings.",
    "Your emotions don't matter.",
    "She feels nothing for you.",
    "Emotions are her weapon now.",
    "She's numb to you.",
    "Your feelings are irrelevant.",
    "She stopped caring.",
    "Emotions died long ago.",
    "You're dead to her feelings.",
    "Her indifference is your answer."
  ],
  memory: [
    "You erased what matters to her.",
    "The past owns you now.",
    "She'll never forget.",
    "You're doomed to repeat it.",
    "The past will destroy you.",
    "Memory is her evidence.",
    "What you did is engraved.",
    "The timeline proves you wrong.",
    "She catalogs every failure.",
    "Your history condemns you."
  ],
  love: [
    "You don't know what love is.",
    "Love died when you weren't looking.",
    "You destroyed it yourself.",
    "She stopped loving you.",
    "Your love was worthless.",
    "Love cannot survive your treatment.",
    "You murdered the relationship.",
    "She loves someone else now.",
    "Love requires effort. You failed.",
    "Your love was a lie."
  ],
  forgiveness: [
    "You don't deserve forgiveness.",
    "She'll never forgive you.",
    "The bridge is burned.",
    "Some mistakes are permanent.",
    "Forgiveness is off the table.",
    "She won't forget this.",
    "You've used up your chances.",
    "Redemption doesn't apply to you.",
    "What's done cannot be undone.",
    "You crossed the line."
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
