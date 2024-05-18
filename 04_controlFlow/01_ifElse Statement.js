// *****CONTROL  FLOW******

// IF-ELSE STATEMENT

const Temprature = 41

if (Temprature < 50) {
    console.log("temprature Less Than 50"); // temprature Less Than 50
}else{
    console.log("temprature Greater Than 50");
}

// comaprision Operator

// < = lessThen , > = GreaterThan , <= lessThanEqualTo , >= GreaterThanEqualTo , == Equal To , != NotEqualTo 

// === Strictly Equal check dataType Also To , !== 


if (2==2) {
    console.log(" 2==2 true");
}else{
    console.log("false");
}

// ++++++

const Score = 200;

if (Score > 100) {
    let power =" fly"
    console.log(` user power : ${power}`);  //  user power :  fly
}else{
    console.log("don't have a Any Power ");
}

// ++++++++++++SHORT HAND NOTETION ++++++++++++++++
const balance = 1000

if (balance > 500) console.log(`balance :- ${balance}`);  // implicit code  => balance :- 1000


// Nesting Condition ++++++++++++++++++

if (balance < 500) {
    console.log("balance less than 500");
}else if (balance < 700) {
    console.log("balance less than 700");
}else if (balance < 900) {
    console.log("balance less than 900");
}else if (balance == 1000) {
    console.log("balance is equal To 1000"); // balance is equal To 1000
}else{
    console.log("Balance is Greater Than 1000");
}

// ++++++ MULTIPLE CONDITION IN IF() ++++++

const userLoggedIn = true

const debitCard = true

const loggedInFromGoogle = true

const loggedInFromEmail = false

if (userLoggedIn && debitCard && (loggedInFromEmail || loggedInFromGoogle)) {
    console.log("user Succesfully Login ");
}else{
    console.log("Please Enter A Valid Detail");
}


if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("allow To Login ");
}else{
    console.log("Unable To Login ");
}


