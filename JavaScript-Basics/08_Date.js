/* Date ****** */

let date = new Date()  

console.log(date);

console.log(date.toString())

console.log(date.toLocaleString()) // 5/11/2024, 5:20:28 PM

console.log(date.toDateString()) // Sat May 11 2024

console.log(date.toJSON()); // 2024-05-11T17:20:28.638Z

console.log(typeof(date));

const myCreatedDate = new Date(2022, 5, 25)  

console.log(myCreatedDate);  // 2022-06-24T18:30:00.000Z  => AS We Notic The Count Of Month Starts From a " 0 " 

console.log(myCreatedDate.toLocaleDateString()); //  25/6/2022

console.log(myCreatedDate.toString()); // Sat Jun 25 2022 00:00:00 GMT+0530 (India Standard Time)

console.log(myCreatedDate.toISOString());

console.log(myCreatedDate.toDateString());

console.log(myCreatedDate.getDate());



