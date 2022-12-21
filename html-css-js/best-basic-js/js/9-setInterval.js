// ============  setInterval   ==============

const timerIntervalID = setInterval(function () {
  // console.log('Fired!');
}, 1000);

//run this code to console
//clearInterval(timerIntervalID)

// ============  setTimeOut   ==============

const timeId = setTimeout(function () {
  // console.log('setTimeout')
}, 2000);

// clearInterval(timeId )  //We won't see our console.log('setTimeout')

// ============  setInterval + setTimeOut   ==============

const intervalId = setInterval(function () {
  console.log('setInterval Fired!');
}, 1000);

setTimeout(function () {
  clearInterval(intervalId);
}, 5000);

