let userName = 'Igor';

const stringJson =
  '{"name":"Igor","age":18,"info":{"isMale":true,"country":"Ukraine","city":"Kharkiv","smoke":false}}';

let age = '30';

let myAge = 30;

let isMarried = false;

let ageNull = null;

let exampleArray = [1, 2, 3, 'a', 'b', 'c']; //object
// console.log(typeof exampleArray) //object data type

let exampleObject = {
  name: 'Igor',
  age: 18,
  gender: 'male',
};

//*undefined value

let mySkills;
// console.log(mySkills)   //undefined

//*BigIbt

let maxIntInJs = Number.MAX_SAFE_INTEGER;
// console.log(maxIntInJs);

let hugeNumber = 90071992547409919003434;
// console.log(hugeNumber);

let exampleBigIbt = 90071992547409919003434n + 124n;
// console.log(exampleBigIbt);

//*Symbol - this is a unique primitive value
//*allows you to add a unique property to an object with the assurance that it does not overwrite any other property

//!---------------------------------
//*reset value

let someName = 'James';

someName = undefined; //better not to do that
// console.log(someName);

someName = null;
// console.log(someName); //should be do like this

//!---------------------------------
//*Dynamic typing

let someVariable = 'Some value';
// console.log(someVariable)

someVariable = 50;
// console.log(someVariable)

someVariable = true;
// console.log(someVariable)

//!---------------------------------
//*this way of naming is bad

let u = 'Vlad';
let a = 30;

//*good naming example

let userLastName = 'Plisko';
let userAge = 25;

//!---------------------------------
//* typeof operator

const justName = 'Bob';
const justAge = 10;

typeof justName;

// console.log(typeof justName);
// console.log(typeof justAge);

//!---------------------------------
//*string concatenation and template strings (konkatenatsiya strok i shablonnyye stroki)

//*string concatenation 
let justGreeting = 'Hey, Vlad!';
let howAreYou = ' How are you?';
let sayFullPhrase = justGreeting + ' ' + howAreYou;
console.log(sayFullPhrase);

// let sayFullPhraseTemplate = `{justGreetin}`

let profileName = 'Lion' 
let profileGreeting  = 'Hey' + ',  '  + profileName + '! How are you?'
console.log(profileGreeting );

//*template strings
let greetingTemplate = `Hey,  ${profileName}! How are you?`
console.log(greetingTemplate );