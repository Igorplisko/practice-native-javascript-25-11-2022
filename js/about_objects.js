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
myMainCity2.cityGreeting();

//!---------------------------------
