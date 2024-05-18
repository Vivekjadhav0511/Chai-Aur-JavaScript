
// Immediate invoke function Expression { IIFE }

(function IIFE(){ 
    // Named IFFE 
    console.log("immidiate Invoke Function Expression "); // protection Form A global Scope Polluction 
})();


(()=>{
    console.log(" Arrow immidiate Invoke Function Expression 2 "); // protection Form A global Scope Polluction 
})()


let obj1 ={
    userName:"vivek",
    Price:999
}
console.log(obj1);

let Spread=(Object.keys(obj1));

console.log(...Spread);

obj1.CallMe = function(){
    console.log(`${this.userName} And Having Price ${this.Price}`);
}
obj1.CallMe()

const {userName,Price,CallMe} = obj1

console.log(userName,Price);

console.log(obj1.CallMe());


(()=>{
    console.log("IIFE");
})(),

(function(){
console.log("DataBase Connected");
})()


// ****************

// revision

let array = [1,2,3,4]
let array2 = [1,2,3,4]
let array3 = array.concat(array2)
let Spreaddd= [...array,...array2]
console.log(array3);
console.log(Spreaddd);

let Obj1={
    UserName:"vivekJadhav",
    Pass:77777777777
}
console.log(Obj1);

Obj1.UserName="UserName Changed"

console.log(Obj1);

console.log(Object.keys(Obj1));

console.log();

let {UserName,Pass:password} = Obj1  // Object destructuring

console.log(UserName,password);

console.log(password);

let Str= "vivek"

console.log(...(Array.from(Str)));

let NewObject = new Object

NewObject.bookName="I don't Love You anyMore"

NewObject.Price="250"

console.log(NewObject);

function Chai(){
    console.log("take a Cup Off Tea");
}
Chai // REferance 
 Chai() // Execuation

 let fun1=function(){
    console.log("Function Expression");
 }
 fun1()

 function fun2(){
    return "Return after a the function execuation"
 }
 console.log(fun2());


function AddtwoNumber(num1,num2=60){
    return `${num1 + num2}`
}
console.log(AddtwoNumber(10,20)); // 20
console.log(AddtwoNumber(10)); // 70 => default value 

let Arrow = ()=>{
    console.log("Arrow Function ....");
}
Arrow()

let Arrow2 = ()=> console.log("Arrow Function Implicitly ....");

let Arrow3 = (n1,n2)=> {
    return n1 + n2
}
console.log(Arrow3(10,80));

let Arrow4 = (val1,val2)=> (val1 * val2)

console.log(Arrow4(20,20));


(function(val1,val2){
    console.log(val1 * val2);
})(10,10);   // to pouse the  IIFE

((val1,val2)=>{
   console.log( val1 * val2);
})(40,10);

let total = (function(n1,n2){
    let total = n1 + n2
    // console.log(total);
    return total
 })(10,10)

console.log(total);

let ArrowIIFE = ((val1,val2)=>{
    return val1 + val2
})(100,100)

console.log(ArrowIIFE);