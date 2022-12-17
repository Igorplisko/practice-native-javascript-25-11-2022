// =============  Выбор DOM элементов =============  

// Выбор одного элемента DOM по селектору
// Будет выбрать первый найденный элемент. Поиск осуществляется с начала кода страницы, сверху вниз.
//document.querySelector('selector');

//!--------------------------------------------------------
document.querySelector('h2').classList.add('red');

const heading = document.querySelector('h1');
heading.classList.add('purple');

const heading1 = document.querySelector('.heading-1');
heading1.classList.add('green-text');
heading1.classList.add('black');

//нашли по классу класс и добавили другой класс
document.querySelector('.heading-v2').classList.add('purple');

//!--------------------------------------------------------
//Выбор коллекции элементов

const headingAll = document.querySelectorAll('h2');
//headingAll.classList.add('red-text') //? ERROR can't read properties of undefined

for (let headingOne of headingAll) {
  // console.log(headingOne)
  headingOne.classList.add('yellow-text');
}

//--------

const paragraph = document.querySelectorAll('p');

// for (let p of paragraph ){
//   p.classList.add('green-text'); 
// }

paragraph.forEach (function(item) {
item.classList.add('sky-blue-text')
})




//run this code in console
document.querySelector('h2'); //возвращает первый элемент ( Element ) документа, который соответствует указанному селектору
document.querySelectorAll('h2'); //возвращает статический (не динамический) NodeList , содержащий все найденные элементы документа, которые соответствуют указанному селектор

// console.log(oneHeader)
// console.log(header)

document.querySelector('h1'); //tag
document.querySelector('.header'); //class
document.querySelector('#footer'); //id

//? Также есть следующие методы
// ? document.getElementsByClassName('heading-v2'); // выбор Коллекции элементов по CSS классу
//? document.getElementsByTagName('p'); // выбор Коллекции элементов по Тегу
//? document.getElementById('id'); // выбор одного элемента по ID

//?Более сложный селектор
// const matches = document.querySelectorAll("iframe[data-src]");
// const matches2 = container.querySelectorAll("div.highlighted > p");
// const el = document.querySelector("div.user-panel.main input[name=login]");


