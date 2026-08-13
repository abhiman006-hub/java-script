//declaration of number:

// //method 1.-->declaring as Number
// let score=800;
// console.log(typeof score);//number

// //method 2.-->declaring as object
// let marks=new Number(800);
// console.log(typeof marks);//object

// //conversion into string;
// console.log(score.toString());//no change in score-->Number
// let str=score.toString();
// console.log(typeof str);
// console.log(typeof score);

// console.log(str.length);

// //precision property;
// const num=6787.08765;
// console.log(num.toFixed(2));// 2 digits after decimal point;

// console.log(num.toPrecision(8));//precision on first 6 digits;--->round off 

// const n=234565432;
// console.log(n.toLocaleString());//commas according to us standard
// console.log(n.toLocaleString('en-IN'));//commas according to indian standard


/*****************************Maths--Library***************** */


console.log(Math.abs(-567));//absolute value
console.log(Math.round(567.48));//round off to integer
console.log(Math.ceil(6.9));//ceiling value-->7
console.log(Math.floor(6.9));//floor value-->6
console.log(Math.max(5,2,6,12,9,2));

console.log(Math.random());// 0< value <1
console.log(Math.floor(Math.random()*10)+1);//1<= value <=10

//formula
const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min);//min<= value <=max; // +1--> to remove 0 case;