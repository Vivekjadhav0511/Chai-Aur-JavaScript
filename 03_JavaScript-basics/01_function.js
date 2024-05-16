
// ******* Function *************

function sayName(){  // function Scope 

    console.log("v");
    console.log("i");
    console.log("v");  // 
    console.log("e");
    console.log("k");

}

sayName  // function referance 

sayName()  // fucnction Execute 


function addTwoNumber(num1,num2){   // parameter

    console.log(num1 + num2);

}
addTwoNumber(50,100)   // 100
let result = addTwoNumber(50,50)  // Arguments
console.log('result', result);  // result undefined => function not returning anything 


function addTwoNumberWithReturn(num1,num2){   // parameter

//    let result = num1 + num2
//    return result   // After executing a function return e result 
//    console.log("vivek ");  // after return nothing rxecute

    return num1 + num2

}
let result2 = addTwoNumberWithReturn(400,2)

console.log('Result' , result2);

// **************

function loginuserMessage(userName){
    if (userName=="") {
        console.log( "insuffient Character please enter full Name ");
        return;
    }else if(userName==undefined) {
        console.log("please enter a Name ");
    }
    else{
        return `${userName}  just Loged in `
    }
}
console.log(loginuserMessage('Vivek'));

// console.log(loginuserMessage(""));


// ***** --- rest operator ---*****************

function calculateCartPrice(val1,val2,...num){ // rest operator

    return val1,val2,num

}

console.log(calculateCartPrice(100,200,300,400));


// ***** Take a Object a Argument ************

let user ={
    name:"vivek",
    email:"vivekjadhav@gmail.com"
}

function handleObject(anyObject){

console.log(`${anyObject.name} and email id is ${anyObject.email}`);

}
handleObject(user) // vivek and email id is vivekjadhav@gmail.com


// *********** Take a Object as Argument ---------

handleObject({
    name:"vivek",
    email:"vivekjadhav@gmail.com"  // vivek and email id is vivekjadhav@gmail.com
}
)

// ****  Take a Array as Argument*******************

const myNewArray = [200,500,700,900,400,600,3500]

function returnSecondValue(getArray){

    return getArray[0] 

}

console.log(returnSecondValue(myNewArray)); // 200 



function returnArray(getArray){

    return getArray[0] 

}

console.log(returnArray([10,20,30,40,50])); // 2

