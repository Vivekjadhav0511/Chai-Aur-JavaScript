
// Es6

class user{
    constructor(userName,email,password){
        this.userName=userName,
        this.email = email,
        this.password = password
        
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUserName(){
        return `${this.userName.toUpperCase()}`
    }
}

let studentOne = new user("vivek Jadhav","vivel@gamil.com",446464463)

// console.log(studentOne);
console.log(studentOne.encryptPassword());
console.log(studentOne.changeUserName());

// ++++++++ behind the Scene +++++++++++++++

function User(userName,email,password){
    this.userName=userName
    this.email = email
    this.password = password
}

User.prototype. changeUserName=function(){
    return `${this.userName.toUpperCase()}`
}

User.prototype.encryptPassword=function(){
    return `${this.password}abc`
}

let behind = new User(" Behind The Scene","vivel@gamil.com",446464463)

console.log(behind);
console.log(behind.changeUserName());
console.log(behind.encryptPassword());
