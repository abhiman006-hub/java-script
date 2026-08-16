//Object={}
//Array=[]

const user=new Object({ //singleton object

    right:true,
    salary:80000,
    aura:"99999+"
});
user.id="2025UFED67";
user.name="abhiman";
user.email="abhgsi@gamil.com";
console.log(user.id);
console.log(user);


//nesting objects inside object;

let mutltiUser={
    ram:{//ram is an object
        id:"ram2025fU",
        age:56,
        child1:{//child 1 is an object
            name:"gourav",
            height:"6 feet",
            weight:"70 kgs"
        }
        ,

        child2:{//child2 is an object
            name:"sourav",
            height:"5 feet",
            weight:"78 kgs"
        }
    }

    ,

    shyam:{//shyam is an object
        id:"2025shyamufr",
        age:89,

        wife1:{//wife1 is an object
            name:"surbhi",
            nature:"moody",
            smile:"nice"
        }
        ,
        wife2:{//wife2 is an object
            name:"vyomika",
            nature:"aggressive",
            smile:"very cute"
        }
    }
}


console.log(mutltiUser);
console.log(mutltiUser.shyam.wife2)

mutltiUser.dyno={
    name:"honey singh",
    age:34,
    category:"OBC",
    height:"8 feet"
}

console.log(mutltiUser);
console.log(mutltiUser.ram?.child1.height);

/****************************************************************** */

let obj1={
    1:"a",
    2:"b"
}

let obj2={
    3:"c",
    4:"d"
}

let obj3={obj1,obj2};
console.log(obj3);
console.log(obj3.obj1["1"])


//ways to create object:
//  1. let object_name={ key : value }   ----> object_name------->{ key : value}
//   object_name is referencing object
//
//  2.method 
//  let object_name= new Object({key : value});//singleton object
//


let tinderuser={
    name:"abhishek kumar",
    email:"abhishek@gmail.com",
    phone:"9471XXXXXXX",
    address:"aurangabad"
}

console.log(tinderuser);
//note:*************
console.log(Object.keys(tinderuser));//it will print an
// array of all the keys of tinderuser
console.log(Object.values(tinderuser));
// it will print an array of all the values of tinderuser
console.log(Object.entries(tinderuser));
// it will print an array of [ key , value]
console.log(tinderuser.hasOwnProperty("name"));//return true or false
//true if property exists otherwise it returns false
//before using any property , check whether this property exists or not???



