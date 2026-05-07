// Array Destructure
let [a, b, c] = [10, 11, 12];

console.log(a);
console.log(b);
console.log(c);

// Object Destructure
/* let {name, weight, isMarried} = {name: "Ram", weight: 47, isMarried: false}

console.log(name);
console.log(weight);
console.log(isMarried); */

let {isMarried, name, weight} = {name: "Shyam", weight: 40, isMarried: true}; // Here first it checks if isMarried is inside object or not then put the value
console.log(name);
console.log(isMarried);
console.log(weight);

// In object order does not matter