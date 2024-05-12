const accountId = 101

let accountEmail = "vivekJadhav555@gmail.com"   // space Reserve in Memory With Variable

var accountPassword = "55555"  // Prefer Not To use Var Because Of Issue in Functional And Block Scope 

accountCity= 'Yavatmal'  // if We not Declare Variable in JavaScript Automatically Declare A Variable

/* clrt + Shift + Q  */  

let accountState;

// accountId=5          // Const Not Changable ** And We Have To Declare And Intilize Value In Same Line In Const

accountEmail="accountEmail@333"

accountPassword="44444"

accountCity="Mumbai"

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

// ********** VAR ****************

var Name = "vivek Jadhav"  // Var => var Redeclare And Reinitialization 

console.log(Name); 

console.log(Name); 

 var Name = "Tushar Jadhav"

 Name = "Arati Jadhav"

 console.log(Name);

//  ************* LET *************************

let Game = "ludo"

console.log(Game); 

Game = "CandyCrush"

console.log(Game); 
 
// let Game = " FreeFire"  // SyntaxError: Identifier 'Game' has already been declared

console.log(Game); // Let => We can't Redeclare bt We can Reinitiliazation


// ************** Const ************************


const Score = 5555

console.log(Score);

// Score = 0000   // TypeError: Assignment to constant variable.

console.log(Score); // Const => we Can't Redeclare & we can't Reinitiliazation And In Const declaration & initiliazation is must Be In Same Line 
 
