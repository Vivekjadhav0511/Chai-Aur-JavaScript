// singleton 
// Object.create()


// Object  Literals 

let mySym = Symbol("use Me")

const user ={

    name : "Vivek",
    "full Name":"vivek Jadhav",
    age : 18,
    [mySym]:"user Symbol",
    location :"Yavatmal",
    email:"vivekjadha@gmail.com",
    isloggedin:"true",
    LastLoginDays:["monday","tue","fri"]

}

console.log(user);

console.log(user.LastLoginDays); // [ 'monday', 'tue', 'fri' ] Asscessing LastLoginDays Form A user

// console.log(user[email]); // ReferenceError: email is not defined => Js engine treat Keys As a " String"

console.log(user["email"]); // vivekjadha@gmail.com
 
console.log(user["full Name"]); // vivek Jadhav

// console.log(user[mySym],typeof(user[mySym])); //  [Symbol(use Me)]: 'user Symbol'

// ****** Changes In Key-values *************

user.email = "EmailGot changed In Object" // email: 'EmailGot changed In Object', Object Is Non_primitive type of datatype passes the
// refercance of  varible that's why if we make changes in any value it reflect in original value Also

console.log(user);

// ***** Freeze () ***********
// Object.freeze(user)


user.email = "user Object Freeze" // User Object freeze

console.log(user);

// **** Adding Function in Object*******************

user.Greeting = function(){
    console.log(`my Name is${user["full Name"]} and Im ${user.age} old`);
}


console.log(user.Greeting());








