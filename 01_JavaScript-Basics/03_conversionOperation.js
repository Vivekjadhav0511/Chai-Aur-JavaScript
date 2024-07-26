let score = "30abc"

// console.log(typeof score);

// const {score}= req.body;
   
console.log(score,typeof score);  //NaN number

let valueInNumber= Number (score);  //  help to convert ForceFully conversion

console.log(valueInNumber,typeof (valueInNumber));

console.log('typeof : Score:- ',typeof score);

// "33" => 33 Sting To Number 

// "33Abc" => NaN

// True => 1P

// false => 0

let isLoggedIn="ABc "

let ValueInBoolean= Boolean(isLoggedIn)  // "" => Empty String False  " abs" => True

console.log(ValueInBoolean,typeof(ValueInBoolean));  // true boolean


// *************************OPERATIONS****************************************

let value = 3

let negValue= -value

console.log(negValue);  // -3

let Name = 55555

let ToString = String (Name)

console.log(ToString,typeof ToString);

console.log(2+2);
console.log(5-2);
console.log(2*3);
console.log(2**3);

let str1='Hello '

let str2="Vivek"

str3=str1 + str2

console.log(str3);

console.log("1"+ 5); // 15

console.log(1+ "5"); //15

console.log("1"+ "5");  //15

console.log(+' ');

let num1,num2,num3

num1 = num2= num3=3+2

console.log(num2);

// ***********GameCounter********************

let gameCounter=100;

// ++gameCounter;ameCounter++;

console.log(gameCounter);


// *********  Type Conversion ( TypeCasting)  *******************

// Conversion Of The DataType Explicitly ( BY User )

let numStr = "100000"
console.log(numStr,typeof(numStr)); // / 100000 string
let toNumber = Number(numStr)
console.log(toNumber,typeof(toNumber));  // 100000 number

/* In this example, the string "10000" is explicitly converted to an integer using the Number() function. */



// ******** Coercion **********************************

// Type coercion, on the other hand, is the automatic conversion of data types during operations.

let carNumber = 777
console.log(carNumber,typeof(carNumber)); // 777 "number"
let myCar = `i have A car With NumberPlate ${carNumber}`
console.log(myCar,typeof(myCar)); //i have A car With NumberPlate 777 "string"

// In this example, the number 777 is implicitly coerced into a string when it's concatenated with another string. 
// JavaScript automatically converts the number to a string to perform the concatenation operation.