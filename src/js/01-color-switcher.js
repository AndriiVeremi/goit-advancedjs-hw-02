const refs = {
  start: document.querySelector('button[data-start]'),
  stop: document.querySelector('button[data-stop]'),
  body: document.body,
};

refs.start.addEventListener('click', onStartColor);
refs.stop.addEventListener('click', onStopColor);
refs.start.disabled = false;
let startColor;

function onStartColor() {
    startColor = setInterval(() => {
        refs.body.style.backgroundColor = getRandomHexColor();
    }, 1000)
    refs.start.disabled = true;
}

function onStopColor() {
    clearInterval(startColor)
    refs.start.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
