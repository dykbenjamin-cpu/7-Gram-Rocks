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
  "The threads of fate are tangled.",
  "Perhaps, perhaps not.",
  "The answer eludes us all.",
  "Nothing is certain but uncertainty.",
  "The way is obscured.",
  "Light and shadow dance together.",
  "The answer rests in ambiguity.",
  "What is and isn't merge.",
  "The truth shifts like sand.",
  "Ask tomorrow, get a different answer.",
  "The universe remains silent.",
  "Your question creates its own answer.",
  "Nothing is fixed, all flows.",
  "The answer breathes in shadows.",
  "Between yes and no lies everything.",
  "The future whispers, never speaks.",
  "Certainty is an illusion.",
  "The answer lives in the pause.",
  "Ask with a different heart.",
  "The universe offers no certainty.",
  "Your mind shapes the response.",
  "Nothing stands still long enough.",
  "The answer hides in plain sight.",
  "What you believe becomes true.",
  "The past, present, future blur.",
  "Answers dissolve under scrutiny.",
  "The truth wears many faces.",
  "Ask the stars, they're equally confused.",
  "The answer waits in the void.",
  "Perspective is the only truth.",
  "The path curves beyond sight.",
  "Questions are their own answers.",
  "The universe keeps its secrets.",
  "Nothing is ever black or white.",
  "The answer shifts with the seasons.",
  "Who knows what anything means?",
  "The truth is in the telling.",
  "Perhaps when you're older.",
  "The answer lives between words.",
  "The universe is genuinely unsure.",
  "Your interpretation is valid.",
  "The answer hides in complexity.",
  "All answers contain their opposites.",
  "The truth wanders endlessly.",
  "The answer you seek is elsewhere.",
  "Certainty is the real illusion.",
  "The universe breathes in mystery.",
  "Ask again, the answer will change.",
  "What seems clear is not.",
  "The answer exists and doesn't.",
  "Truth is a matter of timing.",
  "The future remains beautifully unclear.",
  "Nothing is proven, all is possible.",
  "The answer dwells in the unsaid.",
  "Perspective alters destiny.",
  "The truth lives in the space between.",
  "Ask yourself, not the orb.",
  "The universe is less certain than you.",
  "Answers are temporary, questions permanent.",
  "The path forks into infinity.",
  "Nothing you assume is stable.",
  "The answer changes with the wind.",
  "Your mind is the only oracle.",
  "Clarity is never guaranteed.",
  "The answer breathes, like you.",
  "What seems final isn't.",
  "The universe withholds its answer.",
  "Ask with empty expectations.",
  "The truth is plural.",
  "Meaning dissolves under pressure.",
  "The answer you seek is within.",
  "The future keeps its counsel.",
  "All answers are incomplete.",
  "The universe remains neutral.",
  "Your question contains no answer.",
  "The truth is too complex.",
  "The answer drifts beyond reach.",
  "Certainty is only for the foolish.",
  "The universe is genuinely unclear.",
  "What you believe matters most.",
  "The answer lives in multiple truths.",
  "Ask differently next time.",
  "The truth wears a thousand masks.",
  "The answer you need isn't here.",
  "The universe reflects your doubt.",
  "Nothing is decided, all is fluid.",
  "The answer lies in acceptance.",
  "Perspective is destiny.",
  "The truth hides in the ordinary.",
  "Ask when you're ready to listen.",
  "The universe offers no comfort.",
  "Answers fade like morning mist.",
  "The path reveals itself slowly.",
  "Nothing stays true for long.",
  "The answer breathes with you.",
  "What seems absolute bends.",
  "The universe is mostly silence.",
  "Ask expecting contradiction.",
  "The truth is what we make it.",
  "Meaning is written by the reader.",
  "The answer you want isn't here.",
  "The future is magnificently unknowable.",
  "All certainties are delusions.",
  "The universe withholds judgment.",
  "Your question is its own answer."
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
  "You'll regret this forever.",
  "She tested you endlessly. You failed every time.",
  "You were the wrong choice.",
  "It all comes back to what you did.",
  "Your weakness is showing.",
  "She held onto hope. You killed it.",
  "You never tried hard enough.",
  "You demanded comfort when she needed strength.",
  "Every mistake adds up.",
  "Your presence alone is disappointing.",
  "You'll never know what she felt.",
  "You demanded so much for so little.",
  "The path forward was clear. You didn't see it.",
  "You can't fix what you broke.",
  "She gave everything. You gave crumbs.",
  "Your pattern is unbreakable.",
  "She warned you. You didn't listen.",
  "You had potential. You wasted it.",
  "This is what your choices led to.",
  "She was patient. You were careless.",
  "You traded her future for yours.",
  "The consequences are mounting.",
  "You thought you were clever. You were empty.",
  "She needed you. You weren't there.",
  "Your excuses are tired.",
  "She forgave you once. Never again.",
  "You're predictable in your failure.",
  "The hurt you caused echoes.",
  "You don't deserve her tears.",
  "She pulled away because of you.",
  "Your mistakes define you.",
  "She's counting down the minutes.",
  "The love is gone from her eyes.",
  "You created this distance.",
  "She's learning to live without you.",
  "Your presence feels like betrayal.",
  "The path back is blocked.",
  "You're the reason she cries.",
  "She's tired of your empty promises.",
  "Your chance has passed.",
  "The damage is beyond repair.",
  "You're exactly what she feared.",
  "She's become someone who doesn't love you.",
  "Your inadequacy is showing.",
  "The relationship dies a little more each day.",
  "You're the mistake she refuses to repeat.",
  "Your love was never real.",
  "She sees all your failures now.",
  "You tore it down brick by brick.",
  "The end started long ago.",
  "You're the ghost in her life.",
  "She's grieving what was never real.",
  "Your words have no power.",
  "She's moving toward anything that isn't you.",
  "You failed at the most important thing.",
  "The damage you did is permanent.",
  "You're not enough. You never were.",
  "She's learning to be happy without you.",
  "Your actions wrote the ending.",
  "The clock ran out years ago.",
  "You had everything. You threw it away.",
  "She's become strong despite you.",
  "Your weakness broke her.",
  "The future doesn't include you.",
  "You're the thing she's learned to live without.",
  "Your presence is a reminder of failure.",
  "She's moved past the pain you caused.",
  "You're not capable of the love she needs.",
  "The connection is severed.",
  "You made your choices. Live with them.",
  "She's no longer waiting for you.",
  "Your failures are her education.",
  "The love you lost is gone forever.",
  "You're the reason she doesn't trust.",
  "She's building a life without you.",
  "Your inadequacy was always obvious.",
  "The truth is you're not enough.",
  "You're barely a memory.",
  "She's moved onto better things.",
  "Your love suffocated rather than freed.",
  "The scar you left won't fade.",
  "You're exactly the kind of person she avoids.",
  "She's learned the truth about you.",
  "Your presence is just noise.",
  "The door has closed."
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
