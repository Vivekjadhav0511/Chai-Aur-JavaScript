// **********  ------- Array { Object } Collection My Multiple Items IN Single Variable ------ ****************

// Array is used to store Different types of Value in Single varibale 

//An array in JavaScript is a special type of object used to store multiple values in a single variable.
// It allows for the storage of elements of any data type, and these elements can vary in type within the same array.
// Arrays are zero-indexed, meaning the first element is at index 0, the second at index 1, and so on.
// Resizable 

const myArray = [1001,2011,5004,888121]
var deepCopy = JSON.parse(JSON.stringify(myArray));  // Deep Copy 
console.log(deepCopy);  // [ 1001, 2011, 5004, 888121 ]
deepCopy.push("pushed")
console.log(deepCopy); // [ 1001, 2011, 5004, 888121, 'pushed' ]
console.log(myArray); // Deep Copy That Doesn't Make Chnages In A Original Array [ 1001, 2011, 5004, 888121 ] 

let MyHeroes =  new Array( "ironMan","SpiderMan","Hulk","CaptainAmerica" )  

console.log(MyHeroes); // [ 'ironMan', 'SpiderMan', 'Hulk', 'CaptainAmerica' ]

console.log(MyHeroes[1]);  // SpiderMan => Accessing a 1st index Value In Array Index Starts From A th Position 

console.log(...MyHeroes); //SpreadOperator => ironMan SpiderMan Hulk CaptainAmerica

// *** -----ARRAY METHODS() ---------*****************

let games = [ "ludo","pugb","FreeFire","CandyCrush"]

console.log(games," Original Array"); // [ 'ludo', 'pugb', 'FreeFire', 'CandyCrush' ] Original Array

games.push("bubbleGame")  // Push() add The Value At the End OF the Array [ 'ludo', 'pugb', 'FreeFire', 'CandyCrush', 'bubbleGame' ]

games.pop()  // Pop() Remove the Last Value Form The Array [ 'ludo', 'pugb', 'FreeFire', 'CandyCrush' ]

games.unshift("Carrom") // unshift() Add Value At the Start of the Array  [ 'Carrom', 'ludo', 'pugb', 'FreeFire', 'CandyCrush' ]

games.shift() // shift() Remove the value from the Start OF the Array [ 'ludo', 'pugb', 'FreeFire', 'CandyCrush' ]

console.log(games.includes("pugb"));  // True 

console.log(games.indexOf("pugb"));  // 1 => if we Given a value that doesn't exit in that case it will Give Asn ( -1 )

let Join = games.join()

console.log(Join , typeof(Join)); // typeOF string => ludo,pugb,FreeFire,CandyCrush

console.log("Original Array",games);

const SliceArray= games.slice(1,2)

console.log("Slice Array",SliceArray); // [ 'ludo', 'pugb' ] 
//Slice takes Start Index & LastIndex bt In Ans It Doesn't Count The Last Index/Value  

console.log("Original Array",games); // Doesn't chnage in Original Array Due To Slice  [ 'ludo', 'pugb', 'FreeFire', 'CandyCrush' ]

const SpliceArray= games.splice(0,3) // [ 'ludo', 'pugb' ]

console.log("Splice Array", SpliceArray);

console.log("Original Array",games);


//  Q. make New Array That doesn't Contain a Repeated Value ***

let arr = [1,1,5,5,8,88,77,77,66,77]

// console.log(arr);

let newArray = [...new Set(arr)]

console.log(newArray);

