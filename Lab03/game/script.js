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

// Elementy gry
let score = 0;
let bestScore = 0;
let lives = 3;
let zombies = [];
let gameRunning = false;
let difficulty = null;
let spawnInterval = 2000;

let crosshairImage = new Image();
crosshairImage.src = "aim.png";

let zombieFrames = [];
const zombieImage = new Image();
zombieImage.src = "walkingdead.png";

// Tworzenie animacji zombie
for (let i = 0; i < 10; i++) {
  zombieFrames.push({
    x: i * 200,
    y: 0,
    width: 200,
    height: 312,
  });
}

// Zdarzenia myszy
canvas.addEventListener("mousemove", (e) => {
  crosshair.x = e.clientX;
  crosshair.y = e.clientY;
});

canvas.addEventListener("click", (e) => {
  if (!gameRunning) return;

  zombies.forEach((zombie, index) => {
    const isHit =
      crosshair.x >= zombie.x &&
      crosshair.x <= zombie.x + zombie.size &&
      crosshair.y >= zombie.y &&
      crosshair.y <= zombie.y + zombie.size;

    if (isHit) {
      zombies.splice(index, 1);
      score += 20;
      updateScore();
    }
  });
});

// Obsługa menu początkowego
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

// Celownik
const crosshair = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  draw() {
    const size = 80;
    ctx.drawImage(crosshairImage, this.x - size / 2, this.y - size / 2, size, size);
  },
};

// Funkcja rozpoczęcia gry
function startGame() {
  difficultyMenu.style.display = "none";
  gameRunning = true;
  updateLives();
  updateScore();
  setInterval(spawnZombie, spawnInterval);
  gameLoop();
}

// Generowanie zombie
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

// Aktualizacja wyniku
function updateScore() {
  document.getElementById("score").textContent = String(score).padStart(5, "0");
}

// Aktualizacja życia
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

// Funkcja końca gry
function endGame() {
  gameRunning = false;

  if (score > bestScore) {
    bestScore = score;
  }

  finalScore.textContent = `Your Score: ${score}`;
  bestScoreText.textContent = `Best Score: ${bestScore}`;
  endMenu.style.display = "flex";

  gameOverSound.play();
}

// Obsługa przycisku "Play Again"
playAgainButton.addEventListener("click", () => {
  endMenu.style.display = "none";
  resetGame();
});

// Resetowanie gry
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

// Animacja gry
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

  crosshair.draw();

  if (gameRunning) {
    requestAnimationFrame(gameLoop);
  }
}

// Wyświetl menu początkowe na starcie
difficultyMenu.style.display = "flex";