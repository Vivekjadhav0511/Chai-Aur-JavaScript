
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

// ++++++++++++++    REVISION   +++++++++++++++++++++

 let arr = [10,20,30,40,50]

 arr.forEach((val,index)=>{
    console.log(val);
 })

 let ResultArr= arr.filter((val,index)=>{
    return val > 20;

 })

 let ResultArr2= arr.map((val,index)=>{
    return val + 1;

 })


 let ResultArr3= arr.reduce((acc,Cval)=>{
    // console.log(`${acc} + ${Cval}`);
    return acc + Cval ;

 })

 console.log(ResultArr);
 console.log(ResultArr2);
 console.log(ResultArr3);


 for (let i = 0; i < arr.length; i++) {
      console.log(`index :- ${i}  & element ${arr[i]}`);
 }

 for (const key in arr) {
    console.log(arr[key]);
 }

 for (const val of arr) {
    console.log(`val ${val}`);
 }


 let language = {
    js : "javaScipt",
    cpp : "C++",
    rb:"Ruby",
    swift:"Swift By Apple"
}

for (const lan in language) {
 console.log(`language${lan} :- ${language[lan]}`);
 
}

console.log(language.hasOwnProperty("jss "));

