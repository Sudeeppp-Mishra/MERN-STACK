// First Class Function i.e., a variable storing function
let func1 = () => { /* Arrow Function Definition */
    console.log("Function")
};

console.log("idk")
func1();
func1; // Not a right way to call function


/* Passing values through function */
let studentInfo = (name, roll, program) =>{
    console.log(name, roll, program)
};

studentInfo("Ram Sha", 23, "BE-Computer")
studentInfo("Hari Jha", 25, "Bsc.CSIT")