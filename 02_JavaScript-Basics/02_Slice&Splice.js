// ******** Array Method ************

let newArray = [1000,1001,1002,1003,1004,1005]

console.log("A",newArray); // A [ 1000, 1001, 1002, 1003, 1004, 1005 ]

let SliceArray = newArray.slice(1,3)  // Takes Start number And end Number But Last Index Not Be Counted

console.log(SliceArray); // [ 1000, 1001, 1002 ]

console.log("B",newArray); // B [ 1000, 1001, 1002, 1003, 1004, 1005 ] //Due To Slice Doesn't Change In Original Array

let SpliceArray = newArray.splice(0,3) // start Index & Delete Count 

console.log(SpliceArray); // [ 1000, 1001, 1002 ]  // Splice it extract the Deleted value Form The Original Array 

console.log("C",newArray); // C [ 1003, 1004, 1005 ] // Change In  Original Array


