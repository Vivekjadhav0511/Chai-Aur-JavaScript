// ******************* Number **********************

let score = 400;
console.log(score,typeof score);

let newScore = new Number(400)
console.log(newScore,typeof(newScore)); // Number {400} 'object'

console.log(newScore.toString()); // 

// console.log(typeof(newScore));

let Price = 999
console.log(Price.toFixed(2)); // 999.00  => Prisesion Value 

let otherNumber = 944.84543
console.log(otherNumber.toPrecision(3)); // 945 => 

const hundreds = 100000000
console.log(hundreds.toLocaleString("en-In")); // 10,00,00,000

// ********** MATHS*********************

console.log(Math);

console.log(Math.abs(-4)); // 4 =>  Convert "-" Value Into a Positive Bt positive Remain Same

console.log(Math.round(4.3));  //  4 
console.log(Math.round(4.6));  //  5 => Round Up The Value if decimal Value above .5 goes With Higher Value 

console.log(Math.ceil(4.1)); // 5 => Always Choose a Higher Value 

console.log(Math.floor(4.2)); // 4 => always Choose a Lower Value 

console.log(Math.sqrt(100));  // 100 Square Root
console.log(Math.cbrt(125)); // 5 cubeRoot

console.log(Math.min(50,60,10,80,90)); //10 min Value
console.log(Math.max(50,60,10,80,90)); // 90 max value


console.log(Math.floor(Math.random()*10)+1);

console.log(Math.floor(Math.random() * (100 - 95 + 1)) + 95); // range 100 max to 95 min 
               // Math.floor(Math.random() * (max - min + 1)) + min);
 
console.log()

// ********  LUDO GAME*****************************

let diceMax = 6

let diceMin = 1

console.log(Math.floor(Math.random() * (diceMax - diceMin + 1)) + diceMin);