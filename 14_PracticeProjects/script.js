
let form = document.querySelector('form')
let nameError = document.getElementById('nameError')
let emailError = document.getElementById('emailError')
let messageError = document.getElementById('messageError')
let submitError = document.getElementById('submitError')
let localName 
let localEmail

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    if (true) {
        validateInputs()
    }
})

function validateName(){
    let NameValue= document.getElementById('name').value.trim()
    localName = localStorage.setItem('userName' , NameValue)

    if (NameValue === '') {
        nameError.innerHTML = " UserName Is Required"
        return false

    }else if(!NameValue.match(/^[A-Za-z][^\d~`?!^*¨ˆ;@=$%{}\[\]\|\\\/<>#“.,]*$/)){
        nameError.innerHTML = "Only Character Are Allowed !"
        return false
    } 
        
    nameError.innerHTML = ''
    return true
}

function EmailValidate(){

    let emailValue = document.getElementById('email').value.trim()
    localEmail = localStorage.setItem('Email Address' , emailValue)

    let emailValidCondition =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if (emailValue==0) {
        emailError.innerHTML = " Email is Required"
        return false
    }

    if (!emailValue.match(emailValidCondition)) {
        emailError.innerHTML = "Please Enter a Valid Email Id"
        return false
    }

    emailError.innerHTML = ""
    return true
}

function MessageValidate(){
    let messageValue= document.getElementById('message').value.trim()
    let messageCounte = 30
    // let left = messageCounte - messageValue.lenght

    if (messageValue==0) {
        messageError.innerHTML = " Message is Required"
        return false
    }

    messageError.innerHTML=''
    return true
}

function validateInputs(){
   validateName()
   EmailValidate()
   MessageValidate()

   if (validateName() && EmailValidate() && MessageValidate()) {
    Swal.fire({
        title: "Good job !",
        text: "Form is Successfully Submited !",
        icon: "success"
      });
   }

   form.reset()
}
