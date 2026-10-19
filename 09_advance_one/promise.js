
//example 1

const promise1= new Promise(function(resolve,reject){
    // Do an async task
    // DB calls ,crptography, network

    setTimeout(function(){
        console.log("har Har Mahadev !")
        resolve();//--> connected to then 
    },1000);


    
})


promise1.then(function(){
    console.log("promise consumed...")
})


// example 2 :without storing in a variable

new Promise(function(resolve,reject){
    // Do an async task
    // DB calls ,crptography, network

    setTimeout(function(){
        console.log("pashupatinath..!")
        resolve();//--> connected to then 
    },1000);

}).then(function(){
    console.log("shiv shakti");
})


// example 3

const promise3= new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Hari hara...");
        const student={
            name:"abhishek kuamr",
            branch:"computer science and engineering"
        }

        //passing object to resolve 
        resolve(student);
    },1000)
})


promise3.then(function(std){ // function(std)---> r3esolve function

    console.log(std)

})


// example 4

//.then() → What to do if the order succeeds.

//.catch() → What to do if the order fails.

//.finally() → What to do when the process finishes,
//  whether it succeeds or fails.


const promise4=new Promise(function(resolve , reject){
    let error=true;
    if(error==true){
        console.log("error found...!");
        reject("error caught@!");
    }
    else{
        console.log("No error found...!@")
        resolve({name:"abhishek",roll:"2025ugcs016"});
    }

})


promise4.then(function(std){
    console.log(std);
    console.log("resolved!")
})

promise4.catch(function(str){
    console.log(str);
    console.log("error catched!")
})

promise4.finally(function(){
    console.log("shiv shakti")
})


//example 5

const promise5=new Promise(function(resolve,reject){
    let error=true;
    if(!error){
        console.log("No error!");
        resolve(7);
    }
    else{
        console.log("error found!");
        reject(3);
    }
})

promise5
.then(function(x){//x=7
x=x*2;
console.log(x);
return x;
})
.then(function(x){// here x=14 is the return value of previous then
    x=x+5;
    console.log(x)
    return x;
})
.then(function(x){// here x=19 is the return value of previous then
    x=2*x+1;
    console.log(x);
    return x;
})
.finally(function(){//finally1 will execute
    console.log("finally1")
})

promise5
.catch(function(y){// only first catch will get executed
    y=y*2;
    console.log(y);
    return y;
})
.catch(function(y){// skipped because promise is already recovered
    y=y+3;
    console.log(y);
    return y;
})
.catch(function(y){//skipped because promise is already recovered
    y=2*y+1;
    console.log(y);
    return y;
})
 .finally(function(){ // finally2 will execute
    console.log("finally2");
 })


 promise5
 .finally(function(){
    console.log("finally3")
 })
 .finally(function(){
    console.log("finally4")
 })



 // best practice to use then , catch and finally
 //  ==> multiple then  ---> to pass value to next then
 //  ==> single catch   ---> to handle rejection 
 //  ==> single finally  ---> finally will execute in every situation

console.log("promise6");

const promise6=new Promise(function(resolve,reject){
    let error=false;
    if(!error){
        console.log("No error!");
        resolve(7);
    }
    else{
        console.log("error found!");
        reject(3);
    }
})

async function consumePromise6(){
    try{
        const response=await promise6
        console.log("printing the response..."+response+"... response printed")
       // console.log(response);
    
    }
    catch(error){
        console.log(error)
    }
}

//call function consumePromise6
consumePromise6()



// using aqsync function to fetch:




