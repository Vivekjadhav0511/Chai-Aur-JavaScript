let marvalHeros = ["thor","SpiderMan","IronMan"]

let dcHeros = ["SuperMan","Flash","BatMan"]

// marvalHeros.push(dcHeros)

console.log(marvalHeros); // [ 'thor', 'SpiderMan', 'IronMan', [ 'SuperMan', 'Flash', 'BatMan' ] ]
// Array takes Another Array as A Element
// console.log(marvalHeros[3][2]); //  BatMan

const allHeros = marvalHeros.concat(dcHeros)

console.log(allHeros); // concat() combine e Two Array And Return a New Array
// [ 'thor', 'SpiderMan', 'IronMan', 'SuperMan', 'Flash', 'BatMan' ]

console.log(marvalHeros.flat(Infinity)); // [ 'thor', 'SpiderMan', 'IronMan', 'SuperMan', 'Flash', 'BatMan' ]

// ******----- Spread Operator *****************

const SpreadHeros = [...marvalHeros,...dcHeros] // Spread Operator

console.log(SpreadHeros); // [ 'thor', 'SpiderMan', 'IronMan', 'SuperMan', 'Flash', 'BatMan' ]

// ***** ----- Flat () ------- ***********

// Q. write A code for the convert below arr array in One Single array

let arr = [1001,1002,1003,[5001,5002,5003],1004,[3001,3002,[4001,4002]]]

let flatArray = arr.flat(Infinity) // Flat return a single Array

console.log(flatArray); // [1001, 1002, 1003,5001, 5002, 5003, 1004, 3001, 3002, 4001, 4002 ]

    //  ****** isArray , from() , of()

console.log(Array.isArray(marvalHeros)); // True 

let FormArry= Array.from("Vivek");

console.log(FormArry,Array.isArray(FormArry)); // [ 'V', 'i', 'v', 'e', 'k' ] true

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3)); // [ 100, 200, 300 ]
// Returns a new array from a set of elements. A set of elements to include in the new array object




// ⭐ Revision

    //   ****** DATE **********

let date = new Date(2022,05,13)

// console.log(date.getTime()/1000);

// let NowDate= Math.floor(Date.now()/1000);

// console.log(NowDate.to);

// console.log(date === NowDate ,typeof(NowDate),typeof(date));