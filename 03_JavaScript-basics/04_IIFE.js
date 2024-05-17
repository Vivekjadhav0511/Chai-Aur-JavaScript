
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

