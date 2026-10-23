const canvas = document.getElementById("game");
const context = canvas.getContext("2d");
const playerImage = new Image();
playerImage.src = "growtopia.png";
const scoreElement = document.getElementById("score");
const collectedElement = document.getElementById("collected");
const lifeDisplay = document.getElementById("life-display");
const shopDialog = document.getElementById("shop-dialog");
const shopOpenButton = document.getElementById("open-shop");
const shopButtonLabel = document.getElementById("shop-button-label");
const shopBalanceElement = document.getElementById("shop-balance");
const shopFeedbackElement = document.getElementById("shop-feedback");
const flightStatusElement = document.getElementById("flight-status");
const speedLevelElement = document.getElementById("speed-level");
const statusElement = document.getElementById("game-status");
const quizDialog = document.getElementById("quiz-dialog");
const questionTitle = document.getElementById("question-title");
const questionCount = document.getElementById("question-count");
const answerList = document.getElementById("answer-list");
const answerFeedback = document.getElementById("answer-feedback");
const levelElement = document.getElementById("level-number");
const gameOverDialog = document.getElementById("game-over-dialog");
const finalScoreElement = document.getElementById("final-score");

const questions = [
  {
    question: "Mis on Eesti pealinn?",
    answers: ["Tartu", "Tallinn", "Pärnu"],
    correct: 1,
  },
  {
    question: "Mitu külge on kuusnurgal?",
    answers: ["Kuus", "Viis", "Kaheksa"],
    correct: 0,
  },
  {
    question: "Milline planeet on Päikesele kõige lähemal?",
    answers: ["Marss", "Veenus", "Merkuur"],
    correct: 2,
  },
  {
    question: "Kui palju on 7 × 8?",
    answers: ["54", "56", "64"],
    correct: 1,
  },
  {
    question: "Milline neist on imetaja?",
    answers: ["Delfiin", "Forell", "Konn"],
    correct: 0,
  },
  {
    question: "Mitu kuud on aastas?",
    answers: ["10", "12", "14"],
    correct: 1,
  },
  {
    question: "Mis on vee keemiline valem?",
    answers: ["CO2", "O2", "H2O"],
    correct: 2,
  },
  {
    question: "Mitu külge on kolmnurgal?",
    answers: ["Kolm", "Neli", "Viis"],
    correct: 0,
  },
  {
    question: "Mis ilmakaare vastand on põhi?",
    answers: ["Lääs", "Lõuna", "Ida"],
    correct: 1,
  },
  {
    question: "Milline on Päikesesüsteemi suurim planeet?",
    answers: ["Jupiter", "Maa", "Saturn"],
    correct: 0,
  },
  {
    question: "Mitu minutit on ühes tunnis?",
    answers: ["50", "60", "100"],
    correct: 1,
  },
  {
    question: "Mitu sentimeetrit on ühes meetris?",
    answers: ["10", "100", "1000"],
    correct: 1,
  },
  {
    question: "Mida vajavad taimed fotosünteesiks?",
    answers: ["Päikesevalgust", "Liiva", "Soola"],
    correct: 0,
  },
  {
    question: "Mis on Soome pealinn?",
    answers: ["Stockholm", "Helsingi", "Oslo"],
    correct: 1,
  },
  {
    question: "Kui palju on 9 + 6?",
    answers: ["14", "15", "16"],
    correct: 1,
  },
  {
    question: "Mitu värvi on tavaliselt vikerkaarel?",
    answers: ["Viis", "Kuus", "Seitse"],
    correct: 2,
  },
  {
    question: "Milline lind oskab tagurpidi lennata?",
    answers: ["Koolibri", "Kajakas", "Kurg"],
    correct: 0,
  },
  {
    question: "Milline on aasta esimene kuu?",
    answers: ["Märts", "Jaanuar", "Juuni"],
    correct: 1,
  },
  {
    question: "Mis värvi on Eesti lipu ülemine triip?",
    answers: ["Sinine", "Must", "Valge"],
    correct: 0,
  },
  {
    question: "Kui palju on 2 × 5?",
    answers: ["10", "12", "15"],
    correct: 0,
  },
  {
    question: "Milline neist on ookean?",
    answers: ["Läänemeri", "Vaikne ookean", "Peipsi järv"],
    correct: 1,
  },
  {
    question: "Milline loom on tuntud oma triipude poolest?",
    answers: ["Sebra", "Kaelkirjak", "Panda"],
    correct: 0,
  },
  {
    question: "Mitu jalga on ämblikul?",
    answers: ["Kuus", "Kaheksa", "Kümme"],
    correct: 1,
  },
];

const levelTwoQuestions = [
  { question: "Kui palju on 144 ÷ 12?", answers: ["11", "12", "14"], correct: 1 },
  { question: "Kui palju on 15% arvust 200?", answers: ["25", "30", "35"], correct: 1 },
  { question: "Mitu külge on kaheksanurgal?", answers: ["Kuus", "Kaheksa", "Kümme"], correct: 1 },
  { question: "Milline on Eesti pikim jõgi?", answers: ["Võhandu", "Emajõgi", "Pärnu jõgi"], correct: 0 },
  { question: "Milline ookean on pindalalt suurim?", answers: ["Atlandi ookean", "India ookean", "Vaikne ookean"], correct: 2 },
];

const levelThreeQuestions = [
  { question: "Mis on arvu 121 ruutjuur?", answers: ["10", "11", "12"], correct: 1 },
  { question: "Kui palju on 3 astmes 3?", answers: ["9", "18", "27"], correct: 2 },
  { question: "Millise kümnendmurruna kirjutatakse 3/4?", answers: ["0,25", "0,5", "0,75"], correct: 2 },
  { question: "Milline on Euroopa pikim jõgi?", answers: ["Rein", "Volga", "Doonau"], correct: 1 },
  { question: "Millist gaasi taimed fotosünteesis õhust seovad?", answers: ["Hapnikku", "Lämmastikku", "Süsihappegaasi"], correct: 2 },
];

const levelFourQuestions = [
  { question: "Kui 2x + 5 = 17, siis kui suur on x?", answers: ["6", "7", "11"], correct: 0 },
  { question: "Kui suur on kolmnurga sisenurkade summa?", answers: ["90°", "180°", "360°"], correct: 1 },
  { question: "Kui palju on 2 astmes 5?", answers: ["16", "25", "32"], correct: 2 },
  { question: "Auto läbib 120 km kahe tunniga. Mis on keskmine kiirus?", answers: ["50 km/h", "60 km/h", "70 km/h"], correct: 1 },
  { question: "Milline harilik murd võrdub arvuga 1,25?", answers: ["4/5", "5/4", "3/2"], correct: 1 },
];

const levelFiveQuestions = [
  { question: "Kui palju on 0,6 × 250?", answers: ["125", "150", "175"], correct: 1 },
  { question: "Kui palju on 3/8 arvust 64?", answers: ["18", "24", "32"], correct: 1 },
  { question: "Millise elemendi tähis on Fe?", answers: ["Vask", "Raud", "Hõbe"], correct: 1 },
  { question: "Ristküliku küljed on 8 cm ja 5 cm. Mis on ümbermõõt?", answers: ["13 cm", "26 cm", "40 cm"], correct: 1 },
  { question: "Kui 3x − 7 = 20, siis kui suur on x?", answers: ["7", "9", "11"], correct: 1 },
];

const questionSets = [null, questions, levelTwoQuestions, levelThreeQuestions, levelFourQuestions, levelFiveQuestions];

const platforms = [
  { x: 0, y: 480, width: 380, height: 80, ground: true },
  { x: 220, y: 390, width: 145, height: 18 },
  { x: 480, y: 480, width: 420, height: 80, ground: true },
  { x: 475, y: 340, width: 140, height: 18, motion: { x: 34, y: 0, speed: 0.0011, phase: 0 } },
  { x: 730, y: 405, width: 145, height: 18, motion: { x: 0, y: 23, speed: 0.0013, phase: 1.4 } },
  { x: 1000, y: 480, width: 390, height: 80, ground: true },
  { x: 940, y: 350, width: 140, height: 18, motion: { x: 38, y: 0, speed: 0.001, phase: 2.2 } },
  { x: 1130, y: 395, width: 140, height: 18 },
  { x: 1490, y: 480, width: 380, height: 80, ground: true },
  { x: 1350, y: 330, width: 140, height: 18, motion: { x: 0, y: 26, speed: 0.0012, phase: 3.1 } },
  { x: 1580, y: 400, width: 150, height: 18, motion: { x: 33, y: 0, speed: 0.0014, phase: 0.8 } },
  { x: 1970, y: 480, width: 390, height: 80, ground: true },
  { x: 1790, y: 345, width: 140, height: 18 },
  { x: 2010, y: 395, width: 140, height: 18 },
  { x: 2200, y: 330, width: 140, height: 18, motion: { x: 0, y: 20, speed: 0.0011, phase: 4.2 } },
];
const originalPlatformWidths = platforms.map((platform) => platform.width);
const originalPlatformPositions = platforms.map((platform) => ({ x: platform.x, y: platform.y }));

const tokens = [
  { id: 0, x: 280, y: 350, question: null },
  { id: 1, x: 535, y: 300, question: null },
  { id: 2, x: 1010, y: 310, question: null },
  { id: 3, x: 1640, y: 360, question: null },
  { id: 4, x: 2240, y: 290, question: null },
];
const animals = [];
const birds = [];
const birdDroppings = [];

const worldWidth = 2360;
const floorY = 480;
const levelThemes = [
  { sky: "#75d5e8", hills: "#65c3bd", tree: "#3c9e78", leafLight: "#80ca71", trunk: "#765642", grass: "#58a653", grassLight: "#83cf61", soil: "#a7684b", soilLine: "#89553e", soilLight: "#d38a5a" },
  { sky: "#b6a8ed", hills: "#8e7dcc", tree: "#4b866c", leafLight: "#9fd27c", trunk: "#655049", grass: "#668d5c", grassLight: "#9bc76b", soil: "#8063a2", soilLine: "#664b83", soilLight: "#ad85c0" },
  { sky: "#f6c47d", hills: "#e99b70", tree: "#5c965b", leafLight: "#b8ce69", trunk: "#80513b", grass: "#719845", grassLight: "#b8ce69", soil: "#a85c45", soilLine: "#824737", soilLight: "#d98956" },
  { sky: "#7bc5df", hills: "#689fc2", tree: "#42776a", leafLight: "#84b773", trunk: "#5e5148", grass: "#557d67", grassLight: "#91bd7b", soil: "#647184", soilLine: "#4c596e", soilLight: "#8997a4" },
];
const animalStyles = [
  { body: "#de7851", light: "#ffd0ad", accent: "#8e493c" },
  { body: "#7e7bc5", light: "#e1d8ff", accent: "#4f4a92" },
  { body: "#5a9c61", light: "#d8e8ae", accent: "#376d49" },
  { body: "#d3a641", light: "#fff0ba", accent: "#91642d" },
  { body: "#4b9eaa", light: "#d1f4e9", accent: "#286777" },
  { body: "#da668c", light: "#ffe0ec", accent: "#994563" },
  { body: "#77a843", light: "#e7f49c", accent: "#4d702d" },
  { body: "#dd7755", light: "#ffe4a1", accent: "#8b473e" },
];
const playerStart = { x: 55, y: floorY - 44 };
const player = {
  x: playerStart.x,
  y: playerStart.y,
  width: 32,
  height: 44,
  velocityX: 0,
  velocityY: 0,
  grounded: true,
  groundedPlatform: null,
  facing: 1,
};
const pressedKeys = new Set();
const pressedControls = new Set();
const collectedTokens = new Set();
const startingLives = 3;

let score = 0;
let maxLives = startingLives;
let lives = startingLives;
let speedBoosts = 0;
let jumpPressed = false;
let activeToken = null;
let dismissedTokenId = null;
let checkpoint = { x: playerStart.x, y: playerStart.y };
let cameraX = 0;
let gameFinished = false;
let level = 1;
let questionDeck = [];
let lastQuestionIndex = -1;
let levelTimer = null;
let questionDeckLevel = 0;
let invulnerableUntil = 0;
let flightUntil = 0;
let queuedFlightSeconds = 0;
let lastFrame = 0;

function updateScore() {
  scoreElement.textContent = String(score);
  collectedElement.textContent = String(collectedTokens.size);
  lifeDisplay.setAttribute("aria-label", `Elusid alles: ${lives} / ${maxLives}`);
  while (lifeDisplay.children.length < maxLives) {
    const heart = document.createElement("span");
    heart.className = "life-heart";
    heart.setAttribute("aria-hidden", "true");
    heart.textContent = "♥";
    lifeDisplay.append(heart);
  }
  while (lifeDisplay.children.length > maxLives) {
    lifeDisplay.lastElementChild.remove();
  }
  Array.from(lifeDisplay.children).forEach((heart, index) => {
    heart.classList.toggle("is-lost", index >= lives);
  });
  shopBalanceElement.textContent = String(score);
  speedLevelElement.textContent = `${(1 + speedBoosts * 0.5).toFixed(1).replace(".", ",")}×`;
}

function endGame(message) {
  gameFinished = true;
  player.velocityX = 0;
  player.velocityY = 0;
  finalScoreElement.textContent = String(score);
  statusElement.textContent = message;
  if (quizDialog.open) quizDialog.close();
  if (shopDialog.open) shopDialog.close();
  gameOverDialog.showModal();
}

function loseLife(message) {
  lives = Math.max(0, lives - 1);
  updateScore();

  if (lives === 0) {
    endGame(`${message} Elud said otsas. Mäng läbi.`);
    return true;
  }

  statusElement.textContent = `${message} Kaotasid elu. Elusid alles: ${lives}.`;
  invulnerableUntil = performance.now() + 1400;
  return false;
}

function buyFlight() {
  if (level % 2 === 0) return;
  if (score < 300) {
    shopFeedbackElement.textContent = "Lendamiseks on vaja 300 punkti.";
    return;
  }

  score -= 300;
  queuedFlightSeconds += 3;
  updateScore();
  shopFeedbackElement.textContent = "Ostetud! Lendamine algab poe sulgemisel.";
}

function buyLife() {
  if (level % 2 === 0) return;
  if (score < 500) {
    shopFeedbackElement.textContent = "Lisaelu jaoks on vaja 500 punkti.";
    return;
  }

  score -= 500;
  maxLives += 1;
  lives += 1;
  updateScore();
  shopFeedbackElement.textContent = "Lisaelu ostetud! Üks süda lisati.";
}

function buySpeed() {
  if (level % 2 === 0) return;
  if (score < 300) {
    shopFeedbackElement.textContent = "Kiiruse ostmiseks on vaja 300 punkti.";
    return;
  }

  score -= 300;
  speedBoosts += 1;
  updateScore();
  shopFeedbackElement.textContent = `Kiirus nüüd ${(1 + speedBoosts * 0.5).toFixed(1).replace(".", ",")}×.`;
}

function updateFlightStatus(now) {
  const secondsLeft = Math.max(0, flightUntil - now) / 1000;
  flightStatusElement.hidden = secondsLeft <= 0;
  if (secondsLeft > 0) flightStatusElement.textContent = `Lend ${secondsLeft.toFixed(1)} s`;
}

function updateBirds(time) {
  for (const bird of birds) {
    bird.x += bird.speed * bird.direction;
    if (bird.x <= bird.left || bird.x + 36 >= bird.right) {
      bird.direction *= -1;
      bird.x = Math.max(bird.left, Math.min(bird.right - 36, bird.x));
    }

    if (time >= bird.nextDrop) {
      birdDroppings.push({
        x: bird.x + 14,
        y: bird.y + 20,
        width: 10,
        height: 12,
        velocityY: 1.5,
      });
      bird.nextDrop = time + Math.max(850, 2300 - level * 45) + Math.random() * 750;
    }
  }

  for (let index = birdDroppings.length - 1; index >= 0; index -= 1) {
    const dropping = birdDroppings[index];
    dropping.velocityY += 0.16;
    dropping.y += dropping.velocityY;

    if (dropping.y > canvas.height + 20) {
      birdDroppings.splice(index, 1);
      continue;
    }

    const hitsPlayer = player.x + player.width > dropping.x
      && player.x < dropping.x + dropping.width
      && player.y + player.height > dropping.y
      && player.y < dropping.y + dropping.height;
    if (hitsPlayer && time >= invulnerableUntil) {
      birdDroppings.splice(index, 1);
      if (loseLife("Linnu väljaheide tabas sind!")) return true;
      player.x = checkpoint.x;
      player.y = checkpoint.y;
      player.velocityX = 0;
      player.velocityY = 0;
      player.grounded = true;
      player.groundedPlatform = null;
      return true;
    }
  }

  return false;
}

function drawNextQuestion() {
  const questionLevel = Math.min(level, questionSets.length - 1);
  const questionPool = questionSets[questionLevel];

  if (questionDeckLevel !== questionLevel) {
    questionDeck = [];
    questionDeckLevel = questionLevel;
    lastQuestionIndex = -1;
  }

  if (questionDeck.length === 0) {
    questionDeck = questionPool.map((_, index) => index);
    for (let index = questionDeck.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [questionDeck[index], questionDeck[swapIndex]] = [questionDeck[swapIndex], questionDeck[index]];
    }
    if (questionDeck.length > 1 && questionDeck[questionDeck.length - 1] === lastQuestionIndex) {
      [questionDeck[questionDeck.length - 1], questionDeck[questionDeck.length - 2]] = [
        questionDeck[questionDeck.length - 2],
        questionDeck[questionDeck.length - 1],
      ];
    }
  }

  const questionIndex = questionDeck.pop();
  lastQuestionIndex = questionIndex;
  return questionPool[questionIndex];
}

function assignLevelQuestions() {
  tokens.forEach((token) => {
    token.question = drawNextQuestion();
  });
}

function updateLevelLabel() {
  levelElement.textContent = `Rada ${String(level).padStart(2, "0")}`;
  const shopAvailable = level % 2 === 1;
  shopOpenButton.disabled = !shopAvailable;
  shopButtonLabel.textContent = shopAvailable ? "Pood" : "Pood suletud";
  shopOpenButton.title = shopAvailable
    ? "Pood on sel rajal avatud"
    : "Pood avaneb järgmisel paaritul rajal";
}

function applyLevelDifficulty() {
  const difficulty = level - 1;
  platforms.forEach((platform, index) => {
    const reductionPerLevel = platform.ground ? 8 : 9;
    const minimumWidth = platform.ground ? 248 : 68;
    platform.width = Math.max(minimumWidth, originalPlatformWidths[index] - difficulty * reductionPerLevel);
    platform.x = originalPlatformPositions[index].x;
    platform.y = originalPlatformPositions[index].y;
  });
}

function updateMovingPlatforms(time) {
  const difficulty = Math.min(1 + (level - 1) * 0.1, 2.2);
  platforms.forEach((platform, index) => {
    const motion = platform.motion;
    if (!motion) {
      platform.deltaX = 0;
      platform.deltaY = 0;
      return;
    }

    const previousX = platform.x;
    const previousY = platform.y;
    const origin = originalPlatformPositions[index];
    const wave = Math.sin(time * motion.speed * difficulty + motion.phase);
    platform.x = origin.x + wave * motion.x * difficulty;
    platform.y = origin.y + wave * motion.y * difficulty;
    platform.deltaX = platform.x - previousX;
    platform.deltaY = platform.y - previousY;
  });
}

function spawnLevelBirds() {
  birds.length = 0;
  birdDroppings.length = 0;
  const birdCount = 2 + Math.floor((level - 1) / 2);
  const sectionWidth = worldWidth / birdCount;
  const now = performance.now();

  for (let index = 0; index < birdCount; index += 1) {
    const left = index * sectionWidth + 50;
    const right = (index + 1) * sectionWidth - 50;
    birds.push({
      x: left + (right - left) * 0.4,
      y: 95 + (index % 3) * 40,
      left,
      right,
      speed: 0.75 + Math.min(level * 0.08, 2.4),
      direction: index % 2 === 0 ? 1 : -1,
      nextDrop: now + 700 + Math.random() * 1800,
    });
  }
}

function spawnLevelAnimals() {
  animals.length = 0;
  const groundPlatforms = platforms.filter((platform) => platform.ground);
  const patrolPlatforms = groundPlatforms.filter((platform, index) => index % 2 === 0 && platform.x >= 800);
  const extraAnimals = level - 1;
  const scale = 1 + Math.log2(level) * 0.25;

  patrolPlatforms.forEach((platform, index) => {
    const left = platform.x + 46;
    const right = platform.x + platform.width - 46;
    animals.push({
      x: left + (right - left) * 0.45,
      y: platform.y - 28 * scale,
      width: 36 * scale,
      height: 28 * scale,
      scale,
      left,
      right,
      speed: (1.1 + Math.min((level - 1) * 0.1, 1.6)) * (index % 2 === 0 ? 1 : 1.15),
      direction: index % 2 === 0 ? 1 : -1,
      type: index % 5,
      style: (level - 1) % animalStyles.length,
    });
  });

  for (let index = 0; index < extraAnimals; index += 1) {
    const platform = patrolPlatforms[(index + level) % patrolPlatforms.length];
    const left = platform.x + 46;
    const right = platform.x + platform.width - 46;
    animals.push({
      x: left + (right - left) * (index % 2 === 0 ? 0.28 : 0.72),
      y: platform.y - 28 * scale,
      width: 36 * scale,
      height: 28 * scale,
      scale,
      left,
      right,
      speed: 1.3 + Math.min((level - 1) * 0.12, 1.8),
      direction: index % 2 === 0 ? -1 : 1,
      type: (index + 1) % 5,
      style: (level - 1) % animalStyles.length,
    });
  }
  spawnLevelBirds();
}

function isMovingLeft() {
  return pressedKeys.has("ArrowLeft") || pressedKeys.has("a") || pressedKeys.has("A") || pressedControls.has("left");
}

function isMovingRight() {
  return pressedKeys.has("ArrowRight") || pressedKeys.has("d") || pressedKeys.has("D") || pressedControls.has("right");
}

function openQuestion(token) {
  activeToken = token;
  const question = token.question;
  questionCount.textContent = `Küsimus ${collectedTokens.size + 1} / ${tokens.length} · rada ${level}`;
  questionTitle.textContent = question.question;
  answerFeedback.textContent = "";
  answerFeedback.className = "answer-feedback";
  answerList.replaceChildren();

  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.type = "button";
    button.textContent = answer;
    button.addEventListener("click", () => checkAnswer(index, question));
    answerList.append(button);
  });

  quizDialog.showModal();
}

function checkAnswer(answerIndex, question) {
  if (answerIndex !== question.correct) {
    loseLife("Vale vastus!");
    if (gameFinished) return;
    answerFeedback.textContent = `See pole päris õige. Kaotasid elu; alles ${lives}. Proovi uuesti!`;
    answerFeedback.className = "answer-feedback is-wrong";
    return;
  }

  collectedTokens.add(activeToken.id);
  score += 100;
  updateScore();
  answerFeedback.textContent = "Õige vastus! +100 punkti.";
  answerFeedback.className = "answer-feedback is-correct";

  const continueButton = document.createElement("button");
  continueButton.className = "continue-button";
  continueButton.type = "button";
  continueButton.textContent = collectedTokens.size === tokens.length ? "Jätka finišisse" : "Jätka mängu";
  continueButton.addEventListener("click", () => {
    quizDialog.close();
    statusElement.textContent = collectedTokens.size === tokens.length
      ? "Kõik kuldnupud leitud! Jõua raja lõpus oleva lipuni."
      : "Tubli! Otsi rajalt järgmist kuldnuppu.";
  });
  answerList.replaceChildren(continueButton);
}

function updatePlayer(time) {
  if (quizDialog.open || shopDialog.open || gameFinished) return;

  const wasGrounded = player.grounded;
  const standingPlatform = player.groundedPlatform;
  const direction = Number(isMovingRight()) - Number(isMovingLeft());
  const difficulty = level - 1;
  const moveSpeed = Math.min(4.2 + difficulty * 0.18, 7.4) * (1 + speedBoosts * 0.5);
  const jumpPower = Math.min(12.5 + difficulty * 0.16, 16);
  const gravity = 0.58 + Math.min(difficulty, 12) * 0.025;
  const jumpHeld = pressedKeys.has(" ") || pressedKeys.has("ArrowUp") || pressedKeys.has("w") || pressedKeys.has("W") || pressedControls.has("jump");
  const flying = performance.now() < flightUntil;
  player.velocityX = direction * moveSpeed;
  if (direction !== 0) player.facing = direction;
  let jumped = false;

  if (flying) {
    player.velocityY = jumpHeld ? -3.4 : 0;
    player.grounded = false;
    player.groundedPlatform = null;
  } else {
    if (jumpPressed && player.grounded) {
      player.velocityY = -jumpPower;
      player.grounded = false;
      player.groundedPlatform = null;
      jumped = true;
    }
    player.velocityY = Math.min(player.velocityY + gravity, 14);
  }
  jumpPressed = false;

  updateMovingPlatforms(time);
  if (wasGrounded && !jumped && !flying && standingPlatform) {
    player.x += standingPlatform.deltaX || 0;
    player.y += standingPlatform.deltaY || 0;
  }

  const previousBottom = player.y + player.height;
  player.x = Math.max(0, Math.min(worldWidth - player.width, player.x + player.velocityX));
  player.y += player.velocityY;
  player.grounded = false;
  player.groundedPlatform = null;

  for (const platform of platforms) {
    const overlapsPlatform = player.x + player.width > platform.x && player.x < platform.x + platform.width;
    const currentBottom = player.y + player.height;
    if (overlapsPlatform && player.velocityY >= 0 && previousBottom <= platform.y && currentBottom >= platform.y) {
      player.y = platform.y - player.height;
      player.velocityY = 0;
      player.grounded = true;
      player.groundedPlatform = platform;
      checkpoint = { x: player.x, y: player.y };
    }
  }

  if (player.y > canvas.height + 100) {
    if (loseLife("Kukkusid rajalt alla!")) return;
    player.x = checkpoint.x;
    player.y = checkpoint.y;
    player.velocityX = 0;
    player.velocityY = 0;
    player.grounded = true;
  }

  for (const animal of animals) {
    animal.x += animal.speed * animal.direction;
    if (animal.x <= animal.left || animal.x + animal.width >= animal.right) {
      animal.direction *= -1;
      animal.x = Math.max(animal.left, Math.min(animal.right - animal.width, animal.x));
    }
  }

  if (updateBirds(time)) return;

  if (performance.now() >= invulnerableUntil) {
    const collision = animals.some((animal) => (
      player.x + player.width - 5 > animal.x + 4
      && player.x + 5 < animal.x + animal.width - 4
      && player.y + player.height - 4 > animal.y + 5
      && player.y + 5 < animal.y + animal.height
    ));

    if (collision) {
      if (loseLife("Loomaga kokkupõrge!")) return;
      player.x = checkpoint.x;
      player.y = checkpoint.y;
      player.velocityX = 0;
      player.velocityY = 0;
      player.grounded = true;
      player.groundedPlatform = null;
      return;
    }
  }

  for (const token of tokens) {
    if (collectedTokens.has(token.id)) continue;
    const nearX = player.x + player.width > token.x - 18 && player.x < token.x + 18;
    const nearY = player.y + player.height > token.y - 18 && player.y < token.y + 18;
    if (token.id === dismissedTokenId) {
      if (nearX && nearY) continue;
      dismissedTokenId = null;
    }
    if (nearX && nearY) {
      openQuestion(token);
      break;
    }
  }

  const finishX = worldWidth - 90;
  if (player.x >= finishX) {
    gameFinished = true;
    statusElement.textContent = `Rada ${level} läbitud! Järgmine rada algab kohe.`;
    levelTimer = window.setTimeout(startNextLevel, 900);
  }
}

function drawBackground(time) {
  const theme = levelThemes[(level - 1) % levelThemes.length];
  context.fillStyle = theme.sky;
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = "#ffe585";
  context.fillRect(790, 72, 56, 56);
  context.fillRect(806, 56, 24, 88);
  context.fillRect(774, 88, 88, 24);

  context.save();
  context.translate(-cameraX * 0.24, 0);
  context.fillStyle = theme.hills;
  for (let index = 0; index < 8; index += 1) {
    const hillX = index * 360 - 80;
    const hillHeight = 48 + (index % 3) * 16;
    context.fillRect(hillX, 432 - hillHeight, 96, hillHeight + 48);
    context.fillRect(hillX + 32, 416 - hillHeight, 96, hillHeight + 64);
    context.fillRect(hillX + 64, 432 - hillHeight, 128, hillHeight + 48);
    context.fillRect(hillX + 96, 448 - hillHeight, 128, hillHeight + 32);
  }

  for (let index = 0; index < 20; index += 1) {
    const treeX = index * 150 + 30;
    const treeY = 398 + (index % 3) * 12;
    context.fillStyle = theme.trunk;
    context.fillRect(treeX + 16, treeY - 48, 16, 64);
    context.fillStyle = theme.tree;
    context.fillRect(treeX, treeY - 64, 48, 16);
    context.fillRect(treeX - 8, treeY - 48, 64, 16);
    context.fillRect(treeX + 8, treeY - 80, 32, 16);
    context.fillStyle = theme.leafLight;
    context.fillRect(treeX + 8, treeY - 48, 16, 8);
    context.fillRect(treeX + 24, treeY - 64, 16, 8);
  }
  context.restore();

  context.save();
  context.translate(-cameraX * 0.45, 0);
  for (let index = 0; index < 12; index += 1) {
    const cloudX = index * 245 + 55 + Math.sin(time / 1300 + index) * 6;
    const cloudY = 82 + (index % 4) * 45;
    context.fillStyle = "#f4fff2";
    context.fillRect(cloudX, cloudY, 64, 16);
    context.fillRect(cloudX + 16, cloudY - 16, 32, 16);
    context.fillRect(cloudX + 32, cloudY - 8, 32, 8);
  }
  context.restore();
}

function drawPlatform(platform) {
  const theme = levelThemes[(level - 1) % levelThemes.length];
  const tileSize = 32;
  const visualHeight = platform.ground ? platform.height : 32;
  const grassHeight = 8;

  for (let x = platform.x; x < platform.x + platform.width; x += tileSize) {
    const tileWidth = Math.min(tileSize, platform.x + platform.width - x);
    context.fillStyle = theme.soil;
    context.fillRect(x, platform.y + grassHeight, tileWidth, visualHeight - grassHeight);
    context.fillStyle = theme.grass;
    context.fillRect(x, platform.y, tileWidth, grassHeight);
    context.fillStyle = theme.grassLight;
    context.fillRect(x, platform.y, tileWidth, 4);
    context.fillStyle = theme.soilLine;
    context.fillRect(x, platform.y + grassHeight + 16, tileWidth, 3);
    context.fillStyle = theme.soilLight;
    context.fillRect(x + 8, platform.y + grassHeight + 8, 8, 5);
    context.fillRect(x + 20, platform.y + grassHeight + 22, 5, 4);
  }

  if (platform.motion) {
    context.fillStyle = "#f6d469";
    context.fillRect(platform.x + platform.width / 2 - 5, platform.y - 4, 10, 3);
  }
}

function drawToken(token, time) {
  if (collectedTokens.has(token.id)) return;
  const bob = Math.round(Math.sin(time / 180 + token.id) * 2);
  const x = token.x - 12;
  const y = token.y - 12 + bob;
  context.fillStyle = "#d88620";
  context.fillRect(x + 4, y, 16, 4);
  context.fillRect(x, y + 4, 24, 16);
  context.fillRect(x + 4, y + 20, 16, 4);
  context.fillStyle = "#ffd34f";
  context.fillRect(x + 4, y + 4, 16, 12);
  context.fillRect(x + 8, y + 16, 8, 4);
  context.fillStyle = "#fff4b5";
  context.fillRect(x + 8, y + 4, 8, 4);
  context.fillRect(x + 4, y + 8, 4, 4);
  context.fillStyle = "#a65e18";
  context.fillRect(x + 12, y + 8, 4, 4);
  context.fillRect(x + 8, y + 12, 8, 4);
  context.fillRect(x + 8, y + 18, 4, 3);
}

function drawBird(bird, time) {
  const x = Math.round(bird.x);
  const wing = Math.round(Math.sin(time / 75 + x) * 4);
  const bodyColor = levelThemes[(level - 1) % levelThemes.length].tree;
  context.fillStyle = bodyColor;
  context.fillRect(x + 8, bird.y + 7, 22, 12);
  context.fillRect(x + (bird.direction > 0 ? 21 : 0), bird.y + 2, 13, 12);
  context.fillRect(x + 10, bird.y + 3 + wing, 15, 5);
  context.fillRect(x + 12, bird.y + 18, 3, 5);
  context.fillRect(x + 24, bird.y + 18, 3, 5);
  context.fillStyle = "#fff6dc";
  context.fillRect(x + (bird.direction > 0 ? 28 : 4), bird.y + 5, 4, 4);
  context.fillStyle = "#293c35";
  context.fillRect(x + (bird.direction > 0 ? 30 : 4), bird.y + 6, 2, 2);
  context.fillStyle = "#edb244";
  context.fillRect(x + (bird.direction > 0 ? 34 : -5), bird.y + 10, 7, 3);
}

function drawBirdDropping(dropping) {
  const x = Math.round(dropping.x);
  const y = Math.round(dropping.y);
  context.fillStyle = "#694d3b";
  context.fillRect(x + 2, y, 6, 5);
  context.fillRect(x, y + 4, 10, 5);
  context.fillStyle = "#a48b70";
  context.fillRect(x + 3, y + 2, 3, 2);
  context.fillStyle = "#694d3b";
  context.fillRect(x + 3, y + 8, 4, 4);
}

function drawAnimal(animal, time) {
  const x = Math.round(animal.x);
  const bounce = Math.round(Math.sin(time / 90 + x) * 1.5);
  const y = animal.y + bounce;
  const style = animalStyles[animal.style];
  const eyeX = animal.direction > 0 ? 25 : 8;

  context.save();
  context.translate(x, y);
  context.scale(animal.scale, animal.scale);
  context.fillStyle = "rgba(38, 61, 56, 0.22)";
  context.fillRect(4, 28, 28, 4);
  context.fillStyle = style.body;
  context.fillRect(4, 8, 28, 16);
  context.fillRect(8, 4, 20, 20);
  context.fillRect(0, 12, 8, 8);
  context.fillStyle = style.light;
  context.fillRect(9, 16, 18, 8);

  if (animal.style === 0) {
    context.fillStyle = style.body;
    context.fillRect(8, 0, 7, 10);
    context.fillRect(22, 0, 7, 10);
    context.fillStyle = style.light;
    context.fillRect(10, 2, 3, 6);
    context.fillRect(24, 2, 3, 6);
  } else if (animal.style === 1) {
    context.fillStyle = style.body;
    context.fillRect(7, 0, 9, 9);
    context.fillRect(22, 0, 9, 9);
    context.fillRect(animal.direction > 0 ? 30 : -5, 14, 10, 5);
  } else if (animal.style === 2) {
    context.fillStyle = style.accent;
    context.fillRect(9, 1, 3, 8);
    context.fillRect(24, 1, 3, 8);
    context.fillStyle = style.accent;
    context.fillRect(10, 8, 16, 10);
    context.fillStyle = style.light;
    context.fillRect(15, 10, 6, 6);
    context.fillStyle = style.body;
    context.fillRect(8, 19, 5, 7);
    context.fillRect(23, 19, 5, 7);
  } else if (animal.style === 3) {
    context.fillStyle = style.accent;
    context.fillRect(8, 5, 20, 17);
    context.fillStyle = style.light;
    context.fillRect(12, 8, 12, 3);
    context.fillRect(10, 14, 16, 3);
    context.fillStyle = style.body;
    context.fillRect(26, 14, 7, 7);
  } else if (animal.style === 4) {
    context.fillStyle = style.light;
    context.fillRect(4, 10, 9, 10);
    context.fillStyle = style.accent;
    context.fillRect(animal.direction > 0 ? 29 : -3, 14, 8, 4);
    context.fillStyle = style.body;
    context.fillRect(8, 0, 6, 8);
    context.fillRect(22, 0, 6, 8);
  } else if (animal.style === 5) {
    context.fillStyle = style.light;
    context.fillRect(8, 2, 8, 4);
    context.fillRect(20, 8, 8, 4);
    context.fillRect(5, 16, 5, 5);
  } else if (animal.style === 6) {
    context.fillStyle = style.accent;
    context.fillRect(6, 4, 5, 5);
    context.fillRect(14, 0, 5, 7);
    context.fillRect(23, 4, 5, 5);
    context.fillStyle = style.light;
    context.fillRect(11, 18, 9, 4);
  } else {
    context.fillStyle = style.accent;
    context.fillRect(8, 0, 4, 8);
    context.fillRect(24, 0, 4, 8);
    context.fillRect(5, 2, 8, 4);
    context.fillRect(23, 2, 8, 4);
    context.fillStyle = style.light;
    context.fillRect(12, 17, 8, 5);
  }

  context.fillStyle = "#fff7db";
  context.fillRect(eyeX, 9, 5, 6);
  context.fillStyle = "#283d37";
  context.fillRect(eyeX + (animal.direction > 0 ? 2 : 0), 11, 2, 3);
  context.fillStyle = "#604537";
  context.fillRect(8, 23, 7, 5);
  context.fillRect(23, 23, 7, 5);
  context.restore();
}

function drawPlayer(time) {
  if (performance.now() < invulnerableUntil && Math.floor(performance.now() / 100) % 2 === 0) return;
  const walkOffset = player.grounded && Math.abs(player.velocityX) > 0 ? Math.round(Math.sin(time / 55) * 2) : 0;
  const x = Math.round(player.x / 4) * 4;
  const y = Math.round((player.y + walkOffset) / 4) * 4;

  context.fillStyle = "rgba(38, 61, 56, 0.22)";
  context.fillRect(x + 4, player.y + player.height + 1, 24, 4);

  if (playerImage.complete && playerImage.naturalWidth > 0) {
    const drawHeight = 56;
    const drawWidth = drawHeight * playerImage.naturalWidth / playerImage.naturalHeight;
    const drawX = x + (player.width - drawWidth) / 2;
    const drawY = y + player.height - drawHeight;

    context.save();
    if (player.facing < 0) {
      context.translate(2 * (drawX + drawWidth / 2), 0);
      context.scale(-1, 1);
    }
    context.drawImage(playerImage, drawX, drawY, drawWidth, drawHeight);
    context.restore();
    return;
  }

  context.fillStyle = "#593b2d";
  context.fillRect(x + 8, y, 16, 8);
  context.fillRect(x + 4, y + 4, 8, 8);
  context.fillStyle = "#f2bd85";
  context.fillRect(x + 8, y + 8, 16, 12);
  context.fillRect(x + 4, y + 12, 4, 8);
  context.fillStyle = "#e7684f";
  context.fillRect(x + 4, y + 20, 24, 16);
  context.fillRect(x, y + 24, 4, 12);
  context.fillRect(x + 28, y + 24, 4, 12);
  context.fillStyle = "#f18a56";
  context.fillRect(x + 8, y + 24, 8, 8);
  context.fillStyle = "#354c83";
  context.fillRect(x + 4, y + 36, 8, 8);
  context.fillRect(x + 20, y + 36, 8, 8);
  context.fillStyle = "#fff5d6";
  context.fillRect(player.facing > 0 ? x + 22 : x + 10, y + 12, 4, 4);
}

function drawFinish() {
  const flagX = worldWidth - 65;
  context.fillStyle = "#765642";
  context.fillRect(flagX, floorY - 104, 8, 104);
  context.fillStyle = collectedTokens.size === tokens.length ? "#f07859" : "#f6b934";
  context.fillRect(flagX + 8, floorY - 104, 40, 8);
  context.fillRect(flagX + 24, floorY - 96, 32, 8);
  context.fillRect(flagX + 40, floorY - 88, 16, 8);
  context.fillRect(flagX + 24, floorY - 80, 32, 8);
  context.fillRect(flagX + 8, floorY - 72, 40, 8);
}

function render(time) {
  drawBackground(time);
  context.save();
  context.translate(-cameraX, 0);

  for (const platform of platforms) drawPlatform(platform);
  for (const token of tokens) drawToken(token, time);
  for (const bird of birds) drawBird(bird, time);
  for (const dropping of birdDroppings) drawBirdDropping(dropping);
  for (const animal of animals) drawAnimal(animal, time);
  drawFinish();
  drawPlayer(time);

  context.restore();
}

function frame(time) {
  const elapsed = Math.min(time - lastFrame, 40);
  lastFrame = time;
  if (elapsed >= 0) updatePlayer(time);
  updateFlightStatus(time);
  cameraX = Math.max(0, Math.min(worldWidth - canvas.width, player.x - canvas.width * 0.39));
  render(time);
  requestAnimationFrame(frame);
}

function restartGame() {
  window.clearTimeout(levelTimer);
  level = 1;
  player.x = playerStart.x;
  player.y = playerStart.y;
  player.velocityX = 0;
  player.velocityY = 0;
  player.grounded = true;
  player.groundedPlatform = null;
  player.facing = 1;
  checkpoint = { x: playerStart.x, y: playerStart.y };
  score = 0;
  maxLives = startingLives;
  lives = maxLives;
  speedBoosts = 0;
  collectedTokens.clear();
  activeToken = null;
  dismissedTokenId = null;
  gameFinished = false;
  invulnerableUntil = 0;
  flightUntil = 0;
  queuedFlightSeconds = 0;
  questionDeck = [];
  lastQuestionIndex = -1;
  applyLevelDifficulty();
  spawnLevelAnimals();
  assignLevelQuestions();
  updateLevelLabel();
  updateScore();
  statusElement.textContent = "Liigu paremale ja hüppa kuldsete nuppude juurde.";
  if (quizDialog.open) quizDialog.close();
  if (shopDialog.open) shopDialog.close();
  if (gameOverDialog.open) gameOverDialog.close();
}

function startNextLevel() {
  if (!gameFinished) return;
  level += 1;
  gameFinished = false;
  player.x = playerStart.x;
  player.y = playerStart.y;
  player.velocityX = 0;
  player.velocityY = 0;
  player.grounded = true;
  player.groundedPlatform = null;
  checkpoint = { x: playerStart.x, y: playerStart.y };
  cameraX = 0;
  pressedKeys.clear();
  pressedControls.clear();
  collectedTokens.clear();
  activeToken = null;
  dismissedTokenId = null;
  applyLevelDifficulty();
  spawnLevelAnimals();
  assignLevelQuestions();
  updateLevelLabel();
  updateScore();
  statusElement.textContent = `Rada ${level} algas! Leia uued kuldnupud.`;
}

window.addEventListener("keydown", (event) => {
  if (["ArrowLeft", "ArrowRight", "ArrowUp", " "].includes(event.key)) event.preventDefault();
  pressedKeys.add(event.key);
  if ([" ", "ArrowUp", "w", "W"].includes(event.key) && !event.repeat) jumpPressed = true;
});

window.addEventListener("keyup", (event) => {
  pressedKeys.delete(event.key);
});

window.addEventListener("blur", () => {
  pressedKeys.clear();
  pressedControls.clear();
});

document.querySelectorAll("[data-control]").forEach((button) => {
  const control = button.dataset.control;
  button.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    button.setPointerCapture(event.pointerId);
    pressedControls.add(control);
    if (control === "jump") jumpPressed = true;
  });
  const releaseControl = () => pressedControls.delete(control);
  button.addEventListener("pointerup", releaseControl);
  button.addEventListener("pointercancel", releaseControl);
  button.addEventListener("lostpointercapture", releaseControl);
});

document.getElementById("restart-button").addEventListener("click", restartGame);
document.getElementById("game-over-restart").addEventListener("click", restartGame);
document.getElementById("close-dialog").addEventListener("click", () => quizDialog.close());
shopOpenButton.addEventListener("click", () => {
  if (level % 2 === 0 || quizDialog.open || gameOverDialog.open || shopDialog.open) return;
  shopFeedbackElement.textContent = "";
  shopDialog.showModal();
});
document.getElementById("close-shop").addEventListener("click", () => shopDialog.close());
document.getElementById("buy-flight").addEventListener("click", buyFlight);
document.getElementById("buy-life").addEventListener("click", buyLife);
document.getElementById("buy-speed").addEventListener("click", buySpeed);

shopDialog.addEventListener("close", () => {
  if (queuedFlightSeconds > 0) {
    flightUntil = Math.max(flightUntil, performance.now()) + queuedFlightSeconds * 1000;
    queuedFlightSeconds = 0;
    statusElement.textContent = "Lennuvõime aktiivne! Hoia hüppenuppu, et üles lennata.";
  }
});

quizDialog.addEventListener("close", () => {
  if (activeToken && !collectedTokens.has(activeToken.id)) {
    dismissedTokenId = activeToken.id;
    statusElement.textContent = "Liigu kuldnupust eemale, et küsimuse juurde hiljem naasta.";
  }
  activeToken = null;
});

applyLevelDifficulty();
spawnLevelAnimals();
assignLevelQuestions();
updateLevelLabel();
updateScore();
requestAnimationFrame(frame);