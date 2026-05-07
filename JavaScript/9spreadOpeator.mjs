let arr1 = [9, 10, 11, 12];
let arr2 = [13, 14, 12];

let arr3 = [8, arr1];
console.log(arr3); // [8, [9, 10, 11, 12]]

let arr4 = [8, ...arr1]; // spread operator ... OR it is also known as wrapper opener
console.log(arr4) // [8, 9, 10, 11, 12]

let arr5 = [...arr2, ...arr4];
console.log(arr5);

// spread in object
let info1 = {name: "Ram", age: 18};
let info2 = {address: "ktm"};

let info = {...info1, ...info2}
console.log(info)

let information = {name: "Hari", age: 10, name:"Sita"}; // Here last key value pair will override the first one so name will be Sita
console.log(information)