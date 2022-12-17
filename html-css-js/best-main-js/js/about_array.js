let car1 = 'Volkswagen';
let car2 = 'Volvo';
let car3 = 'BMW';

const carsVariablesWrongExample = [car1, car2, car3];
const arrayWrongExample = [1, 'a', true, ['Volkswagen', 'Volvo', 'BMW']];
// console.log(carsVariables)

const cars = ['Volkswagen', 'Volvo', 'BMW'];
// console.log(cars)
// console.log(cars[0])
// console.log(cars[2])
// console.log(cars.length)
//!---------------------------------------------------------------------------------
// push(); //*Adds new elements to the end of an array, and returns the new length
// pop(); //*Removes the last element of an array, and returns that element
//unshift() //*	Adds new elements to the beginning of an array, and returns the new length
//shift()  //*Removes the first element of an array, and returns that element
//slice() //*Selects a part of an array, and returns the new array
//toString()	//*Converts an array to a string, and returns the result
//reverse()	//*Reverses the order of the elements in an array

let arr = ['Volkswagen', 'Volvo', 'BMW'];

arr.push('Audi', 'Tesla', 'Mercedes');
let popArr = arr.pop();
// console.log(popArr);
arr.unshift('Jeep', 'Toyota');
let popShift = arr.shift();
// console.log(popShift)
// console.log(arr);

const mainArr = ['Toyota', 'Volkswagen', 'Volvo', 'BMW', 'Audi', 'Tesla'];
let length = mainArr.length;
const carsBrands = mainArr.slice(1, 4);
const textBrands = mainArr.toString();
mainArr.reverse();

// console.log(mainArr);
//!---------------------------------------------------------------------------------
// forEach() //* Calls a function for each array element
// map() //* 	Creates a new array with the result of calling a function for each array element
// filter() //* Creates a new array with every element in an array that pass a test
// reduce() //* Reduce the values of an array to a single value (going left-to-right)
// find() //* Returns the value of the first element in an array that pass a test
// findIndex() //* Returns the index of the first element in an array that pass a test

let animals = [
  { name: 'Vasya', type: 'Cat', age: 4 },
  { name: 'Murka', type: 'Cat', age: 1.5 },
  { name: 'Varna', type: 'Turtle', age: 21 },
  { name: 'Kesha', type: 'Parrot', age: 3 },
  { name: 'Nayda', type: 'Dog', age: 2.5 },
  { name: 'Pufic', type: 'Humster', age: 2.5 },
  { name: 'Randy', type: 'dog', age: 12 },
];

for (let i = 0; i < animals.length; i++) {
  // console.log(animals[i])
}

for (let oneAnimal of animals) {
  // console.log(oneAnimal)
}

//====================forEach() ================================================
animals.forEach(function (oneAnimal, index, animalsArray) {
  // console.log(oneAnimal )    //*mostly used only the first parameter "oneAnimal"
});

animals.forEach((oneAnimal) => {
  // console.log(oneAnimal);
});

//! animals.forEach(oneAnimal => console.log(oneAnimal));

//===============================map()==========================================
const newAnimals = animals.map((oneAnimal, index, animalsArray) => {
  //  return oneAnimal    //*mostly used only the first parameter "oneAnimal"
  // return animalsArray
  // return index
  // return oneAnimal.name
  return `${oneAnimal.name} (${oneAnimal.age}) (${index})`;
});

// console.log(newAnimals);

const newAnimalsReduction = animals.map(
  (oneAnimal, index) => `${oneAnimal.name} (${oneAnimal.age}) (${index})`
);
// console.log(newAnimalsReduction);

const newAnimalsAge = animals.map((oneAnimal) => oneAnimal.age * 20);
// console.log(newAnimalsAge);

//=========================filter() =============================================
const longLivedAnimal = animals.filter((oneAnimal, index, animalsArray) => {
  if (oneAnimal.age >= 7) {
    return true;
  }
});
// console.log(longLivedAnimal);

const longLivedAnimalSecond = animals.filter((oneAnimal) => oneAnimal.age >= 7);

//================================reduce()========================================
let sumYearsAllAnimalsCycle = 0;
for (let i = 0; i < animals.length; i++) {
  sumYearsAllAnimalsCycle += animals[i].age;
}

let sumYearsAllAnimals = animals.reduce((total, oneAnimal) => {
  // console.log(total);
  return total + oneAnimal.age;
}, 0);
// console.log(sumYearsAllAnimals);

//================================find()===========================================
const randy = animals.find((oneAnimal) => oneAnimal.name === 'Randy');
const oldestAnimal = animals.find((oneAnimal) => oneAnimal.age > 12);
const typeCat = animals.find((oneAnimal) => oneAnimal.type === 'Cat');

//================================findIndex() ===========================================
const randyIndex = animals.findIndex((oneAnimal) => oneAnimal.name === 'Randy');
const oldestAnimalIndex = animals.findIndex((oneAnimal) => oneAnimal.age > 12);

//====================================

const thisAnimals = animals
  .filter((oneAnimal) => oneAnimal.age > 2.7)
  .map((oneAnimal) => {
    return {
      info: `${oneAnimal.name} | (${oneAnimal.age})`,
      type: oneAnimal.type,
    };
  });
console.log(thisAnimals);

//==========================================================================
