class car{
    static count=0;
    constructor(model,speed,type){
        this.model=model;
        this.speed=speed;
        this.type=type;

        // to use static property inside constructor use:
        // classname.static_property
        car.count++;
    }

    // static method
    // use only static variable inside static function

    static CarCount(){
        // to use static property inside constructor use:
        // classname.static_property
        return car.count;
    }

   
}

let c1= new car(78,978,54);
let c2=new car(23,87,89);

console.log(c1.count)// undefined---> because count can only be accessed by class

console.log(car.count);

console.log(car.CarCount());

// NOTE: to use static variabls or methods use ----->>### "class_name.static_property"