
// Reduce ++++=

let myNum = [1,2,3]

let total = myNum.reduce((acc,CValue)=>{
    console.log(`acc : ${acc} and cVal ${CValue} `);
    return acc + CValue
} ,0 )

console.log(total);

// +++++++++++++++++++++++++++++++++++++++++++


function calculateCartPrice(val1,val2,...num){ // rest operator

    return (val1)

}

console.log(calculateCartPrice(100,200,300,400));



const AddWithArrow = (num1, num2=20 )=>{  // Defalt parameter 
    return num1 * num2 
    }

 console.log(AddWithArrow(50));   // Nan
