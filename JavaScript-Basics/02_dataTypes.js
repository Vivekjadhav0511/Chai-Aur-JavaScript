"use strict"; // treat All js Code as Newer Version 

console.log
('Vivek')  // Code Readablity is High Priority  

// ___---- PRIMATIVE DATATYPES ------___________________________________________________________________

let Name="Vivek" // String " " , ' ' 

let age=18;  // number

let isLoggedIn=false // Boolean  true OR False

// bitInt 

// null => StandAlone Value   given BY User 

// Undefinend => Given By Js engine

// symbol => Unique

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

