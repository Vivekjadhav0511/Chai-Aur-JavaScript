

// ++++ HIGHER ORDER FUNCTION +++++++++


// const { default: axios } = require("axios");




// HIGHER ORDER FUNCTION IS FUNCTION WHICH ACCEPT A FUNCTION IN A PARAMETER OR RETURN 
//  A FUNCTION OR BOTH 


let functionOne = function(){
    console.log("FunctionOne");
}
// functionOne("FunctionOne")


let functioAsParameter = function(funVal){
    console.log(funVal);
}

functioAsParameter("functioAsParameter")

// functioAsParameter("functioAsParameter") 

// functioAsParameter(functionOne)  

let functionSecond = (function(){
             
})

let arr = [10,20,30,50,80,70]  //  forEach is higher order function cause it takes another function as parameter
                         
arr.forEach((value,index)=>{

   console.log(value);

})

// constructor Function ++++++++++

  // when we want to create a multiple item's with same property in that situation we can use constructor function

function SanchaOfBiscuits(height,color,test){
    this.height=height
    this.color=color
    this.test=test
 }

let bis1 = new SanchaOfBiscuits("50cm","Brown",'sugaryy')
let bis2 = new SanchaOfBiscuits("10cm","black",'sweet')
let bis= new SanchaOfBiscuits()
console.log(bis);
console.log(bis1);
console.log(bis2);


// ++++  FIRST CLASS FUNCTION +++++++++++

// in language ,function which we can treated as normal value ,variable and can save them ,pass them



// ++++ New KeyWord +++++++++
  
// new create a new empty object / create a new instance




// +++++ iife ( immediately invoked function expression)
// iife used to call function immediately to avoid a pollution from a global Scope



// ++++  Prototype ++++++

// when we create a obj in js ,javaScipt gives us some predefined methods and values that's nothing but a prototype 



function isPrime(n) { 
    // Corner case 
    if (n <= 1) 
        return false; 

    // Check from 2 to n-1 
    for (let i = 2; i < n; i++) 
        if (n % i == 0) 
            return false; 

    return true; 
} 

// Driver Code 

isPrime(19)  
    ? console.log("true")  
    : console.log("false"); 



let arrr = [1,50,77,80,2,11,11,2,22,50,50,50,70,50]  


// function compareNumbers(a, b) {
//     return a - b;
//   }  


/* 
When a is less than b:

javascript
Copy code
compareNumbers(2, 5);  // returns 2 - 5 = -3
The result is -3, a negative number, indicating that 2 should come before 5.

When a is equal to b:

javascript
Copy code
compareNumbers(10, 10);  // returns 10 - 10 = 0
The result is 0, indicating that 10 and 10 are equal in terms of sorting order.

When a is greater than b:

javascript
Copy code
compareNumbers(8, 3);  // returns 8 - 3 = 5
The result is 5, a positive number, indicating that 8 should come after 3.
*/

/* 
Without a comparison function, the sort method in JavaScript converts
 the elements to strings and sorts them lexicographically
 (dictionary order). This can lead to incorrect sorting for numbers.

 */


let sortArray = arrr.sort((a ,b)=>{
    return a-b
})

console.log("sort Array" , sortArray );



let FilteredArray = arrr.filter((value , index)=>{
   return arrr.indexOf(value) === index 
})

// console.log(array);

console.log(FilteredArray);

function removeDuplicates(arrr){
    let map = new Map()
    
    arrr.forEach((item)=>{
        map.set(item,true)
    })

    return Array.from(map.keys())

}

console.log(removeDuplicates(arrr));



let url = 'https://api.github.com/users/Vivekjadhav0511'


// async function fetchAPI(){
// axios.get('https://api.github.com/users/mapbox')
// .then((response) => {
//   console.log(response.data);
//   console.log(response.status);
//   console.log(response.statusText);
//   console.log(response.headers);
//   console.log(response.config);
// });
// }



async function getAPI(){
   try {
    let fetchurl = await fetch(url)
    // console.log(fetchurl);
    let response = await fetchurl.json()
    console.log(response);
   } catch (error) {
    console.error(error)
   }
}

getAPI()



async function getAPIAxios(){
    let fetchurl = await axios.get(url)
    console.log(fetchurl);
    let response = await fetchurl.json()
    console.log(response);
}

getAPIAxios()

    
