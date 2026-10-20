/*

const user={ // constructor function for this ==> User
    username:"abhsihek kumar",
    loginCount:8,
    SignedIn:true,

    getUserdetails:function(){
        console.log("Got user details :")
        console.log(this.username)// username of current object
      //  console.log(username)//ReferenceError: username is not defined
    }
}

const student={ // constructor function fo this=>Student
    username:"abhsihek kumar",
    loginCount:8,
    SignedIn:true,

    getUserdetails:function(){
        console.log("Got user details :")
        console.log(this.username)// username of current object
      //  console.log(username)//ReferenceError: username is not defined
    }
}


// console.log(user)

// user.getUserdetails()

// console.log(this)// vsCode={}  , browser=window Object


//constructor function

//A constructor function is a regular JavaScript function
// intended to create and initialize objects when called with new.

Student=function(username,loginCount,SignedIn){
    this.username=username
    this.loginCount=loginCount
    this.SignedIn=SignedIn

    //using extra function
    this.greeting=function(){
        console.log("welcome "+this.username);
    }

    return this;// may return or may not return this---> it will always return this
}


const user1=new Student("aman",5,true);// new is providing a new object
console.log(user1)
const user2=new Student("naman",15,false);
console.log(user1)
console.log(user2)

user1.greeting();// it will not throw any error
// because it is defined in constructor 
// function

//user2.getUserdetails();throws error because it is not defined in constructor 
//                       function


*/

/************************************************************* */





const college = {                                  // Create a parent object
    study: function() {                             // Define a common method
        console.log("Student is studying");         // Print a message
    }
};

const students = {                                   // Create another object
    username: "Abhishek",                            // Add its own property
    branch:"computer science and engineering"
};

Object.setPrototypeOf(students, college);             // Link student to college

console.log(students.username);                       // Abhishek
students.study();                                     // Student is studying
console.log(students.branch)


const parent={
    parentname:"ramu kumar",
    address:"shivaji chowk"
}

Object.setPrototypeOf(parent,students);//parent can access all properties and 
// methods of students

console.log(parent);
console.log(parent.username)
console.log(parent.branch)