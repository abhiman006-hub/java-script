
/**************************************** filter() ***************************** */

//NOte:

// for Each loop do not return any value: directly
// let store=array.forEach( (item) => {
//     console.log(item);
//     return item;
// })

//console.log(store);// undefined

/**********filter********* */


// to return any  value use filter
// filter is used to store 

// let strg=array.filter( (item) =>{
//     return item;
// })

//console.log(strg);// array of objects

// console.log(array.filter( (item)=> {
//     return item;
// }))



let brr=[1,2,3,4,5,,6,7,8,9,10];

let st=brr.filter( (num,index)=>{
    //return num>4;
    return (num>=5 && num<=8) && index<6; // condition on element in parameter
})

console.log(st);

let strg1=[];
brr.forEach( (item)=>{
    if(item>4){
        strg1.push(item);// pushing item into strg1
    }
})

console.log(strg1);


// NOTE: filter will always return element of array:
/*

    array.filter( (element,index,array) =>{
        
        return (condition on element);-->return only those elements which satisfy the condition

        });

    this return array;

    Note: array.filter( () )  --->  rreturns an array


*/



//**********book example***************** */

const books = [
    {
        title: "The Alchemist",
        author: "Paulo Coelho",
        year: 1988,
        price: 299,
        genre: "Fiction"
    },
    {
        title: "Atomic Habits",
        author: "James Clear",
        year: 2018,
        price: 499,
        genre: "Self-Help"
    },
    {
        title: "Clean Code",
        author: "Robert C. Martin",
        year: 2008,
        price: 699,
        genre: "Programming"
    },
    {
        title: "The Pragmatic Programmer",
        author: "Andrew Hunt",
        year: 1999,
        price: 799,
        genre: "Programming"
    },
    {
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        year: 1997,
        price: 399,
        genre: "Finance"
    }
];

console.log(books.filter( (bk)=>{
    return bk.price<400; // condition on bk 
}))

let show=books.filter( (bk)=>{
    return bk.price<400 && bk.year<2015 ; // condition on bk 
})

console.log(show);
console.log(show.length);

/*************************************************map() ***************************/


let myNums=[1,2,3,4,5,6,7,8,9];

let strg2=myNums.map( (element) =>{
    //return element>4; --->ERROR because it return value
    return element+100;
})

console.log(strg2);


//Chaning :::---->>>>

//

let strg3=myNums.map( (element) =>{
    return element*10;
}).map( (element)=>{
    return element+5;
})

//  array = myNums.map( (element) =>{return element*10;}).map( (element)=>{return element+5;})
//  is an array

console.log(strg3);

let strg4=myNums.map( (element) =>{return element*10;})
                .filter( (element)=>{ return element<50;})

console.log(strg4);


/***************************** reduce******************* */

const nums=[1,2,3,4,5,6];

const myTotal=nums.reduce( function(accumulator,current){
    console.log(accumulator,current);
    return accumulator+current;
},0);

console.log(myTotal);

//chaning using map() nad filter()

let myNum=[12,23,34,45,56,67,78,89,90];


let ar1=myNum.map( (element)=>{ return element*10} ) // =[120,230,340,450,560,670,780,890,900]
             .map( (element) => { return element*10})// =[1200,2300,3400,4500,5600,6700,7800,8900,9000]
             .filter( (element)=>{ return element>=3000} );//=[3400,4500,5600,6700,7800,8900,9000]

console.log(ar1);

//Note : array.map()  ia an array
// Note : array.filter() is an array
//NOte : array.map().filter() is an array

let arr=[
    {
        name:"abhiman",
        age:87
    },
    {
        name:"manish",
        age:90
    },
    {
        name:"abhishek",
        age:30
    }
]

 let ageSUM=arr.reduce( (acc,element)=>{
    return acc+element.age;// if element is object --> use its properties;
 },0);

 console.log(ageSUM);


/**************************** reduce**************************** */

let total=myNum.reduce( (acc,curr)=>{
    return acc+curr; // acc = acc + curr;
    // acc=initial value(0) , when curr=first element of myNum
},0);

console.log(total);

let shoppingCart=[
    {
        course:"JS",
        price:800
    }
    ,
    {
        course:"C++",
        price:870
    }
    ,
    {
        course:"Python",
        price:200
    }
]

let totalPrice=shoppingCart.reduce( (acc,element)=>{
    return acc+element.price;
},0);

console.log(totalPrice);







