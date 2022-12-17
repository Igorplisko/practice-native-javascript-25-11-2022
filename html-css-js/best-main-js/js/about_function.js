//! ================= DRY - Don't repeat yourself ==================

//*declared function
sayHi();

function sayHi() {
  //  console.log('Hello, my dear user')
}

//------------
//*functional expression
//? function expression we can't call anywhere

//  sayHey()
const sayHey = function () {
  // console.log('Hey, my dear user')
};

sayHey();

//!---------------------------------------------------------------------------

function sayGreetings(profileName) {
  console.log(`Hey, ${profileName}! How are you?`);
}

// sayGreetings('Igor')
// sayGreetings('Vlad')

//!---------------------------------------------------------------------------
function sum(a, b) {
  console.log('start');
  const result = a + b;
  return result;
  console.log('finish');

  //*if you comment out "operator return" the function will return undefined
  //*after "operator return" in the function nothing happens
}

// let res = sum(10, 15)
// console.log(res)

//!---------------------------------------------------------------------------
//*function as an argument

function justSum(a, b) {
  return a + b;
}

// console.log(justSum (10, 15))
// console.log(justSum (10, 15), justSum (10, 15))

const result = justSum(justSum(3, 12), justSum(10, 5));
// console.log(result)

//======= Callback function and function as an argument--------

function thisSum(a, b) {
  return a + b;
}
function thisMultiply(a, b) {
  return a * b;
}

function doSomething(func) {
  let result = func(5, 25);
  //  console.log(result)
}

doSomething(thisSum);
doSomething(thisMultiply);
// doSomething(thisMultiply())

//!---------------------------------------------------------------------------
//*===== Immediately invoked function expression (IIFE) ======

(function shoutHello() {
  // console.log('Hello dear user');
})();

//====anonymous immediately invoked function expression
(function () {
  // console.log('Hello dear user!!!');
})();

//=========
(function (a, b) {
  // console.log(a / b);
})(10, 5);

//=========
let res = (function (a, b) {
  return a * b;
})(10, 5);

// console.log(res)

//!---------------------------------------------------------------------------
//*declared function

function myFn(a, b) {
  let c;
  a = a + 1;
  c = a + b;
  return c;
}

// console.dir(myFn)
myFn(10, 5);

//=======

function multiplyNumbers(value, multiplier = 2) {
  return value * multiplier;
}

//  multiplyNumbers(10, 5)
//  multiplyNumbers( 5)
// const thisNumber = multiplyNumbers(10, 5)
// console.log(thisNumber);

//!---------------------------------------------------------------------------
//*callback function

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

//!---------------------------------------------------------------------------

const newPost = (post, addedAt = Date()) => ({
  ...post,
  addedAt,
});

const userProfile = {
  id: 1,
  author: 'Igor',
  isAdult: true,
};

const fistUser = newPost(userProfile);
// console.table(fistUser);

//!---------------------------------------------------------------------------
//*Function body shortening

(a) => {
  //function body
};

(a, b) => a + b;

//!---------------------------------------------------------------------------
//* ================== Arrow function ==============

function justSayGreetings(profileName) {
  console.log(`Hey, ${profileName}! How are you?`);
}

const arrowSayGreetings = (profileName) => {
  console.log(`Hey, ${profileName}! How are you?`);
  //*Arrow function does not have its own "this context"
  //*Arrow function refers to the context of which is in the scope where it is declared
};
// arrowSayGreetings('Ray');

const arrowSayGreetings2 = (profileName) =>
  console.log(`Hey, ${profileName}! How are you?`);
// arrowSayGreetings2('Lion');

//=====================

const otherSum = (a, b) => {
  return a + b;
};

const anotherSum = (a, b) => a + b;

const otherResult = otherSum(10, 10);
const anotherResult = anotherSum(15, 15);
// console.log(otherResult);
// console.log(anotherResult);
