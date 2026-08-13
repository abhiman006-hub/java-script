//obect declaration

// method 1. object literals

let mySym=Symbol("key");
let mySym2=Symbol("mahadeva");

let user={
    //key:value ----->access : user.key=value
    //key is treated as string; access---> user["key"];
    name:"abhiman",
    email:"abhishek@gmail.com",
    id:"2025pqrt34",
    IsLoggedIn:true,
    LastLogindays:["monday","friday","sunday"],
    "height":"6 feet",

    //using symbol as keys;
    mySym:"ohh my god !!!",//this is not correct way to use symbol as key;

    [mySym2]:"used as symbol"//correct way to use  symbol as key



}//user-------->{} , obeject={} , user is reference to object;

console.log(user);//print whole object with key and value
console.log(user.email+" "+user.id+" "+user.name);
console.log(user["email"]+" "+user["id"]+" "+user["name"]);
console.log(user.height);


console.log(user.mySym);//being used as string;
console.log(typeof user.mySym);//string

console.log(user.mySym2);//not correct way to access
console.log(typeof user.mySym2);//undefined

console.log(user[mySym2]);//not correct way to access
console.log(typeof user[mySym2]);//undefined


//changes in the attributes of object;
user.height="8 feet";
console.log(user);

//if you freeze the object , there will be no further changes;
Object.freeze(user);//freezing user ---->no further changes
user.email="radha@gmail.com";//no chnage
console.log(user);


/*
 output


{
  name: 'abhiman',
  email: 'abhishek@gmail.com',
  id: '2025pqrt34',
  IsLoggedIn: true,
  LastLogindays: [ 'monday', 'friday', 'sunday' ],
  height: '8 feet',
  mySym: 'ohh my god !!!',----->>>not used as symbol ---->>>NOTICE ---
  Symbol(mahadeva): '----->>>used as symbol' ----->NOTICE ---
}
*/

/**************************************FUNCTION****************************** */
/*

       :way to declare a function:

       function function_name(parameters){

            //code


            return ( );
       }



*/


function add(a,b){
    console.log("om namah shivay !!!")
    console.log("narayana....!")
    return a+b;
}

console.log(add(6,9));


let manager={
    greet:function(){
        console.log("good morning !");
    }
    ,

    order:function(){
        console.log("that's my order");
    }

    ,

    gratitude:function(){
        console.log("thank you very much ...........!")
    }

    ,
    show:function(){
        console.log(this.gratitude());
        console.log(this.greet());
        console.log(this.order());
    }
}

manager.gratitude();//this function is getting called
manager.show();//this function is getting called
