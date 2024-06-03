
function setUserName(userName){
   this.userName=userName
   console.log("setUserName called");

   this.getUserName = function(){
      console.log(`userName is :- ${this.userName} `);
   }
}

// setUserName.prototype.byPrototypeFunction = function(){
//    console.log(`userName is :- ${this.userName} byPrototypeFunction`);
// }

// setUserName.prototype.greet = function() {
//    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//  };
 

 
function anotherUser(userName,email,password,getUserName){
   setUserName.call(this,userName,getUserName) // to hold referance 
   this.email=email
   this.password=password
}

let userOne= new anotherUser("vivek jadhav acces from another function constructor",'js@gmail.com',88886431)
let userTwo=new setUserName("setName Acess")

userOne.getUserName()
userTwo.getUserName();
// userTwo.getUserName();
// userOne.byPrototypeFunction()





// function outer(){
//    function inner(){
//       console.log(this);
//    }
//    inner()
// }

// outer()