
let PI = Object.getOwnPropertyDescriptor(Math,"PI")

console.log(PI);

// Object.defineProperty(Math,"PI",{
//     writable:true  // TypeError: Cannot redefine property: PI   
   //                     at Function.defineProperty (<anonymous
// })

console.log(Object.getOwnPropertyDescriptor(Math,"PI"));

 user={
    name:"vivek Jadhav",
    isAvalible:'true',
    salary: 0
}


console.log(Object.getOwnPropertyDescriptor(user,"name"));

Object.defineProperty(user,"name" ,{
    writable:false,
    enumerable:false
})

console.log(Object.getOwnPropertyDescriptor(user,"name"));


for (const key of Object.entries(user)) {
    // console.log(key);
}

