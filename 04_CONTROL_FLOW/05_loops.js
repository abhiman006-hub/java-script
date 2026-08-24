// loop : for each
let arr=["abhiman","abhsihek","manish","trishul"];
arr.forEach(function(element){   // element --> element of arr
    console.log(element)
});

arr.forEach( function(element) {
    console.log("hello "+element);
})

//callBack function as arrow function
arr.forEach( (element) =>{
    console.log(element);
})

// passing another function as callBack function
function greet(element){
    console.log("welcome...!"+element);
}

arr.forEach(greet);// only given reference
// arr.forEach(greet(item));   -->do not execute the function ,only give reference 

arr.forEach(function(element,index,array){
    console.log(element+" : "+index+" : "+arr)
})

arr.forEach(function(element,index,array){
    console.log(element,index,arr)
})

//syntax of callBack function :
//   function(element,index,arr){
//       //code
//   }


// array of objects;

let array=[

    {
        name:"abhshek kumar yadav",
        id:"2025ugcs016"
    }
    ,

    {
        name:"manish kumar yadav",
        id:"2025ugcs040"
    }

    ,
    {
        name:"abhiman",
        id:"2025ugec016"
    }


]

array.forEach( (element)=>{  // element = element of array = (object)
    console.log(element.name);// object.key
    console.log(element.id);//object.key
    //console.log(element[name]); only when keys are defined as string
    console.log();
})






