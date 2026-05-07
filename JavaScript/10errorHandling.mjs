try{
    console.log("Try Block executes at first!");
    console.log(name); // error: variable not defined
    console.log("IDK"); // This won't be executed as there is error in above line
} catch(error){
    console.log("Catch Block: Executes when error occurs!");
    console.log("error:", error); // will show whole object error
    console.log(error.message); // shows what is the error actually
}