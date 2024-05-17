

// // ++++++++ This ++++++++++++

// // this Represent the current Contex

// const user ={

//     userName:"vivek",
//     Price:999,
    
//    welcomeMessage:function(){

//     console.log(`${this.userName} ,welcome to website `);

//     console.log(this);


//    },

   

// }

// // console.log(user);

// user.welcomeMessage() // vivek ,welcome to website

// user.userName = "sam " // / UserName changed  ,welcome to website

// user.welcomeMessage() // sam

// console.log(this); // {} in Node Enviroment

// console.log(this); // in browser => 
// // Window {0: global, window: Window, self: Window, document: document, name: '', location: Location, …}

// console.log('*** Arrow Function ******');

// // ++++++++++  Arrow function ++++++++++++++


// function One(userN){
//     let userName="vivek"
//     // console.log(this.userName);  // Undefines => This only Work IN OBJECT In Function It Doesn't Work
// }
// One()

// const  Arrow = ()=>{
//     let userName="vivek"
//     // console.log(this.userName);
//     console.log(this);
// }

// Arrow()

// // ***********

// const AddTwo = (num1,num2)=>{
//     return num1 + num2
// }
// console.log(AddTwo(10,20)); // 30

// const AddTwoNum = (num1,num2)  => num1 + num2  // implicit Return 

// console.log(AddTwo(10,20));  // 30



// let ArrowFunction = ()=>{
//     console.log(this);
// }
// ArrowFunction()



// // ***********

// function OuterFunction() {
//     this.name = 'Outer';

//     let ArrowFunction = () => {
//         console.log(this);
//     }

//     ArrowFunction(); // `this` refers to the `this` of `OuterFunction`, which is the instance of `OuterFunction`.
// }

// new OuterFunction();

// // ******** Example ****************
// console.log('++++ example +++++');


function Call(){
    let myName="vivek Jadhav"

    let ArrowFunction = () => {
        console.log(this.myName);
    }
    ArrowFunction();
}

// Call()

let ArrowFunction = () => {
    console.log(this);
}
// ArrowFunction();


function call (){
    console.log(this);
    let UserName = "vivek"
}
// call()

let callMe = function(){
    // let UserName = "vivek"
    console.log(this);
}
// callMe()

let arrow = ()=>{
    console.log(this);
}
arrow() // {}

function Fun(){
    console.log(this);
}
Fun()
/* 
<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Getter/Setter],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [AsyncFunction: fetch],
  crypto: [Getter]
}
 */

const AddWithArrow = (num1, num2 = 3)=>{  // Defalt parameter 
return num1 * num2 
}

// console.log(AddWithArrow(12));


function greet(name, greeting = `Hello, ${name}!`) {
    return name ,greeting ;
}

console.log(greet("Alice")); // Output: Hello, Alice!

console.log(greet("Alice", "Hi there!")); // Output: Hi there!


