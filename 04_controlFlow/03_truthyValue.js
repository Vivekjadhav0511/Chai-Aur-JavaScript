

const userEmail = []


if (userEmail) {
    console.log("Got A user Email");
}else{
    console.log("Don't Have a User Email");
}

// Falsy Value => "" ,  false , 0 ,-0 , BigInt 0n , null ,undefined , NaN


// truthy Value => {} , [] , "0" , "false" , " " , function(){} , 


if (userEmail.length ===0) {
    console.log("Array Is Empty");
}else{
    "Array IS not Empty"
}

const emptyObject = {}

if (Object.keys(emptyObject).length === 0) {
    console.log("Object Is Empty ");
}else{
    console.log("Object Is Not Empty");
}


console.log( false == 0);  // true

console.log(false == ''); // true

console.log(0 == ''); // true

console.log(true == 0); // false 

// Nullish Cool