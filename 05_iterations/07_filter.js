
// 

let subject = ["javaScipt", "C++", "PHP","HTML","CSS"]

let result = subject.forEach((val,index)=>{   // forEach Does Not Return Any Value 
    console.log(val);
    return val
})

console.log(result);  // undefined

// +++++++++++++ { FILTER }+++++++++++++++++++++++++++

let myNumber = [1,2,3,4,5,6,7,8,9,10]

let resultNumber = myNumber.filter((val,indexe)=>{
    return(val >= 5);

})

console.log(resultNumber); // [ 5, 6, 7, 8, 9, 10 ]

// +++ by forEach 

let empArray = []

myNumber.forEach((val)=>{
    if (val >= 5 ) {
        empArray.push(val)
    }
})

console.log(empArray); //  [ 5, 6, 7, 8, 9, 10 ]

// +++++++++++++++++++++++++

let Books = [
    {title: "book1", genre:"history"  ,publish:1952 },
    {title: "book2", genre:"fiction" ,publish:2000 },
    {title: "book3", genre:"history" ,publish:2005 },
    {title: "book5", genre:"history" ,publish:2018 },
    {title: "book4", genre:"science" ,publish:2015 }
]

console.log(Books);

let filterBook = Books.filter((item)=>{
       return (item.genre === "history") // 
})
console.log(filterBook);
/* 
[
  { title: 'book1', genre: 'history', publish: 1952 },
  { title: 'book3', genre: 'history', publish: 1952 }
]
 */


let filterByPublish = Books.filter((item) => item.publish >= 2000 )  // short hand 

console.log(filterByPublish);


let filterByPublish2 = Books.filter((item) => item.publish >= 2000 && item.genre=="history" )  // short hand 

console.log(filterByPublish2);



// +++++++

// let FilterBookByForLoop = []

// Books.forEach((item)=>{
//     // return  FilterBookByForLoop.push(item.publish > 2000)
//     (FilterBookByForLoop.push(item.publish>2000) )
// })

// console.log(FilterBookByForLoop);




// let myCoading = [
//     {
//         languageName:"JavaScript",
//         FileName:".js"
//     },
//     {
//         languageName:"Java",
//         FileName:".java"
//     },
//     {
//         languageName:"python",
//         FileName:".py"
//     }
// ]

// myCoading.forEach((val,index)=>{
//     console.log(val.languageName);
// })




