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
  }, 1000);
  refs.start.disabled = true;
}

function onStopColor() {
  clearInterval(startColor);
  refs.start.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// ---- Var 2 -----------------------------------------------

// const refs = {
//   start: document.querySelector('button[data-start]'),
//   stop: document.querySelector('button[data-stop]'),
//   body: document.body,
// };

// refs.start.disabled = false;

// const changerBg = {
//   intervalId: null,

//   start() {
//     refs.start.disabled = true;
//     this.intervalId = setInterval(
//       () => {
//         getColorBody();
//       },
//       1000
//     );
//   },

//   stop() {
//     refs.start.disabled = false;
//     clearInterval(this.intervalId);
//   },
// };

// refs.start.addEventListener('click', () => {
//   changerBg.start();
// });

// refs.stop.addEventListener('click', () => {
//   changerBg.stop();
// });

// function getColorBody() {
//     let randomHexColor = getRandomHexColor();
//     refs.body.style.backgroundColor = randomHexColor;
// };

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }