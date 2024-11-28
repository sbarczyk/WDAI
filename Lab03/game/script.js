const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const gameOverSound = document.getElementById("gameOverSound");
const difficultyMenu = document.getElementById("difficultyMenu");
const endMenu = document.getElementById("endMenu");
const finalScore = document.getElementById("finalScore");
const bestScoreText = document.getElementById("bestScore");
const playAgainButton = document.getElementById("playAgainButton");

let score = 0;
let bestScore = 0;
let lives = 3;
let zombies = [];
let gameRunning = false;
let difficulty = null;
let spawnInterval = 2500;

const crosshairElement = document.getElementById("crosshair");

const zombieFrames = [];
const zombieImage = new Image();
zombieImage.src = "walkingdead.png";

for (let i = 0; i < 10; i++) {
  zombieFrames.push({
    x: i * 200,
    y: 0,
    width: 200,
    height: 312,
  });
}

canvas.addEventListener("mousemove", (e) => {
  crosshairElement.style.left = `${e.clientX}px`;
  crosshairElement.style.top = `${e.clientY}px`;
});

canvas.addEventListener("click", (e) => {
  if (!gameRunning) return;

  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  let hit = false;

  zombies.forEach((zombie, index) => {
    const isHit =
      x >= zombie.x &&
      x <= zombie.x + zombie.size &&
      y >= zombie.y &&
      y <= zombie.y + zombie.size;

    if (isHit) {
      zombies.splice(index, 1);
      score += 20;
      hit = true;
      updateScore();
    }
  });

  // Jeśli nie trafiłeś w zombiaka, odejmij punkty
  if (!hit) {
    score = Math.max(0, score - 5); // Punkty nie mogą być ujemne
    updateScore();
  }
});

document.getElementById("easyButton").addEventListener("click", () => {
  difficulty = "Easy";
  spawnInterval = 2500;
  startGame();
});

document.getElementById("mediumButton").addEventListener("click", () => {
  difficulty = "Medium";
  spawnInterval = 2000;
  startGame();
});

document.getElementById("hardButton").addEventListener("click", () => {
  difficulty = "Hard";
  spawnInterval = 1500;
  startGame();
});

function startGame() {
  difficultyMenu.style.display = "none";
  endMenu.style.display = "none";
  gameRunning = true;
  updateLives();
  updateScore();
  setInterval(spawnZombie, spawnInterval);
  gameLoop();
}

function spawnZombie() {
  if (!gameRunning) return;

  const size = Math.random() * 100 + 100;
  const speed = Math.random() * (difficulty === "Hard" ? 5 : difficulty === "Medium" ? 4 : 3) + 2;
  zombies.push({
    x: canvas.width,
    y: Math.random() * (canvas.height - size),
    size: size,
    speed: speed,
    frame: 0,
    animationSpeed: Math.floor(30 / speed),
    frameDelay: 0,
  });
}

function updateScore() {
  document.getElementById("score").textContent = String(score).padStart(5, "0");
}

function updateLives() {
  const livesContainer = document.getElementById("lives");
  livesContainer.innerHTML = "";
  for (let i = 0; i < 3; i++) {
    const heart = document.createElement("img");
    heart.src = i < lives ? "full_heart.png" : "empty_heart.png";
    heart.style.width = "40px";
    heart.style.margin = "5px";
    livesContainer.appendChild(heart);
  }
}

function endGame() {
  gameRunning = false;

  if (score > bestScore) {
    bestScore = score;
  }

  finalScore.textContent = `Your Score: ${score}`;
  bestScoreText.textContent = `Best Score: ${bestScore}`;
  endMenu.style.display = "flex";

  // Odtwórz smutną muzykę
  gameOverSound.play();
}

playAgainButton.addEventListener("click", () => {
  endMenu.style.display = "none";
  resetGame();
});

function resetGame() {
  score = 0;
  lives = 3;
  zombies = [];
  gameRunning = false;
  difficulty = null;
  updateScore();
  updateLives();
  difficultyMenu.style.display = "flex";
}

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  zombies.forEach((zombie, index) => {
    zombie.x -= zombie.speed;

    if (zombie.x + zombie.size < 0) {
      zombies.splice(index, 1);
      lives--;
      updateLives();
      if (lives === 0) {
        endGame();
        return;
      }
    }

    if (zombie.frameDelay === undefined) zombie.frameDelay = 0;
    zombie.frameDelay++;

    if (zombie.frameDelay >= zombie.animationSpeed) {
      zombie.frame = (zombie.frame + 1) % zombieFrames.length;
      zombie.frameDelay = 0;
    }

    const frame = zombieFrames[zombie.frame];
    ctx.drawImage(
      zombieImage,
      frame.x,
      frame.y,
      frame.width,
      frame.height,
      zombie.x,
      zombie.y,
      zombie.size,
      zombie.size
    );
  });

  if (gameRunning) {
    requestAnimationFrame(gameLoop);
  }
}