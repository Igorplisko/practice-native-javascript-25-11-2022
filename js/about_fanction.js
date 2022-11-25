
function myFn(a, b) {
  let c;
  a = a + 1;
  c = a + b;
  return c;
}

// console.dir(myFn)
myFn(10, 5);

//?--------------------------
function multiplyNumbers(value, multiplier = 2) {
  return value * multiplier
}

// multiplyNumbers(10, 5)




//?--------------------------
//?callback function

function anotherFunction() {
  // console.log('Hello my friend')
}
function fnWithCallback(callbackFunction) {
  callbackFunction();
}

fnWithCallback(anotherFunction);

//?----

function printMyName() {
  // console.log('How are u, dude?')
}
// console.log('Start')

setTimeout(printMyName, 2000);

//?--------------------------
