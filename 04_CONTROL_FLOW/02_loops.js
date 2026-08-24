//for loop
let start=2;
let end =8;
for(let index=start;index<=end;index++){
    console.log(index);
    index++;
    //updation at last;//index++
}//new scope  // index also comes under new scope


// initialisation =>
// condition check => execution => updation =>
//  condition check...

let arr=["abhiman","manish","subham",45,12,89];
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

//break ---> break the loop if you got break statement
//continue ---> move to next iteration if you got continue statement

for(let i=1;i<9;i++){
    if(i>7)break;
    if(i%2==0)continue;
    console.log(i);
}

/*********************while loop*********************** */
// initialisation =>
// condition check => execution => updation =>
//  condition check...

//  initialisation
//  while(condition){
//   
//
//  updation
//  }


let i=7;
while(i<12){
    console.log(i);


    i++;
}

console.log(i);


let brr=["shiva","shankar","aadi ananta","aadipurush"];
let ind=0;
while(ind<brr.length){
    console.log(brr[ind]);

    ind=ind+2;
}


/************ do while-loop***************** */
// initialisation =>
// execution => updation => condition check =>
// execution....

let x=9;
do{
    x++;
    console.log(x);


    
    x++;
}while(x<9);


