//Arrays in detail

let arr=[45,32,87,"abhiman","shaktiman",true,987];//let arr=[element1,element2,,,,,element'n']
let brr=new Array(45,32,87,"abhiman","shaktiman",true,987);//array_name=brr
let crr=new Array("mahadev","vishnu","krishna","balram","durga","parvati");

//access by indexing;
console.log(arr[5]+" "+brr[3]+" "+crr[2]);
console.log(arr.length);
console.log(brr.length);


//array methods

console.log(arr);//print whole array
console.log(brr);//print whole array
console.log(crr);//print whole array

arr.push("shivSati");
console.log(arr);
arr.push("ShivShankar");
console.log(arr);
arr.pop();//pop last element

// arr.unshift("umaShankar");//add in the startaing
arr.shift();//remove first element
arr.shift();//remove first element
console.log(arr);


console.log(arr.includes("abhiman"));//"abhiman" is present in the array as element
console.log(arr.indexOf("abhdiman"));//give index of element if present -->otherwise -1;

//converting array into string :
let newArr=arr.join();//newArr is a string ;join convert arr into string

console.log(arr);
console.log(newArr);//newArr is a string

//slice and splice

let arrr=[3,4,5,6,7,8,9,10];
console.log("A : "+arrr);

//slice
console.log(arrr.slice(2,6));//start=2 ,end=6->not included
console.log("B : "+arrr);

//splice
console.log(arrr.splice(2,6));//start=2 ,end=6->remove from actual array;
console.log("C : "+  arrr);//after splice---> arrr becomes-->arrr=[3,4]









