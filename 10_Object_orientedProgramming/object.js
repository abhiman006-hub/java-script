// everything in javascript is an object

/*

prototype of:

array------>object------>null
string----->object---->null
function----->object---->null

*/

function add4(num){
    return num+4;
}


//adding new property to an object, add4 is being treated as object
add4.power=2

// console.log(typeof add4)// function 
// console.log(typeof add4.prototype)//prototype of a funtion is an object
// console.log(add4.prototype)//{}
// console.log(add4.power)



//***prototype in detail***//

const child={
    name:"abhishek",
    age:20,

    getDetails:function(){
        console.log("details : ",this.name,this.age);
    }
}

//creating prototype of child

const parent={
    parentname:"manoranjan kumar",
    parentage:45,

    getParDetails:function(){
        console.log("details :",this.parentname,this.parentage)
    }
}

Object.setPrototypeOf(child,parent);// child can access all the properties of parent


console.log(child);// print child object and its properties but
// not its prototype properties

// adding new property and method to child object
child.height=160
child.greeting=function(){
    console.log("welcome "+this.name);
}

console.log(child)// height and greeting is added to child object
console.log(Object.getPrototypeOf(child))//parent object
console.log(typeof child.prototype)// .prototype is a propetry of a constructor function


//Student.prototype → the prototype object associated with a constructor function.

//Object.getPrototypeOf(child) → the actual prototype of an object.

//child.prototype → undefined unless you explicitly create a property named prototype on child.

// // accessing the properties of prototypes of child
// console.log(parent)
// console.log(child.parentname)
// //child.prototype.weight=78;
// console.log(parent)

// // adding increase function to prototype of child
// Object.getPrototypeOf(child).increase=function(){
//     console.log("your age increased by one yaer");
// }

// console.log(parent)