
/*


class user{ // Defines the user class
    constructor(username){ // Runs when an object is created
        this.username=username; // Calls the username setter
    } // Ends the constructor

    get username(){ // Defines the getter
        return this.username; // Calls the same getter again and again---> stack overflow
    } // Ends the getter

    set username(value){ // Defines the setter
        this.username=value; // Calls the same setter again and again--->stack overflow
    } // Ends the setter
} // Ends the class

const user1=new user("Abhi"); // Causes infinite setter recursion


*/

/*
  NOTE:
    1> this.username ---> call getter function 
    2> this.username=username----> call setter function

*/


class user{ // Defines the user class
    constructor(username){ // Runs when an object is created
        this._username=username; // Stores the value without invoking the username setter
    } // Ends the constructor

    get username(){ // Defines the getter
        return this._username; // Returns the stored value
    } // Ends the getter

    set username(value){ // Defines the setter
        this._username=value; // Updates the stored value
    } // Ends the setter
} // Ends the class

const user1=new user("Abhi"); // Creates the object successfully
console.log(user1.username); // Output: Abhi
user1.username="Rahul"; // Calls the setter
console.log(user1.username); // Output: Rahul

console.log(user1._username);


/*
Syntax	    Meaning
username	Ordinary public property
_username	Public property conventionally intended for internal use
#username	Truly private class field
*/


/*************************************************** */

//getter and setter using constructor function

let Student=function(name,roll,age){

    this.name=name;// do not have getter and setter , so it will be used as usual
    this._roll=roll;// have getter and setter , so it will used as underscore convention
    this._age=age;// have getter and setter so it will be used as undrscore convention

    // getter and setter 
    Object.defineProperty(this,"roll",{
        get: function(){
            return this._roll;
        }
        ,
        set: function(value){
            this._roll=value;
        }
    })
}


let s1= new Student("abhi",27,18);
console.log(s1);
console.log(s1.roll)
console.log(s1.name)


/************************************************** */
// getter and setter directly inside object

let man={
    _name:"yadav",
    _age:89,

    get name(){
        return this._name;
    }
,
    set name(value){
        this._name=value;
    }
}

console.log(man);
console.log(man.name)