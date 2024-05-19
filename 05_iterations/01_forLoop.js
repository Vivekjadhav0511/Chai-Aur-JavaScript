

// for 

/* 
for loop is used to repeatedly execute a block of code as long as a specified condition is true. 
The for loop is particularly useful for iterating over arrays or for running a block of code a specific number of times.
 */

for (let i = 1; i <= 10; i++) {
    // console.log(`${i} * ${2} = ${i * 2}`);
}

// +++++ nested Loop+++++++++

for (let i = 1; i <= 10; i++) {
// console.log(`table ${i}`);
    for (let j = 1; j <=10; j++) {
        
        // console.log(`${i} * ${ j } = ${i * j}`);
        
    }
}


const myArray = ["Thor","IronMan","loki","SpiderMan"]

// console.log(myArray[2]);

// console.log(myArray)

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
}

for (let i = 0; i < myArray.length; i++) {
    // console.log(myArray[i]);
}

// +++++ Break & continue ++++++++

for (let i = 1; i <=10; i++) {
   if (i == 5) {
        console.log("Detected 5");
        break; // Break Stop The Loop on Given Condition
    }
    console.log("Value of I is :" + i);
}


for (let i = 1; i <=10; i++) {
    if (i == 5) {
         console.log("Detected 5");
         continue; // continue ignore and move forword
     }
     console.log("Value of I is :" + i);
 }
 

// for (let i = 0; i < myArray.length; i++) {

//     if ( myArray[i] == 2)  {
//        console.log("detected Array");
//        break;
//     }
    
//       console.log(myArray[i]);
    
// }

let str="StringIteration"

for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}