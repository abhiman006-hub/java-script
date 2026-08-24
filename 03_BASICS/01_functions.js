//function declaration :
/*

function function_name(parameters){
        
        //code

}



*/

function add(a,b){
    return a+b;
}

function greet(){
    console.log("Om Namah Shivay !")
}

function help(){
    return "helper coming soon...!";
}

console.log(help());
greet();

console.log(add(100,9876));

//function reference ---->function_name
//function execution -----> function_name()

console.log(add);
console.log(help);

function LoginUserMessage(username){
    return username+" just logged in !";
}

console.log(LoginUserMessage("abhishek"));


function SignUp(username){
    if(username===undefined){
        console.log("Please enter a username...!");
    }
    else if(username==="abhishek"){
        console.log("You have already an account...")
    }
    else{
        console.log(username+" Signed In");
    }
}

SignUp("abhishek");
SignUp("shiv");


if(!undefined){
    console.log("This is true Statement");
}

function checkUser(username="abhi"){//if no username is passed , then abhi will be passed;
    console.log(username+" is present.");
}

checkUser();
checkUser("abhiman");
let name;
checkUser(name);//name is undefined so abhi is present will be printed;


// variable size array;
// using array as parameter
function TotalBill(...price){
    //price is a variable size array;
    sum=0;
    for( i=0;i<price.length;i++){
        sum=sum+price[i];
    }
    return sum;
}

console.log(TotalBill(10,23));

//using object as parameter;

let BioDetails={
    name:"abhishek kumar yadav",
    height:"6 feet",
    weight:"70 kgs",
    address:"aurangabad"
}

let InstaUser={
    id:"abhiman006",
    name:"abhishek kumar yadav",
    followers:56
}

//passing object as parameter 
function Details(anyobject){
    console.log(anyobject.name);//undefined if name is not present
    console.log(anyobject.id);//undefined if id is not present
}

Details(InstaUser);
Details(BioDetails);

Details({
    name:"kartikeya",id:"kartikeya456",address:"nasripallu"
});


//passing array as parameter
let arr=["abhishek","gourav","manaish","aaditya"]
function IsLoggedIn(arr){
    console.log(arr);
}

IsLoggedIn(["radhe","krishna","shiva","parvati"]);

//++++++++++++++++++++++++++++++Interesting++++++++++++++++++++++++++++++++


//function declaration

//method 1.
//function call be anywhere,above or below declaration;
console.log(addOne(7));//8
function addOne(num){
    return num+1;
}
console.log(addOne(3));//4


//method 2.
//function call only below declaration
//storing function in a variable
// let function_name=function(parameters){ // code ...}
// function call ----->>>> function_name(local variable);

//console.log(addTwo(5));---->cannot call before declaration --->>>ERROR
let addTwo=function(nums){
    return nums+2;
}
console.log(addTwo(4));//6


//*************************************SCOPE *********************** */

//scope of variable={...............variable declared inside a block is valid only in that block}




//use of this keyword
//this----->current object
//to use object keys inside object ---> this.key;
let nwuser={
    id:"abhiman006",
    password:"abhi_pro",

    greet:function(){
        console.log(this.id+" ,welcome to javaScript World...");
        console.log(this);//this--->object //this.key=object_name.key
    }

}

nwuser.greet();
nwuser.id="abhishek";
nwuser.greet();
console.log(this);//{}

function chai(){
    console.log(this);
}

chai();
//output
/*<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    Symbol(nodejs.util.promisify.custom): [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    Symbol(nodejs.util.promisify.custom): [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter],
  navigator: [Getter],
  sum: 33,
  i: 2
}
  */

//arrow functions

// const welcome=function(){
//     console.log("you are welcomed...!")
// }

/*
    //arrow function declaration 

    //method 1.
    let function_name = () =>{
        //code
    }

    //method 2.
    let function_name = (parameters) => console.log("hello world!");


*/

const welcome = () => {
    console.log("you are welcomed...!");
    console.log(this);//{}
    console.log(this.id);//undefined
}

welcome();//functional call

const call= () => console.log("om namah shivay...");

call();

const Twosum = (num1,num2) =>  (num1+num2);//using parenthesis don't use return statement

console.log(Twosum(7,9));

const TwoPro = (num1,num2) => {
    return num1*num2;//using curly braces ,use return statement
}

console.log(TwoPro(7,8));

//returning object
const person = (name,dob) => ({id:name+dob,pass:dob+name});

console.log(person("abhi","2006"));


















