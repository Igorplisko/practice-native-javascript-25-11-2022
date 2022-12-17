// ================================  Выбор DOM элементов =====

// Выбор одного элемента DOM по селектору
// Будет выбрать первый найденный элемент. Поиск осуществляется с начала кода страницы, сверху вниз.
//document.querySelector('selector');

//run this code in console
document.querySelector('h2');  //возвращает первый элемент ( Element ) документа, который соответствует указанному селектору 
document.querySelectorAll('h2')  //возвращает статический (не динамический) NodeList , содержащий все найденные элементы документа, которые соответствуют указанному селектору

const oneHeader = document.querySelector('h2');
const header = document.querySelectorAll('h2')

console.log(oneHeader)
console.log(header)




















// const h2headings = document.querySelectorAll('h2');
// for (heading of h2headings) {
// 	console.log(heading);
// 	heading.classList.add('green');
// }



document.querySelector('h1'); //tag
document.querySelector('.header'); //class
document.querySelector('#footer'); //id

//?Более сложный селектор
// const matches = document.querySelectorAll("iframe[data-src]");
// const matches2 = container.querySelectorAll("div.highlighted > p");
// const el = document.querySelector("div.user-panel.main input[name=login]");

//? Также есть следующие методы
// document.getElementsByClassName(); // выбор Коллекции элементов по CSS классу
// document.getElementsByTagName(); // выбор Коллекции элементов по Тегу
// document.getElementById(); // выбор одного элемента по ID

