
// for Of Loop

const arr = [100,500,810,8413,8413]

for (const i of arr) {
    console.log(i);
}


let greetings = "hello World !"

for (const greet of greetings) {
    console.log(greet);
}


for (const greet of greetings) {
    if (greet==' ') {
        continue
    }
    console.log(greet);
}

let myArray = new Array(43313,84313,84643)

console.log(myArray);

let myObject = {
    email:"vivekJadhav@555",
    isLoggedIn:true,
    passWord:"vivek555"
}

for (const obj of Object.entries(myObject)) {
    console.log(  `${obj[0]} : ${obj[1]}`);
}

for (const [key,value] of myObject) {
    console.log(key);              // Not iterable
}

// +++ MAPS ++++++

const map = new Map()

map.set("In" ,"Indai")
map.set("USA" , "united States Of America ")

console.log(map);

for (const [key,value] of map) {
    console.log(key);
}

