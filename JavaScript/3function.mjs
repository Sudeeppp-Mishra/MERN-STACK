// First Class Function i.e., a variable storing function
let func1 = () => { /* Arrow Function Definition */
    console.log("Function")
};

console.log("idk")
func1(); // Function call
func1; // Not a right way to call function


/* Passing values through function */
let studentInfo = (name, roll, program) =>{
    console.log(name, roll, program)
};

studentInfo("Ram Sha", 23, "BE-Computer")
studentInfo("Hari Jha", 25, "Bsc.CSIT")

/*Undefined Values*/
let studentInformation = (name, roll, program)=>{
    console.log(name, roll, program)
};

studentInformation("Ram"); // Undefined values for roll and program

/* Default Values */
let stdInfo = (name, roll, program="BE-Computer")=>{
    console.log(name, roll, program)
};

stdInfo("Hari"); // One undefined and another is default
stdInfo("Ram", 18); // Default
stdInfo("Shyam", 19, "BE-Civil")

let func = () => {
    console.log("idk")
    return 4;
    console.log("idk again");
};

func(); // only prints idk 
console.log(func()); // prints both returned value and first "idk" but won't execute anything that after return cuz it returns from there
//OR
let returnedValue = func()
console.log(returnedValue)