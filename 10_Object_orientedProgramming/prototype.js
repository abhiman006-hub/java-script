// steps to create objects:
// 1: define constructor function to initialize the property of objects
//    constructor function do not initailsize all properties
// 2. create objects using constructor function



//step 1:defining constructor function
let User= function(username,IsLoggedIn,LoginCount){

    // under constructor function, if we want to use current object properties,
    // use this keyword at the place of current object

    this.username=username;// initialising username of current object
    this.IsLoggedIn=IsLoggedIn;
    this.LoginCount=LoginCount;

    return this;
}

console.log(typeof User);//function

// step 2:creating objects using constructor function
let user1=new User("abhishek",true,89);// new keyword is used create new objects
let user2=new User("abhiman",false,0);// new keyword is used create new objects

console.log(user1);
console.log(user2);

// adding new property to user1 only
user1.height=170;
console.log(user1.height);//170

//1. adding new property to constructor function:---> accessed by all objects declared using
//   constructor function
//2 .prototype is a property of constructor function
 User.prototype.greeting=function(){

    // User is a constructor function,to access object properties of objects
    //declared using User inside User , use this keyword
    console.log("welcome "+this.username);//this.usename 
 }


 user1.greeting();
 user2.greeting();


 // Object() is a constructor function to create new objects
 // adding new property to Object() constructor function

 Object.prototype.NewPro=function(){
    console.log("new property has been added to Object");
 }

 // since everything is object , so we can access this property by every object

 // random object
 user1.NewPro()


 //strings as objects
 const str="abhiman006";
 str.NewPro()

 //functions as objects
 User.NewPro()


 // NewPro() has been added tob every object that exists


 // prototypal inheritance

 //==> accessing the property of one object into another object

 const child={
    name:"abhishek",
   //method1: __proto__:parent// inherit property of parent into child
 }

 const parent={
    parentName:"manoranjan"
 }

 //method2:modern syntax 
 Object.setPrototypeOf(child,parent);//inherit property of parent into child

 let strr="abhiman      ";
 String.prototype.trueLength=function(){
    //1. to use the objects declared uisng String "constructor function"
    //during adding new function into String , use this keyword
    console.log(this)// current object
    console.log("true length is : "+this.trim().length)
    return this.trim().length;
 }

 strr.trueLength();//7

