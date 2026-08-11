//date and time
let mydate=new Date();//Date is an Object;
console.log(typeof mydate);
console.log(mydate);
console.log(mydate.getDate());
console.log(mydate.getDay());
console.log(mydate.getFullYear());
console.log(mydate.getMonth());


console.log(mydate.toDateString());
console.log(mydate.toLocaleTimeString());
console.log(mydate.toLocaleDateString());


let myCreatedDate=new Date(2026,5,13,12,34,31);//yaer,monthIndex,date,hours,mins,secs,milliSec
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleDateString());
console.log(myCreatedDate.toDateString());

let myCreatedDate2=new Date("2026-11-13");//"YYYY-MM--DD"  or "DD--MM-YYYY"
console.log(myCreatedDate2.toDateString());