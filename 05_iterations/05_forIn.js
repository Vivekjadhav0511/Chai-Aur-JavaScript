
// for In 

// for (const key in object) {
    // if (Object.hasOwnProperty.call(object, key)) {
        // const element = object[key];
        // 
    // }
// }


let language = {
    js : "javaScipt",
    cpp : "C++",
    rb:"Ruby",
    swift:"Swift By Apple"
}

console.log(language);

for (const key in language) {
   console.log(`${key} for ${language[key]}`);  //  js cpp rb swift
}


for (const obj of Object.entries(language)) {
    console.log(`${obj[0]} : ${obj[1]}`);
}

let myArray=[10,50,500,70,60,80]

for (const val in myArray) {
    console.log(myArray[val]);
}



// Forin On Map

let map = new Map()  // map is not iterable

map.set("In" , "India")
map.set("USA","United State Of America")
map.set("CH","Chaina")

// console.log(map);

for (const key in map) {
    console.log();
}

for (const [key,value] of map) {  // forOf usable 
    console.log(key,value);
}


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// for (let enteries = 0; enteries < Object.entries(language).length; enteries++) {
// //   console.log(Object.keys(language));    
// }


// for (const [keys ,values] of language) {
//    // console.log(keys);  // TypeError: language is not iterable
// }

for (const key in language) {
    console.log(key,language[key]);  //  js cpp rb swift
 }

 