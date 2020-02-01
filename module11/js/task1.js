const body = document.querySelector('body');
const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let timerId = null;
let isActive = true;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function start() {
  if (!isActive) {
    return;
  }
  timerId = setInterval(() => {
    body.style.background = colors[randomIntegerFromInterval(0, 5)];
    startBtn.disabled = false;
    isActive = false;
  }, 1000);
}

function stop() {
  isActive = true;
  clearInterval(timerId);
}

startBtn.addEventListener('click', start);

stopBtn.addEventListener('click', stop);
