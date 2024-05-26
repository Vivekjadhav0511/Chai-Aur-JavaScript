
let title = document.getElementById('title')

console.log(title);
console.log(title.getAttribute('id')); // title

title.setAttribute("class" ,"setAttribute")

console.log(title.getAttribute("class"));

document.getElementById("title").innerHTML = "InnerHTML chnaged By DOM Manipulation"

let ulList = document.querySelector(".ulList")

console.log(ulList);

let liList = ulList.querySelector(".list").innerHTML = " CHANGED LI"

let liList2 = ulList.querySelector(".list")

console.log(liList);

console.log(liList2);

let queryAll = document.getElementsByClassName("list")  // return a HTML collection 
console.log(queryAll);

let FromArray= Array.from(queryAll)

let forEachIttration = FromArray.forEach((item,index)=>{
    console.log(item , index );
 })

// console.log(fromHTML);

let querySelectorAllItem = document.querySelectorAll(".list")  // node List 

console.log(querySelectorAllItem);

querySelectorAllItem.forEach((item , index)=>{
    console.log(item,index)
})










