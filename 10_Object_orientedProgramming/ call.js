// * Constructor borrowing: User.call(this, ...)
//   lets one constructor reuse another constructor's initialization logic


// first consstrutor function
let bio=function(username,age,height){
    // initialising object properties
    this.username=username;
    this.age=age;
    this.height=height;
    console.log("called")
}

//second constructor function in which first constructor function is used
// to initialize properties of object
let address=function(username,age,height,city,state,country){

   // initialsing username,age,height using first constructor function:
   // bio(username,age,height);---> it will not initialize after being called
   
   bio.call(this,username,age,height);//calling bio and saying to use its context

    this.city=city;
    this.state=state;
    this.country=country;
}


const user1=new address("abhi",67,190,"aurangabad","bihar","india");
console.log(user1);






/*

Step 1
Create the object

new address(...) creates a new object, and "this" inside 
address refers to that object.


Step 2
Call bio() normally

## bio(username, age, height) does not receive
   the address object's this automatically.

- In strict mode, this inside bio is undefined,
 so assigning this.username causes a TypeError.
 (because there is no any object of first constructor)

- In non-strict mode, this generally becomes the
 global object, so properties may be assigned there instead.


Step 3
Use bio.call(this, ...)

## Now bio executes
  with the same this as address, so the properties are assigned to the object being constructed.


*/