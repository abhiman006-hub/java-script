async function getAllUsers(){

    try{
        const response =await fetch("https://jsonplaceholder.typicode.com/posts/1")
        // response is a string 
        console.log(response);

        // converting string to object
        const data= await response.json();// data is an object(promise)
        console.log(data);
    }
    catch(error){
        console.log("E: ",error);
    }
}
getAllUsers()


// await =the main function of await is to wait
//  for a Promise to settle and give you its result if it succeeds.
//  If it fails, await throws the rejection reason.


// fetch returns a promise---> we can use then ,
//  catch and finally also


fetch("https://jsonplaceholder.typicode.com/posts/1")
.then(function(response){
    console.log(response);
    return response.json();
})
.then(function(data){
    console.log(data);
    return data;
})
.catch(function(error){
    console.log(error);
})


// next then will only be executed if and only if previous then has been 
// completed completely