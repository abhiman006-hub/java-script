let arr=["shiv","shankar","mahadev","bhola"];
let brr=["sati","parvati","uma","gauri"];

// arr.push(brr);//push brr into arr as a element:
// console.log(arr);
// console.log(arr[4][2]);//brr=arr[4]--->arr[4][2]="uma"


console.log(arr.concat(brr));//merge brr into arr but do not cause changes in actual array arr;
console.log(brr);
console.log(arr);

let nrr=arr.concat(brr);//return new array
console.log(nrr);

let nwr=[...arr,...brr,...nrr];
console.log(nwr);


let mdr=[1,2,[3,4,[5,6,[7,8],9],10],11];//multi dimentional array
//to make a multi dimentional array into single dimentional array use flat method;
let flat_arr=mdr.flat(Infinity);//give index to which you want to get flatten array;
console.log(flat_arr);


//to find whether a variable is array or not ???
console.log(Array.isArray("abhiman"));//return true or false--->false
console.log(Array.isArray([1,3,5]));//return true;

//to convert antthing into array
console.log(Array.from("abhiman006"));//convert string into array
console.log(Array.from("234567"));//convert string into array
console.log(Array.from(3456));//return empty array , if it is possible to covert this into array


//new way to make array;
let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));//print array-->[100,200,300]