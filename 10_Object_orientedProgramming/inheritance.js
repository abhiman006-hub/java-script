// inheritance 

class user{
    constructor(username,email){
        this.username=username;
        this.email=email;
    }

    getUsername(){
        console.log(this.username);
    }
}

class teacher extends user{

    constructor(username,email,password,course){
        super(username,email)// call the constructor of parent
        // to initialize username and email
        this.password=password;
        this.course=course;
    }

    // adding function

    getCourse(){
        console.log("new course added by "+this.username+" is "+this.course);
    }


}


// making object of teacher
let t1=new teacher("abhi","abhi@gmail.com",678,"history");

console.log(teacher);//[class teacher extends user]
console.log(t1.username);
t1.getUsername();// abhi
t1.getCourse();// new course added by abhi is history


// to check whether t1 is an instance of teacher or not
console.log(t1 instanceof teacher);// true


const t2= new user("abhuman","abhi8man@gmail.com");

console.log(t2===t1)// false---> t1 and t2 are instanec of different classes