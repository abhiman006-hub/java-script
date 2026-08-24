// loop : for in

//use of for in loops in object:
let obj={
    // key:value
    // obj[key]=value;
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    kt:"kotlin"
}
for (const key in obj) {
    console.log(key);//print object key
    console.log(obj[key]);// print ibject values
    console.log(obj.key);//undefined because it searches for "key"
     console.log();
}


//use of for in loops in arrays
let arr=["abhiman","abhishek","manish","trishul"]
for (const key in arr) {
   
    console.log(key);//print keys of arrays
    console.log(arr[key]);//print elements of array
}


// Note : don't use for in loop on maps;