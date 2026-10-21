/*

const user={
    username:"abhishek",
    email:"abhishek@gmail.com",

    greet:function(){
        console.log("hello "+this.username);
    }
}

// object=user
console.log(user);

for (let [key,value] of Object.entries(user)) {
    if(typeof(value) !== 'function'){
    console.log(key+" "+value);
    }
}

console.log(Object.getOwnPropertyDescriptor(user,"email"));
/* output:
{
  value: 'abhishek@gmail.com',
  writable: true,
  enumerable: true,
  configurable: true
}
*/

/*

Property	  Meaning	When it is true
value	      The property's current value	                                  Here, the value is 'abhishek@gmail.com'
writable	  Whether the value can be changed	                              You can assign a new email
enumerable	  Whether the property appears in enumeration	                  It appears in Object.keys() and for...in
configurable  Whether the property can be deleted or its descriptor changed	  You can delete the property or modify its descriptor


Enumeration means visiting each property in that list.
*/

/*
// we can change the properties of a field of objects

Object.defineProperty(user,"email",{
    writable:false,// email cannot be changed
    enumerable: false,// cannot be visited during loop
    configurable:false// cannot be deleted
})

console.log(Object.getOwnPropertyDescriptor(user,"email"));
for (let [key,value] of Object.entries(user)) {
    if(typeof(value) !== 'function'){
    console.log(key+" "+value);
    }
}


*/

/***************************************************** */
//changing the value of PI

let description=Object.getOwnPropertyDescriptor(Math,"PI");
console.log(description);


//give proper reason
//The proper reason is: JavaScript does not
//  allow a non-configurable, 
// non-writable property to become writable or configurable. Your code attempts both changes, so Object.defineProperty() throws a TypeError. 
Object.defineProperty(Math,"PI",{
    writable: true,
    configurable:true,
    enumerable:true
})// throws an error

console.log(Math.PI);//3.141592653589793
