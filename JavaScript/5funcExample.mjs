/*
make a function named
prepo
it takes one input 
if input is male => return He
else input is female => return She
else => return they
*/
let prepo = (gender) => {
    if(gender==="male")
        return "He";
    else if(gender==="female")
        return "She";
    else
        return "They";
};

console.log(prepo("male"));