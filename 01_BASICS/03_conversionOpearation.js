//conversion from number to string and vice versa;

let score="345";

console.log(typeof score);
console.log(typeof(score));//using typeof method;

//conversion from string to number;
let scoreInNumber=Number(score);//Number(string);
console.log(typeof scoreInNumber);
console.log(typeof(scoreInNumber));//using typeof method;
console.log(scoreInNumber);

//conversion from number to string;
let scoreInString=String(scoreInNumber);
console.log(typeof scoreInString);
console.log(typeof(scoreInString));
console.log(scoreInString);

//conversion from string to number
let marks="34abs";// if we convert string into number , it will return NaN;
console.log(Number(marks));
console.log(marks);

// null
let credit=null;
console.log(credit);//null
console.log(typeof credit);//object
console.log(Number(credit));//0
console.log(String(credit));//null

console.log();

//undefined
let points=undefined;
console.log(points);//undefined
console.log(typeof points);//undefine
console.log(Number(points));//NaN(not in number)--->you can treat NaN as number;
console.log(String(points));//undefined


//boolean;
let flag=1;
console.log(typeof flag);
console.log(flag);
console.log(Boolean(flag));

console.log();

let sign="kg";
console.log(typeof sign);
console.log(sign);
console.log(Boolean(sign));

//  1=>true , 0=>false
//  "anything"=>true , ""=>false

//Number(String);
//String(Number);
//Boolean(Number/String);


/***********************oprations************************/

//tricky conversions
console.log("1"+2);//12
console.log(1+"2");//12
console.log(1+2+3+"7");//67 -->arithmetic result of all numbers before first string ,
// after that all will be treated as string
console.log("5"+6+7+8);//5678

console.log(1+3+5+"7"+8+9+"2"+6);//978926;

console.log(7+true);//conversion of true into number
console.log(true+7);
console.log((true + true)*(true+true));

let num=90;
console.log(++num);//assign then print
console.log(num);
console.log(num++);//print then assign
console.log(num);

//use MDN for documentation;


