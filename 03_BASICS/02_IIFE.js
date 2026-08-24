//IIFE
//Immediately Invoked Function Expressions(IIFE);


//to call function just after declaration
//syntax: (function declaration and definition)();
//to remove global scope pollution of variables
(function chai(){
    //named IIFE
    console.log("calling function just after declaration");
})();//must give a semicolon after parenthesis;


//writing IIFE as arrow function 
//unNamed IIFE
( () =>  console.log("let's go for tea...!") )();//must give a semicolon after parenthesis;

//passing arguments
( (name) => console.log("my name is "+name))("abhishek kumar yadav")

//NOTE : two run two IIFE ---> must use semicolon;
function come(){
    console.log("come baby...!");
}
come();













