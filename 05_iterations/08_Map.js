

// Map +++++++++++

let myNumber = [1,2,3,4,5,6,7,8,9,10]

let add10 = myNumber.map((num)=> num + 10)  // [11, 12, 13, 14, 15,16, 17, 18, 19, 20]

console.log(add10);

// by ForEach ++

let empArray = []

myNumber.forEach((val)=>{
    console.log(empArray.push(val + 10))  // this log the value in number 
})

console.log(empArray); //  [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] log value in Array by Pushing 


// +++ CHAINING  +++++++

let chaining =  myNumber
                       .map((item)=> item * 10)
                       .map((item)=> item + 1)
                       .filter((item)=> item > 50)

console.log(chaining);