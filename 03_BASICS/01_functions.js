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
