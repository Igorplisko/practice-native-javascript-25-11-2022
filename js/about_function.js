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
  return value * multiplier;
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

//!--------------------------

const newPost = (post, addedAt = Date()) => ({
  ...post,
  addedAt
})


const userProfile = {
  id: 1,
  author: 'Igor',
  isAdult: true,
};

const fistUser = newPost(userProfile)
// console.table(fistUser);

//!------------------------------
//?function body shortening

 a => {
  //function body
}

(a, b) => a + b

//!------------------------------