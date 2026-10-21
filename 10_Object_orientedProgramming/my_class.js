// class in javascript

class user{

    // here user is a class, but internally user is a constructor function 
    // used to initialize object properties 

    // calling constructor
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
    }

    //methods of objects
     
    getUserName(){
        console.log(this.username);// this refers to current object
    }
    encryptPass(){
        console.log("man"+this.password+"abhi");
    }
}


// making objects of class 
const user1=new user("abhiman","abhim@gmail.com","xyz34");

console.log(user);// class user ----> internally user is treatd as constructor function
console.log(typeof user)// function

console.log(user1);
console.log(user1.password);
user1.encryptPass();


// adding new property to user1
user1.greet=function(){
    // to use the properties of current object , use this keyword
    console.log("welcome "+this.username);
}


user1.greet();//welcome abhiman


/*************************************************************************** */
// behind the scene of class user ---->>> constructor function User

let User=function(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password;

    // return this
}

// adding new methods to User constructor function
User.prototype.GetUserName=function(){
    console.log(this.username);
}

// adding another new property to User constructor function
User.prototype.EncryptPass=function(){
    console.log("man"+this.password+"abhi"); 
}

const User1=new User("radha","krishna@gmail.com",5678);
console.log(User1);
User1.EncryptPass()


