//different types of loop in javascript

// for of :string / array / object

//  for (const element of array/object/string) {
//  console.log(element);
//  }


/**********array*************** */

let arr=["abhiman","abhishek","trishul","khyati","manish"];

// traverse element of array,string ,object
for (const element of arr) {
    console.log(element);//element = element of array,string ,object;
}


/************String************* */
let str="abhiman006";
for (const element of str) {
    console.log("each char is : "+element);
}

/***************object********** */
let obj={
    name:"abhishek",
    branch:"CSE",
    year:2,
    semester:3
}

//Note : object is not iteratable

for(const element of Object.keys(obj)){
    console.log(element);
}
for(const element of Object.values(obj)){
    console.log(element);
}

/**************map*************** */


const mp = new Map();//mp is a map ; mp is an object of Map()
//order of map : order of insertion
mp.set("name","abhishek");
mp.set("branch","CSE");
mp.set("year",2);
mp.set("semester",3);

//function --> set(key,value), get(key), has(key), delete(key)
// iteration
for (const element of mp) { //element =[key , value]
    console.log(element);
}

//output:
// [ 'name', 'abhishek' ]
// [ 'branch', 'CSE' ]
// [ 'year', 2 ]
// [ 'semester', 3 ]


for (const [key,value] of mp) {
    console.log(key,value);
}

//output:
// name abhishek
// branch CSE
// year 2
// semester 3

for (const [key] of mp) {
    console.log(key);
}
//output:
// name
// branch
// year
// semester


for (const [key,value] of mp) {
    console.log(value);
}

console.log(mp);
//ouput:
// Map(4) {
//   'name' => 'abhishek',
//   'branch' => 'CSE',
//   'year' => 2,
//   'semester' => 3
// }

//for in loop on map : do not work;
// for (const key in mp) {
    
//     console.log(key);
//     console.log(mp.get(key));
// }











