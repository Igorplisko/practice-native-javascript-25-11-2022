// =========== Секундомер(stopwatch) =============

const counterElement = document.querySelector('#counter');
let counter = 0;
let timerID;

// Старт
const btnStart = document.querySelector('#start');
btnStart.onclick = function () {
  console.log('btnStart');
  timerID = setInterval(function () {
    counter++;
    counterElement.innerText = counter;
  }, 1000);
};

// Пауза
const btnPause = document.querySelector('#pause');
btnPause.onclick = function () {
  console.log('btnStop');
  clearInterval(timerID);
};

// Сброс
const btnReset = document.querySelector('#reset');
btnReset.onclick = function () {
  counter = 0;
  counterElement.innerText = counter;
  clearInterval(timerID);
};
