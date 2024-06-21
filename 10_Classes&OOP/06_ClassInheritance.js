

class user{
    constructor(userName,email){
        this.userName=userName
        this.email=email
        
    }
// method
    logMe(){
       console.log(`userName ${this.userName}`);
    }
}

class Teacher extends user{
    constructor(userName,email,password){
        super(userName,email)
        this.password=password
    }

    addCourse(){
        return `new course Added by ${this.userName} & email is ${this.email}`
    }
}


let studentOne = new Teacher("vivek Jadhav","gmail.com","pass@555")
let userOne=new user("userOne")

console.log(studentOne.addCourse()); // new course Added by vivek Jadhav & email is gmail.com
userOne.logMe(); // userName userOne
studentOne.logMe(); // userName vivek Jadhav

console.log(userOne === studentOne);   // false

