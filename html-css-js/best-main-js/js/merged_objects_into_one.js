//Merged_objects_into_one
const obj1 = {
    firstName: "John",
    lastName: "Doe",
    age: 12,
    eyeColor: "blue"
}
const obj2 = {
    firstName2: "Igor",
    lastName1: "Doeoooooo",
    age: 502,
    eyeColor: "yelow"
}


//! спред оператор
let merged = {
    ...obj1,
    ...obj2
};
console.table(merged);

console.log('--------------------------------------------------------------------------------------------------------------------------------------------------')

//!Object.assing()  
let merged2 = Object.assign({},
    obj1, obj2);

console.table(merged2)

console.log('--------------------------------------------------------------------------------------------------------------------------------------------------')


//! ES5 cicle 'for'
var merged3 = {};
for (var attr in obj1) {
    merged3[attr] = obj1[attr];
}
for (var attr in obj2) {
    merged3[attr] = obj2[attr];
}
console.table(merged3)

