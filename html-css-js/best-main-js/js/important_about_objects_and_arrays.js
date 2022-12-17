//!  Ways to reverse an array:

//*Method number 1:
const array1 = [1, 2, 3, 4, 5, 6, 7];
const array2 = [];
function reverseArray(oldArray, newArray) {
  oldArray.forEach(function (item, index) {
    newArray.push(oldArray[oldArray.length - 1 - index]);
  });
  console.log(oldArray);
  console.log(newArray,);
}


reverseArray(array1, array2);

//?----------------------------------------------------


//*Method number 2:
let b = ['V', 'l', 'a', 'd']

function reverseArray(a) {
  res = [];
  a.forEach(element => {
    res.unshift(element);
  });
  return res;
}

console.log(reverseArray(b));


//?----------------------------------------------------

//*Method number 3:
let b = [1, 2, 3, 4, 5, 6, 7];

function reverseArray(a) {
  res = [];
  for (let i = a.length - 1; i >= 0; i--) {
    res.push(a[i]);
  }
  return res;
}

console.log(reverseArray(b));


//?--------------------------------------------------------




//!Ways to clone an array:


//*Method number 1:
let a = [1, 2, 3, 'a', 'b', 'c']        //! это медленая операция 
let b = JSON.parse(JSON.stringify(a));  //!'этот способ иногда ломает обьекты
console.log(b); //* Этот способ работает правильно и с обычными массисами и с вложенными масивами 

//?----------------------------------------------------


//*Method number 2:
let a = [1, 2, 3, 'a', 'b', 'c']
let b = [...a]  //спред оператор //!есть проблема с вложенными массивами (через вложеные массивы делается ссылание и это меняет старый массив )

console.log(b)

//?---------------------------------------------------

//*Method number 3:
let a = [1, 2, 3, 'a', 'b', 'c']
let b = a.slice();
console.log(b)
//!тоже есть проблема если будете клонировать вложеными массивы 

//?---------------------------------------------------

//*Method number 4:
let a = [1, 2, 3, 'a', 'b', 'c']
let b = [];

for (let i = 0; i < a.length; i++) {
  b[i] = a[i]
}
console.log(b)
//!тоже есть проблема если будете клонировать вложеными массивы 

//?---------------------------------------------------

//*Method number 5:
let a = [1, 2, 3, 'a', 'b', 'c']
let b = a.map(x => x);
console.log(b)
//!тоже есть проблема вложеными 


//?----------------------------------------------------

//*Method number 6:
let a = [1, 2, 3, 'a', 'b', 'c']
let b = a.filter(() => true);
console.log(b)
//!тоже есть проблема  вложеными 

//?----------------------------------------------------


//!WAYS TO COPY OR CLONE AN OBJECT:


//*Method number 1:
let person = {
  firstName: "John",
  age: 50,
  eyeColor: "blue"
};

let copy = Object.assign({}, person);
console.log(copy);

//?----------------------------------------------------

//*Method number 2:
let person = {
  firstName: "John",
  eyeColor: "blue"
};

let copy = { ...person };
console.log(copy);

//?----------------------------------------------------

//*Method number 3:
let person = {
  firstName: "John",
  age: 50,
  eyeColor: "blue"
};

let copy = JSON.parse(JSON.stringify(person));
console.log(copy);


//?----------------------------------------------------


//*Method number 3:
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

let objCopy = {};
for (let key in person) {
  objCopy[key] = person[key];    //!есть проблема с вложенными обьектами
  console.log(key + ": " + objCopy[key]);
}
//! работает только с преметивными обьектами

//?----------------------------------------------------



var target = {
  "A": {
    "Z": 1,
    "X": 2,
    "Y": {
      "F": 3,
      "G": 4    //?????????
    }
  }
};

target.__proto__.f = function () { };

var clone1 = Object.clone(target, false, true);
clone1.f //undefined
clone1.A == target.A //false

var clone2 = Object.clone(target, true);
clone2.f //function
clone2.A == target.A //true

//?-------------------------------------------------------------







//* Простой и наивный способ копирования объектов
const mainObj = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4,
  },
}


function copy(mainObj) {
  let objCopy = {}; // objCopy будет хранить копию mainObj
  let key;

  for (key in mainObj) {
    objCopy[key] = mainObj[key]; // копирует каждое свойство objCopy
  }
  return objCopy;
}



console.log(copy(mainObj)

  //?----------------------------------------------------------

//!

  //* СОЕДИНЕНИЕ ДВУХ ОБЪЕКТОВ В ОДИН:


//*Method number 1:
var a = { a: 1, b: 2, c: 3 };
var b = { a: 2, b: 2 };

console.log(Object.assign(a, b));   // result Object {a: 2, b: 2, c: 3}

//?----------------------------------------------------------


//*Method number 2:
Пример: слияние объектов
var o1 = { a: 1 };
var o2 = { b: 2 };
var o3 = { c: 3 };  //??????????

var obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1);  // { a: 1, b: 2, c: 3 }, изменился и сам целевой объект.

//?----------------------------------------------------------


//*Method number 3:

var a = {
  a: 1,
  b: 2,
  c: 3
}
var b = {
  a: 4,            //TODO нужно разобраться с этим кодом !
  c: 0,
  d: 10
}

objects = function (a, b) {
  var c = {},
    key;
  for (key in a) {
    if (a.hasOwnProperty(key)) {
      c[key] = key in b ? b[key] : a[key];
    }
  }
  return c;
}

 //?----------------------------------------------------------

