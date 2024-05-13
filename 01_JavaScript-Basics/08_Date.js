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


// ********************

let dateCompair = new Date("2023-05-12")

console.log(dateCompair);

console.log(dateCompair.getTime(),typeof(dateCompair)); // 1683849600000  object

let myDate  = Date.now() // 1715530022879 In MiliSecond

console.log(myDate); //    1715530360050

console.log(myDate > dateCompair);   // true

// ******* In Second **********

let currentDate = Date.now()

console.log(currentDate); // 1715530573183   in MiliSecond 

// console.log(Math.floor(currentDate/1000)); // 1715530742.816 => In Second 

// console.log(Math.floor(Date.now()/1000));  // 1715530742.816

// console.log(currentDate/1000 == Date.now()/1000); // True => In Second 

console.log(currentDate == Date.now()); // True => In MIlisecond 

// **********************

let newDate = new  Date()

console.log(newDate.toDateString()); // Sun May 12 2024

console.log(newDate.toLocaleDateString()); // 5/12/2024

console.log(newDate.toLocaleString("defalut", {
    weekday : "short"
})); // 5/12/2024, 4:44:55 PM
