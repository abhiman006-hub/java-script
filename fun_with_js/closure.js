let name="abhishek";// declared globally

function print(){
    console.log(name);// global can be accessed anywhere
}

print();

/************************************* */
// Declare a global variable
let message="Global"; // Global scope

// Define an outer function
function outer(){ // Creates an outer scope
    let message="Outer"; // Local to outer

    // Define an inner function
    // lexical(outer) scope:an inner function can access variables defined in its own scope and in its outer (parent) scopes.
    function inner(){ // Lexically nested inside outer
        console.log(message); // Looks for message where inner was defined
    } // Ends inner

    return inner; // Returns the function
    //not returning only function,  returning lexical scope of inner function
} // Ends outer

//Closure: A closure is when an inner function remembers the variables of its outer function, even after the outer function has finished executing.
// Store the returned function
let result=outer(); // outer finishes executing

// Call the returned function
result(); // Output: Outer



// real life use: when we have to return function reference(function_name)