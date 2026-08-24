// if else conditions


/*

if(condition 1){
    //execute if condition 1 is true;
}
else if(condition 2){
    //execute if condition 2 is true;
}
else if(condition 3){
    //execute if condition 3 is true;
}
.
.
.
.
else{
    //execute if none of the above codes gets executed
}


*/


//// //switch case:
// let key="16";
// switch(key){
//     //case value: This will execute if key===value
//     case "abhishek":console.log("hello abhishek !");
//     break;

//     case "abhiman":console.log("hello abhiman !");
//     break;

//     case "shiva":console.log("hello shiva");
//     break;

//     case 16:console.log("hello roll 16");
//     break;

//     default:console.log("No match found");
//     break;
// }


//falsy value
// false, 0, -0, BigInt 0n, "", null, undefined, NaN
if(NaN)console.log("hello "),console.log(" World ...!");//do not execute

if(!NaN)console.log("hello "),console.log(" World ...!");//execute

if(!undefined)console.log("om namah shivay...!");

if("")console.log("empty string");

if(!"")console.log("sorry bhai...");

if(!"abhiman")console.log("sorry guys..");


//truthy value
// "0" , "false" , " " ---> any string, []--->empty arrray , {}--->empty object ,function(){}

if([])console.log("empty array");
if({})console.log("empty object..");
if(function(){})console.log("empty function");


//empty object and array
let arr=["abhishek",14,"keys"];
if(arr.length===0)console.log("arr is empty");

let obj={};
if(Object.keys(obj).length===0)console.log("object is empty");//Object.keys(object_name)-->
//convert object into array

console.log(false==0);//true
console.log(false===0);//false
console.log(false=="");//true
console.log(false==="");//false
console.log(0=="");//true
console.log(0==="");//false


//Nullish Coalescing operator (??) null undefined
let val1=5 ?? 7 ?? 9;
console.log(val1);

let val2=null ?? undefined ?? 78 ?? 76;//take first value which is null and defined also
console.log(val2);

let val3 = null ?? undefined ?? null ?? undefined ?? 60 ?? 56;
console.log(val3);


//terniary operator
// condition ? true : false ;
5>=2 ? console.log("yes"):console.log("NO");


