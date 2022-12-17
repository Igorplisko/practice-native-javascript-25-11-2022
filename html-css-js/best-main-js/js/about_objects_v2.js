const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  sayHi:  function(nickname) {
    console.log(`${person} say hi ${person.firstName} ${nickname}  `)
  }
};

person.sayHi('FatIgor')

