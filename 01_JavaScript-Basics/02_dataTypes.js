"use strict"; // treat All js Code as Newer Version 

// JavaScript is " Dynamically Typed " Means Interpriter assign variable type on the basis of variable Value At Run Time
  
console.log
('Vivek')  // Code Readablity is High Priority  

// ___---- PRIMATIVE DATATYPES ------___________________________________________________________________

let Name="Vivek" // String " " , ' '  string is primitive dateType it's a Sequence of character

let age=18;  // number 

let ScoreValue=100.30  // Number 

let isLoggedIn=false // Boolean  true OR False

// bitInt 

const bigNumber = 344689741578434878451676864344n

console.log(bigNumber,typeof bigNumber)  // 344689741578434878451676864344n bigint

// null => StandAlone Value   given BY User 

let outSideTemp        

console.log(outSideTemp,"outSideTemp") // // Undefinend => Given By Js engine

// symbol => Unique

const id = Symbol ('123')

const anotherID= Symbol('123')

console.log(id==anotherID , ' Id === anotherID')  // False Because Return Value Is Different 

console.log(Name,typeof(Name));  /// Vivek string

console.log(isLoggedIn,typeof isLoggedIn);  // false boolean

console.log(typeof null); // Object 

console.log(typeof undefined); // Undefined  


// *************** Primitibve DataTypes => { Call By Value }  it dose'nt chnage a Original Value It Passses  a Copy Of Varialbe **********************

// String , Number , Boolean , null , undefined , Symbol , BigInt

let Str1=55

console.log(Str1);  // 55

let Str2 = Str1

Str2 =200

console.log(Str1); // 55

console.log(Str2); // 200   It Means In Primitive DataType Original Value Never get Changed 

console.log(Str1);



// ___---- NON-PRIMATIVE DATATYPES ------{ Referance }  it Allocate a Referance of value In Memory _________________

//  Array , Object , Function

let heros = ["shaktiman",'naagraj','Doremon','gabbarSing',]

console.log(heros)

console.log(heros[0],"o'th Position");

// heros.push = "Kaliyaa"

console.log( heros.push='kaliyaa' ,heros);

console.log(heros);  // Array =>
    //Non-primitive dataType Passses The Referance of the Variable that's why it also changes a Origial array Also & It Store Inside a Heap Memory

let Obj={
    name:"Vivek",
    age:22,
    city:"Yavatmal"
}

console.log(Obj)

let MyFunction=function(){
    console.log("Hello World");  // Function Declaraction
}

MyFunction()

console.log(typeof MyFunction);  // Return Function We Called It AS  Function Object
