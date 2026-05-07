// map loop
let arr1 = [10, 20, 30];

// Map is used for arrays

//                     10, 0 (i is index)
//                     20, 1
//                     30, 2
let arr = arr1.map((item, i)=>{
    return 4;
});
console.log(arr);

let arrr = arr1.map((item, i)=>{
    return item*i;
});
console.log(arrr);

// [10, 20, 30] -> [20, 40, 60] => map is used for modifying arrays where same i/p length and o/p length plus both are arrays
let arr4 = [10, 20, 30];

let doubled = arr4.map((item, i)=>{
    return item*2;
});
console.log(doubled);

// [20, 30, 10, 5] -> [] if >=18 multiply by 2 else by 0
let arr5 = [20, 30, 10, 5];

let pattern = arr5.map((item, i)=>{
    if(item>=18)
        return item*2;
    else
        return item*0;
});

console.log(pattern)