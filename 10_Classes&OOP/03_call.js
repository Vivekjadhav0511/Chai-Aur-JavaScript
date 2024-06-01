
function setUserName(userName){
   this.userName=userName
   console.log("setUserName called");
}

 
function anotherUser(userName,email,password){
   setUserName.call(this,userName) // to hold referance 

   this.email=email
   this.password=password
}

let userOne= new anotherUser("vivek",'js@gmail.com',88886431)

console.log(userOne);





function outer(){
   function inner(){
      console.log(this);
   }
   inner()
}

outer()