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

// console.log(a); //? true
// console.log(b); //? undefined

//!---------------------------------------
//*functional scope

const fancName = () => {
  let userName = 'Igor';
  // console.log(userName);
};

fancName();

// console.log(userName);

//!---------------------------------------
//*scope inside code block
{
  let userName = 'Jon';
  // console.log(userName);

  var someNumber = 10;
  // console.log(someNumber )

}

// console.log(someNumber)
// console.log(userName);

//!---------------------------------------