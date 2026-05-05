/*
make a function named
canVote
pass one input
if the input is >=18 return "can vote"
else return "can not vote"
*/

let canVote = (age) => {
    if(age>=18)
        return "Can Vote!";
    else
        return "Can not vote!";
};

console.log(canVote(18));