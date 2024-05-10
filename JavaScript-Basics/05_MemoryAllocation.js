// *********** Memroy Allocation  **************
 
// Two Types OF Memory 

// Stack ( Primitive )   It Passes The Copy Of the VAriable 

// Heap ( Non-Primitive) It PAsses The Referance Of The Variable ( MAkes Changes IN Original Value  )

let game = "LUDO"   // { Primitive DataType => Stack Memory  }

let anotherGame = game

console.log( anotherGame);

anotherGame = "FREE FIRE"

console.log(anotherGame);
 
console.log(game);

/* 




*/



let user1={
    email:"User@gmail.com",
    number:554436646,
    upi:"Chai@ybl"       // Array & Object is Non-Primitive Goes Inside Heap
}

let userTwo = user1

console.log(user1)

console.log(userTwo);

userTwo.email="EmailGotChanged@gmail.com"  // Email GOt changed changes In userTwo => js Engine Automattically changes in User One 

                                           // it passes a Referance of the variable that's why Changes in Original value Variable 

console.log(userTwo);

console.log(user1)




