//! === JavaScript Comparison and Logical Operators
//  ===== operatory  sravneniya i  usloviya   ======

let x = 5; //!

//*  ==	 equal to
let result = x == 8; //returns false
let result1 = x == 5; //returns true
let result2 = x == '5'; //returns true

//* ===	equal value and equal type
let result3 = x === 5; //returns true
let result4 = x === '5'; //returns false

//* !=	not equal
let result5 = x != 8; //returns true
let result6 = x != '5'; //returns false

//* !==	not equal value or not equal type
let result7 = x !== 5; //returns false
let result8 = x !== '5'; //returns	true
let result9 = x !== 8; //returns true

//* >	greater than
let result10 = x > 8; //returns false

//* <	less than
let result11 = x < 8; //returns true

//* >=	greater than or equal to
let result12 = x >= 8; //returns false

//* <=	less than or equal to
let result13 = x <= 8; //returns true

//!---------------------------------------
let myNumber = 5;
// console.log(myNumber = 10);
// console.log(myNumber == 10);

// console.log('5'== 5 );
// console.log('5'=== 5 );
// console.log('5'!= 5 );
// console.log('5'!== 5 );

//!---------------------------------------

let condition1 = 10; //null, 0, undefined, NaN, -1,
//'', ' ', 'value', [], {} ect..

if (condition1) {
  //*  block of code to be executed if the condition is true
  // console.log(true);
} else {
  //*  block of code to be executed if the condition is false
  // console.log(false);
}
//-------
const time = new Date().getHours();
let greeting;
if (time < 10) {
  greeting = 'Good morning';
} else if (time < 20) {
  greeting = 'Good day';
} else {
  greeting = 'Good evening';
}
document.getElementById('demo1').innerHTML = greeting;

//-------

let conditionAge = 17; //10, 18, 25 , 37, 50

if (conditionAge < 18) {
  //*  block of code to be executed if condition1 is true
  // console.log('you are a child and you should go and drink some milk');
} else if (conditionAge > 18 && conditionAge <= 35) {
  //*  block of code to be executed if the condition1 is false and condition2 is true
  // console.log('you are an adult');
} else {
  //*  block of code to be executed if the condition1 is false and condition2 is false
  // console.log('you are so old go to sleep');
}
//!---------------------------------------
//! Logical operators

//*  && - logical AND
//*  || - logical OR
//* !true - logical NOT

let b = 6;
let c = 3;
// console.log(b < 10 && c > 1); //returns true
// console.log(b == 5 && c == 3); //returns false
// console.log(b == 5 || c == 3); //returns true
// console.log(b == c); //returns false
// console.log(!(b == c)); //returns true

//?-------The Nullish Coalescing Operator (??)
let nameNull = null;
let text = 'missing';
let thisResult = nameNull ?? text;
// console.log(thisResult);

//!---------------------------------------
//! Ternary operator

if (10 < 7) {
  // console.log('condition is true');
} else {
  // console.log('condition is not true');
}

//* (condition) ? (condition is true) : (condition is not true)

// 10 < 12
//   ?  console.log('condition is true')
//   : console.log('condition is not true');

//--------
let thisGreeting;
let thisTime = 10;

if (thisTime < 12) {
  thisGreeting = 'Good morning ';
} else {
  thisGreeting = 'Good afternoon';
}
// console.log(thisGreeting);

thisTime < 12
  ? (thisGreeting = 'Good morning ')           
  : (thisGreeting = 'Good afternoon');
  //*you shouldn't do this because the ternary operator always returns a value
// console.log(thisGreeting );

//*it is better to do as in the code with an example of a ternary below

greeting = thisTime < 12 ? 'Good morning ' : 'Good afternoon';

// console.log(thisGreeting );

//========== or

let justTime = 15
let terGreeting = justTime  < 12 ? 'Good morning ' : 'Good afternoon';
// console.log(terGreeting);

//!---------------------------------------
function myFunction() {
  let voteable;
  let age = Number(document.getElementById('age').value);
  if (isNaN(age)) {
    voteable = 'Input is not a number';
  } else {
    voteable = age < 18 ? 'Too young' : 'Old enough';
  }
  document.getElementById('demo').innerHTML = voteable + ' to vote';
}
