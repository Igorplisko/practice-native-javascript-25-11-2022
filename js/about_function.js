
function myFn(a, b) {
  let c;
  a = a + 1;
  c = a + b;
  return c;
}

// console.dir(myFn)
myFn(10, 5);

//!--------------------------
function multiplyNumbers(value, multiplier = 2) {
  return value * multiplier
}

//  multiplyNumbers(10, 5)
//  multiplyNumbers( 5)
// const thisNumber = multiplyNumbers(10, 5)
// console.log(thisNumber);

//!--------------------------
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
const obj = {
  name: 'Igor',
  age: 18,
  gender: 'male',
  dancing: false,
};

obj.age = 25;
obj.weight = 85;
delete obj.gender;

console.log(obj);
// console.dir(obj)

//!------------------------------