
// javascript having a prototypal behaviore
// constructor is nothing but a information about a referance

function mulBy5(num){
   return num * 5
}
console.log(mulBy5(5));

mulBy5.power=2

console.log(mulBy5.power);

console.log(mulBy5.prototype);
 
console.log(typeof null);


// let a = 20;
// console.log(a);

// function callVariable(){
//    let a =30
//    console.log(a);
// }
// callVariable()


function sayHello(){
   console.log("Hello JavaScript");
}
sayHello()

console.log(sayHello.prototype)

sayHello.power="vivek"

console.log(sayHello.power);



// let array = new Array(10,50,60,82000)
// console.log(array);

// let obj=new Object
// obj.name="vivekJadhav"
// obj.pass="8553"
// console.log(obj);



function createUser(userName,score){
   this.userName=userName
   this.score=score
}

let userOne = new createUser("thor","95%")
let usertwo = new createUser("Hulk","995%")

// to avoid a recreating the same method for every instance you can 
// define method in constructor prototype for memory effcient 
createUser.prototype.greet = function(){
   console.log(`hello my Name is ${this.userName} & having a Score ${this.score}`);
}
console.log(userOne); 
userOne.greet(); 
console.log(usertwo);
usertwo.greet();
console.log(userOne.constructor); // // gives a refrance of the Object mean parent/source of the Object


function hero(){
   console.log("ham thor hai Odin putra ham Jagha Mojut");
}

let movie =["pathan","shaitan","ironMan","superMan"]
Object.prototype.callMyName=function(){
   // console.log(this);
   console.log("Loki Present EveryWhere");
}


Array.prototype.callMyName=function(){
   console.log("Araray Object0 Present EveryWhere");
}

usertwo.callMyName()
hero.callMyName();
userOne.greet.callMyName();
userOne.callMyName();
movie.callMyName();

// console.log(movie);
// +++++ prtotypal Inheritance ++++++++++++++++++++++

let student={
   stuName:"Vivek Jadhav"
}
let studentTwo={
   stuName:"thor"
}

let teacher={
   techerName:"hitesh Chaudhary",
   // __proto__:student
}

let teacherTwo={
   techerName:"code With Harry",
   __proto__:studentTwo
}

teacher.__proto__= student
// studentTwo.__proto__ = teacherTwo

// console.log(teacher);
console.log(teacherTwo);
console.log(studentTwo);
console.log(student);

// moderSyntax setPrototypeOf++++++++++

let bookName={
   Book:"the art Of not Giving F**K"
}
let theAuthor={
   author:"mark manson"
}

Object.setPrototypeOf(theAuthor,bookName)

console.log("author can acess the property of Book",theAuthor);


let strName = "Thor       "
// console.log(strName,strName.length); // 11 

let myName="ironMan            "

String.prototype.trueLenght = function(){
   console.log(this);
   return this.trim().length
}

console.log(strName.trueLenght())
console.log(myName.trueLenght())




// let book={
//    bookName:"abc",
//    price:522
// }

// console.log(book.constructor);