// //date and time
// let mydate=new Date();//Date is an Object;
// console.log(typeof mydate);
// console.log(mydate);
// console.log(mydate.getDate());
// console.log(mydate.getDay());
// console.log(mydate.getFullYear());
// console.log(mydate.getMonth());


// console.log(mydate.toDateString());
// console.log(mydate.toLocaleTimeString());
// console.log(mydate.toLocaleDateString());


// let myCreatedDate=new Date(2026,5,13,12,34,31);//yaer,monthIndex,date,hours,mins,secs,milliSec
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleDateString());
// console.log(myCreatedDate.toDateString());

// let myCreatedDate2=new Date("2026-11-13");//"YYYY-MM--DD"  or "DD--MM-YYYY"
// console.log(myCreatedDate2.toDateString());

/************************************************************************************* */

//timestamp--->millisecond calculated from jan 1,1970, 00:00:00 UTC

let timeStamp=Date.now();//timeStamp is a number;
console.log(timeStamp);
console.log(timeStamp.toLocaleString());

console.log(typeof timeStamp);

let myDate=new Date();
console.log(myDate.getTime());//give millisecond ;
console.log(Math.floor(myDate.getTime()/1000));//give total seconds from 1 jan ,1970

//to compare two dates use millisecond format;

let newDate=new Date();//newDate-->Current date and time;
console.log(newDate);
console.log(newDate.toDateString());//current date and time

console.log(newDate.getDate()+" om namha shivay"+" "+newDate.toLocaleTimeString());











