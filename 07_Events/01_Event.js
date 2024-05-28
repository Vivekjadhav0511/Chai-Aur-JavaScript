
// let book1= document.getElementById('book1')

// // book1.addEventListener('click',function(){
// //     alert("book Number 1")
// // })

// // type, timeStamp,defaultPrevented, target ,toElemet,srcElement , currentTarget,clientX,ClientY,screenX,screenY
// // altKey,ctrlKey,shiftKey ,keyCode 


let ulClick=document.getElementById('ulList')

// ulClick.addEventListener('click',function(e){
//     console.log("clicked inside the Ul");
// })

// book1.addEventListener('click',function(e){  // event Object 
//   console.log("water Skipper Clicked");
//   e.stopPropagation()
// })

// let google=document.getElementById('google')

// google.addEventListener('click',function(e){
//     e.preventDefault()
//     e.stopPropagation()
//     console.log("google Clikced");
// })


ulClick.addEventListener('click',function(e){
    // console.log(e.target.parentNode);
    console.log(e.target.tagName);
    if (e.target.tagName==="IMG") {
        let removeIt = e.target.parentNode
        removeIt.remove()
        console.log(e.target.id);
    }
    // removeIt.parentNode.removeChild(removeIt)
})


let list2=document.getElementById('list2')
let img2=document.getElementById('img2')

list2.addEventListener('click',function(event){
    // console.log(event.target.parentNode);
    // let removeLi= event.target.parentNode
    // removeLi.remove()
    if (event.target.tagName=="IMG") {
        let removeLi2=event.target.parentNode
        removeLi2.remove()
    }
})