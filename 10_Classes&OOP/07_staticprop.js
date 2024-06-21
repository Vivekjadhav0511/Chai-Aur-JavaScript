

class User{
    constructor(userName){
        this.userName=userName
    }
    
    logMe(){
        console.log(`userName is ${this.userName}`);
    }

    static createId(){  // staic denied a acess 
        return `123`
    }
}

let vivek = new User("vivekJadhav")
// console.log(vivek.createId());

class Teacher extends User{
    constructor(userName,email){
        super(userName)
        this.email=email
    }
}

let iphone = new Teacher("iphone13","apple@555")
console.log(iphone); // Teacher { userName: 'iphone13', email: 'apple@555' }
iphone.logMe(); // userName is iphone13
console.log(iphone.createId())