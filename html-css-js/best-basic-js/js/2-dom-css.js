// ================= Работа с CSS классами =================

/*
element.classList.add()
.add()
.remove()
.toggle()
.contains()
*/

const heading = document.querySelector('.heading-1');


heading.classList.add('sky-blue-text'); //мы не указываем точку, так как уже подразумевается что мы работаем с классом

// heading.classList.remove('sky-blue-text')

const heading3 = document.querySelector('.heading-3');
//run to console this code - toggle always returns "true" and "false"
//"true" - added class | "false" - removed class
heading3.classList.toggle('sky-blue-text');
heading3.classList.toggle('green');



const isContain = heading3.classList.contains('heading-3')
const isContain2 = heading3.classList.contains('sky-blue-text')
const isContain3 = heading3.classList.contains('green')
const isContain4 = heading3.classList.contains('head_d_d')
heading3.classList.add('red')
const isContain5 = heading3.classList.contains('red')





console.log(isContain)
console.log(isContain2)
console.log(isContain3)
console.log(isContain4)
console.log(isContain5)