

// forEach

// array.forEach(element => {
    
// });

let subject = ["javaScipt", "C++", "PHP","HTML","CSS"]

// console.log(subject);

subject.forEach(function(val){
    // console.log(val);
})

subject.forEach((val)=>{
    // console.log(val);
})

subject.forEach((val,index)=>{
    // console.log(`${val} : ${index}`);
})

subject.forEach((val,index,array)=>{
    // console.log(val,index,array);
})

// +++++ senario [ {} , { } , { }]  +++++++++++++++

let myCoading = [
    {
        languageName:"JavaScript",
        FileName:".js"
    },
    {
        languageName:"Java",
        FileName:".java"
    },
    {
        languageName:"python",
        FileName:".py"
    }
]

myCoading.forEach((val,index)=>{
    console.log(val.languageName);
})

let str = "vivek"
let str2="jadhav"

let strFrom = (Array.from(str)); // [ 'v', 'i', 'v', 'e', 'k' ]

let strOf= Array.of(str,str2) // [ 'vivek', 'jadhav' ]



strFrom.forEach((val,index)=>{
    console.log(val,index);
})

strOf.forEach((val,index)=>{
   console.log(val,index);  // vivek 0 jadhav 1
})


let language = {
    js : "javaScipt",
    cpp : "C++",
    rb:"Ruby",
    swift:"Swift By Apple"
}


// language.forEach((val,index)=>{
//     // console.log(val);   // language.forEach is not a function
// })



// +++++++++++++++++++

subject.forEach(printMe)

function printMe(item){
    // console.log(item);
}





