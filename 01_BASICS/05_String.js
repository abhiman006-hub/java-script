const name="abhiman";
const value=456;

console.log(name+value);
console.log(name+"shekish"+name);

//string interpolation
console.log('hello my name is '+name+" and my value is "+value );

//string declaration

//method 1. --->provides multiple function;
const str1="abhishek";
let str2="kumar";

console.log(typeof str1,typeof str2);
console.log(str2.length);


//method 2.--->using as object --->provides multiple functions that can be used durectly
const str3=new String("abhi");
let str4=new String("seeta");
console.log(typeof str3,typeof str4);

console.log(str4.length);


//using features of string;
let s="om namah shivay!";
console.log(s.length);

console.log(s);
console.log(s.toUpperCase());//do not cause changes in actual string;
console.log(s);

let st=new String("har har mahadev");
console.log(st);
console.log(st.toUpperCase());//do not cause any change in actual string
console.log(st);

console.log(st.charAt(5));//char at index=5;
console.log(st.indexOf('r'));//index of char='r'
console.log(st.substring(0,9));//start=0 end=9-->end is excluded
console.log(st.slice(0,9));
console.log(st.slice(-14,7));

let strr="    alpha numeric    ";
console.log(strr);
console.log(strr.trim());//remove starting and ending spaces
console.log(strr.replace("pha","xxx"));//replace "pha" with "xxx";
console.log(strr.includes("pha"));//if "pha" is present in strr-->true , else "pha" is not present-->false;

console.log(strr.split)