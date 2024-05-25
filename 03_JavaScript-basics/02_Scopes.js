// / *******SCOPE'S*******************

// let a = 10;

// var b = 20;

// const cc = 30

// console.table(a)
// console.table(b)
// console.table(cc)

let a = 100;  // 

if (true) {  // Scope 
   let a = 10;
   var b = 20;  // var is Global Scope 
   const cc = 30;
   console.log("INNER let 'a' : ", a); // 10 Block Scope 
}

console.log("OUTER let 'a' " ,a)  // script.js:237 Uncaught ReferenceError: a is not defined
// console.log(b)  // 20
// console.table(cc)  //  Uncaught ReferenceError: cc is not defined

// ++++++++==

   function call (){
    console.log(this);
    let UserName = "vivek"
}
// call()

let callMe = function(){
    // let UserName = "vivek"
    console.log(this);
}
// callMe()

let arrow = ()=>{
    console.log(this);
}
arrow() // {}

function Fun(){
    console.log(this);
}
Fun()


// ******NESTED SCOPE / closure ******************
// Child function can Access the Properties / values of the Parent function is closure

function one(){
     const userName = "vivek"

     function Two(){
          const Website = "youtube"
          console.log(userName);
     }

    //  console.log(Website); // ReferenceError: Website is not defined

     Two()
}

one()


if (true) {
    const bookName = "How you Lost Me"

    if (bookName=="How you Lost Me") {
         console.log(bookName); // How you Lost Me 
         const Author = " Tim Burner Lie" 
         console.log(`${bookName} by ${Author}`); // How you Lost Me by  Tim Burner Lie
    }
    // console.log(Author);  // ReferenceError: Author is not defined  
                          //beacause Author defined in Scope that we are not Able to Access the Author 
}
  
// console.log(bookName); // ReferenceError: bookName is not defined
                       //  beacause BookName defined in Scope that we are not Able to Access the BookName OutSide the Scope 

// console.table(cc)  //  Uncaught ReferenceError: cc is not defined

// +++++++++++++++++++++++++++++++++++++

console.log(addOne(5));  // 6

function addOne(num){
    return num + 1
}

// console.log(addTwo(5)); // ReferenceError: Cannot access 'addTwo' before initialization

const addTwo = function(num){
   return num + 2              // Holding a Function in A varibale we called Function Expression 
}

console.log(addTwo(5));
//7b628a3 (Scope)
