let seconds = 0;
let interval = null;

function updateTimeDisplay() {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const display = minutes > 0 ? `${minutes}min ${remainingSeconds}s` : `${remainingSeconds}s`;
  document.getElementById('time-display').textContent = display;
}

document.getElementById('start').addEventListener('click', () => {
  if (!interval) {
    interval = setInterval(() => {
      seconds++;
      updateTimeDisplay();
    }, 1000);
  }
});

document.getElementById('stop').addEventListener('click', () => {
  clearInterval(interval);
  interval = null;
});

document.getElementById('reset').addEventListener('click', () => {
  clearInterval(interval);
  interval = null;
  seconds = 0;
  updateTimeDisplay();
});