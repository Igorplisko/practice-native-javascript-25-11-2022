const obj = {
  name: 'Igor',
  age: 18,
  gender: 'male',
  dancing: false,
};

obj.age = 25;
obj.weight = 85;
delete obj.gender;
// console.log(obj);

//!------------------------------
const obj2 = {
  name: 'Alexander',
  age: 25,
  gender: 'male',
  dancing: false,
};

delete obj2['age'];
obj2['dancing'] = true;
obj2['smoke'] = true;

const countryPropertyName = 'country';
obj2[countryPropertyName] = 'Ukraine';

//!----
const arrayKeys = Object.keys(obj2);
const arrayValues = Object.values(obj2);
// console.log(arrayKeys);
// console.log(arrayValues);

//!------------------------------
const objIncluded = {
  name: 'Igor',
  age: 18,
  info: {
    isMale: true,
    country: 'Ukraine',
    city: 'Kharkiv',
    smoke: false,
  },
};

const myCity = objIncluded.info.city;

delete objIncluded.info.smoke;
delete objIncluded.info['isMale'];
objIncluded.info.run = true;

// console.log(objIncluded);

//!----------------------------------------------
//!Методы - свойства обьекта, которые содержат функцию

const myMainCity = {
  city: 'Kharkiv',
  cityGreeting: function () {
    console.log('Hello everybody!');
  },
};

// ? delete myMainCity.cityGreeting
// myMainCity.cityGreeting();

//!----
const greeting = myMainCity.cityGreeting;
// console.log(greeting)
// greeting()

//!Сокращение

const myMainCity2 = {
  city: 'Kharkiv',
  cityGreeting() {
    console.log('Hello everybody!');
  },
};

myMainCity2.cityGreeting;
// myMainCity2.cityGreeting();

//!---------------------------------

const objIncluded2 = {
  name: 'Igor',
  age: 18,
  info: {
    isMale: true,
    country: 'Ukraine',
    city: 'Kharkiv',
    smoke: false,
  },
};

const conversionToJson = JSON.stringify(objIncluded2);
// console.log(conversionToJson);

const stringJson =
  '{"name":"Igor","age":18,"info":{"isMale":true,"country":"Ukraine","city":"Kharkiv","smoke":false}}';

const conversionToObject = JSON.parse(stringJson);

// console.log(conversionToObject);

//!---------------------------------

const person = {
  name: 'Igor',
  age: 18,
  gender: 'male',
  dancing: false,
};

const person2 = Object.assign({}, person);
const person3 = { ...person };
const person4 = JSON.parse(JSON.stringify(person));

person2.age = 25;
person3.age = 30;
person4.age = 40;

// console.log(person2);

// console.log(person.age);
// console.log(person2.age);
// console.log(person3.age);
// console.log(person4.age);

//!---------------------------------
// ? the reference to the nested object is not preserved and the old object is not mutated

const personIncluded = {
  name: 'Igor',
  age: 18,
  info: {
    country: 'Ukraine',
    city: 'Kharkiv',
  },
};

const personJson = JSON.parse(JSON.stringify(personIncluded));
personJson.info.country = 'USA';

// const personSpread = { ...personIncluded };
// personSpread.info.country = 'England';

// console.log(personIncluded);
// console.log(personJson);
// console.log(personSpread);

//!---------------------------------
