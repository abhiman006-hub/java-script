//types of datatypes :
/*

1. primitive datatypes(7 types):
  -> call by value:

  =>String
  =>Number
  =>Boolean
  =>null
  =>undefined
  =>Symbol
  =>bigInt----> add n in the last of the number


*/

let id1=Symbol("123");//provide unique identity
let id2=Symbol("123");//provide unique identity

console.log(id1);
console.log(id2);

console.log(id1==id2)//false

let bignum=987654n;
console.log(typeof bignum);
console.log(bignum);


/*
2. Non primitive datatype(reference type);

=>Object
=>array
=>functions
=>dates
=>maps
=>sets , etc

*/

//object:

//here student is an object 
let student={
  //key:value,
  name:'abhishek kumar',
  roll:'2025UGCS016',
  branch:'CSE',
  year:2,
  semester:4
}
 
//accessing 
console.table([student.name,student.roll,student.branch,student.year,student.semester]);
console.table([student["name"],student.roll,student.branch,student.year,student.semester]);
console.log(student.name);
console.log(student["name"]);

console.log(typeof student);


//arrays;

let arr=["abhishek kumar","2025ugcs016","cse",2,4];
console.log(arr[2],arr[3],arr[0],arr[1]);
console.log(arr[1]);
console.log(arr[0]);

console.log(typeof arr);//object

/*********************************************************************/
//stack(Primitive)-->copy of original value;
//Heap(Non-Primitive)-->reference of original value;


//stack memory explanation;

let student1="abhishek kumar";
console.log(student1);

let student2=student1;//pass by value;
console.log(student2);

student2="abhiman";//no change in student 1;
console.log(student1);
console.log(student2);

//Note: student1 and student 2 arev stored in stack memory:

//Heap memory Explanation:

let user={
  name:"alexa47",
  id:78643,
  email:"xyz@gmail.com"
}//user is stored in stack but {name ,id ,email } is stored in Heap;

console.table([user.name,user.id,user.email]);

let newUser=user;//pass by reference -->
console.table([newUser.name,newUser.id,newUser.email]);

//changes in newUser causes changes in user because of pass by reference;
newUser.email="abhi@gamil.com";
console.table([user.name,user.id,user.email]);//user
console.table([newUser.name,newUser.id,newUser.email]);//newUser

//  user----->{name,id,email}<-----newUser  //


