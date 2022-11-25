//!---------------------------------------
let a;
let b;

function myF() {
  let b;
  a = true;
  b = 10;
  //  console.log(b)   //? 10
  //  console.log(a)  //? true
}

myF();

console.log(a); //? true
console.log(b); //? undefined

//!---------------------------------------
