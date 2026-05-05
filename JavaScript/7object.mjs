// let info = ["Ram", 18, false] -> here array is storing data but no info about it like we don't know what each thing is instead we can store like this:

// in this object we don't have concept of indexing tho
let info = {
    name: "Ram",
    age: 18,
    isMarried: false,
};
console.log(info);

console.log(info.name); // this is how we access each element
info.age = 19;
console.log(info.age);

info.address = "Kathmandu"; // Add another element
console.log(info);

delete info.isMarried;
console.log(info)