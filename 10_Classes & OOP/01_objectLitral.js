
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

// ++++++++++++++++++++++++++