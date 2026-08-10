const accountId=17839;
let accountEmail="abhishek@gmail.com";
var accountPassword="Abhi@pro";
accountCity="Aurangabad";
let accountState;

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

//accountId=34 //not allowed to change const;
accountEmail="abhi@gmail.com";
accountPassword="radhe467";
accountCity="bengaluru";


/*
prefer to use only const and let...datatypes;
   1. const --> it's value cannot be changed;
   2. let --> it's value can be changed and modified;
   3. A variable declared with let exists only inside the block{} where it is declared;
      but a variable declared with var does not exist only inside the block where it is declared;
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);


// {
//     let name="abhishek kumar yadav";
// }
//     console.log(name);   //error--->cn't access outside the block where it is declared

{
    var namee="manish kumar yadav";
}
    console.log(namee);





