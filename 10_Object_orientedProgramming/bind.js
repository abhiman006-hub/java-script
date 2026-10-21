class user{ // Defines a class named user
    constructor(username,email){ // Runs when a new object is created
        this.username=username; // Stores username in the current object
        this.email=email; // Stores email in the current object
    } // Ends the constructor

    greet(){ // Defines a method on the class prototype
        console.log("welcome "+this.username); // Prints the username of the current this object
    } // Ends the greet method


    print(message){
        console.log(message+" "+this.username);
    }



} // Ends the class

let user1=new user("abhiman","abhi@gmail.com"); // Creates a user object
console.log(user1); // Prints the user object

// let newgreet=user1.greet;this in newgreet refering to which object

let newgreet=user1.greet.bind(user1); // Creates a function with this permanently bound to user1
newgreet(); // Calls the bound function

let newPrint=user1.print.bind(user1,"hello");// Creates a function with this permanently bound to user1 and message hello
newPrint();

let newprint2=user1.print.bind(user1,"radhe radhe..");// Creates a function with this permanently bound to user1 and message radhe radhe
newprint2()


//****************************************************** */

// syntax:// General syntax
//let newFunction=originalFunction.bind(thisValue,arg1,arg2,...);

/*
// Bind a function to an object
let newFunction=originalFunction.bind(object);

// Execute the bound function later
newFunction();
*/


//Note: bind returns a new function,not execute the function immediately