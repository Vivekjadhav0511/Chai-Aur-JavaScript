
const user ={
    userName:"vivek",
    logginCount:8,
    isLoggedIn:true,
    getUserDetails:function(){
        // console.log("got user datails from Db");
        console.log(`user :${this.userName} loggedIn ${this.logginCount} times`);
        console.log(this);
    }
}

console.log(user.userName);
console.log(user.getUserDetails());


// ********** Constructor Function ( new => gives a new Instance)*********************

function book (bookName,price,author){
    this.bookName = bookName;
    this.price = price;
    this.author = author;

    this.greeting = function(){
        console.log(`welcome to ${this.bookName}`);
    }
    // return this
}

let book1 = new book("IkIGAI" , "999" , "Abc") // {} bookName: 'IkIGAI',price: '999',author: 'Abc'}

let book2  = new book("art of Not Giving F**k", 555,"Mark Manson")

console.log(book1);
console.log(book2);
console.log(book2.greeting());
console.log(book1 instanceof book);

console.log(book1.constructor);

 
// new Crate a New Object called a instance 
//  constructor function called due to new keyword 
// inject the augument
// got a output

// ++++++++++++++++++++++++++++++++++++++++++++=

// In JavaScript, a constructor function is a special type of function that is used to create and initialize objects. When you call a constructor function with the new keyword, it sets up a new object, assigns properties and methods to it, and returns the new object.

// Syntax
// A constructor function typically starts with a capital letter by convention, which differentiates it from regular functions.

// javascript
// Copy code
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  };
}
// Creating an Object with a Constructor Function
// To create an object using the Person constructor function, you use the new keyword:

// javascript
// Copy code
const john = new Person('John', 30);
// john.greet(); // Output: Hello, my name is John and I am 30 years old.

const jane = new Person('Jane', 25);
// jane.greet(); // Output: Hello, my name is Jane and I am 25 years old.
// How It Works
// new keyword:

// Creates a new empty object.
// Sets the prototype of this new object to the Person.prototype.
// Binds this inside the Person constructor to the new object.
// Executes the constructor function's code.
// Returns the new object.
// Properties and Methods:

// Inside the constructor function, this.name and this.age create properties on the new object.
// this.greet adds a method to the new object.
// Using Prototypes for Methods
// To avoid recreating the same method for every instance, you can define methods on the constructor's prototype. This is more memory efficient:

// javascript
// Copy code
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

const john2 = new Person('John', 30);
john.greet(); // Output: Hello, my name is John and I am 30 years old.

const jane2 = new Person('Jane', 25);
jane.greet(); // Output: Hello, my name is Jane and I am 25 years old.
// Inheritance with Constructor Functions
// You can achieve inheritance using constructor functions by setting up the prototype chain:

// javascript
// Copy code
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

function Employee(name, age, jobTitle) {
  Person.call(this, name, age); // Call the Person constructor
  this.jobTitle = jobTitle;
}

// Set up inheritance
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.work = function() {
  console.log(`${this.name} is working as a ${this.jobTitle}.`);
};

const alice = new Employee('Alice', 28, 'Engineer');
alice.greet(); // Output: Hello, my name is Alice and I am 28 years old.
alice.work(); // Output: Alice is working as a Engineer.
// Summary
// Constructor functions in JavaScript provide a way to create and initialize objects with shared properties and methods.
// Using prototypes, you can define methods that are shared among all instances, leading to better memory efficiency. 
//The new keyword is crucial in this process, ensuring that the constructor function behaves correctly by creating a new object and returning it.
// By using inheritance patterns, you can create complex object hierarchies and reuse functionality.


let { bookName , author ,price } = book2

console.log(bookName,price,author);

let arr=[5230,85430]
console.log(arr);


function Movie(movieName,rating,isAvalable){
  this.movieName = movieName
  this.rating = rating
  this.isAvalable=isAvalable
}

let MovieOne = new Movie("pathan","⭐⭐⭐⭐",true)

console.log(MovieOne);



