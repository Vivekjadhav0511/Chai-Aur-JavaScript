
let parent = document.querySelector('.parent')
let childs = document.querySelectorAll('.day')

console.log(parent);
console.log(parent.children);
console.log(parent.children[2]); // <div class="day">wednesday</div>

for (let i = 0; i < parent.children.length; i++) {
    
          console.log(parent.children[i].innerHTML);
    
}

parent.children[1].style = "color:red"
parent.children[1].style = "font-weight:900"
parent.children[1].style = "font-size:30px"

parent.firstElementChild.innerHTML = "MONDAY 🔁"

parent.lastElementChild.innerHTML = "FRIDAY 🔁" 

let dayOne = document.querySelector('.day')

// console.log(dayOne);

// console.log(dayOne.parentElement);

dayOne.nextElementSibling.style.color = "blue";

console.log("NODES" , parent.childNodes);

