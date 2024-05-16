

let tinderUSer = new Object()  // SingleTon  object constructor

// let tinderUSer ={}

console.log(tinderUSer);  // {}  => Empty Object

tinderUSer.id = "123abc"

tinderUSer.Name = "Sam"

tinderUSer.isloggedIn = " true"

console.log(tinderUSer);  // { id: '123abc', Name: 'Sam', isloggedIn: ' true' }

const regularUser = {  // 
    email:"vivekjadhva@gmail.com",
    fullName:{
          userFullName:{
            firstName:"vivek",
            LastName:"jadhav"
          }
    }
}

console.log(regularUser.fullName?.userFullName); // { firstName: 'vivek', LastName: 'jadhav' }

// ? => Optional Chaining

// ***********************

const obj1= {
    1:"A",
    2:"B"
}


const obj2= {
    3:"C",
    4:"D"
}

// let obj3={obj1 , obj2} // { obj1: { '1': 'A', '2': 'B' }, obj2: { '3': 'C', '4': 'D' } }

// const obj3 = Object.assign({},obj1,obj2)  // { '1': 'A', '2': 'B', '3': 'C', '4': 'D' }  {} => targrt , source 

const obj3= {...obj1, ...obj2}  // { '1': 'A', '2': 'B', '3': 'C', '4': 'D' }

console.log(obj3); 


// ****************

let databaseUSer = [
    {
        Id:1,
        email:"user1@gmail.com"
    },
    {
        Id:2,
        email:"user2@gmail.com"
    },
    {
        Id:3,
        email:"user3@gmail.com"
    }
]

console.log(databaseUSer[1].Id,databaseUSer[1].email);


// ********  ---- Object Keys , Values , entires *******************

console.log(tinderUSer);

console.log(Object.keys(tinderUSer)); // [ 'id', 'Name', 'isloggedIn' ]

console.log(Object.values(tinderUSer)); // [ '123abc', 'Sam', ' true' ]

console.log(Object.entries(tinderUSer)); // [ [ 'id', '123abc' ], [ 'Name', 'Sam' ], [ 'isloggedIn', ' true' ] ]

 
let SpreadObject = Object.values(tinderUSer); // [ '123abc', 'Sam', ' true' ]

console.log(...SpreadObject); // 123abc Sam  true

console.log(tinderUSer.hasOwnProperty("isloggedIn"));

console.log(this); // {}  => this represnt the currunt scope 



// ********Object destructureing*******************

const course = {
    courseName:"JavaScript",
    cousrePrice:999,
    courseInstructor:"Hitesh"
}

// console.log(course.courseInstuctor);

const {courseInstructor: teacher,courseName,cousrePrice} = course

console.log(cousrePrice ,typeof(cousrePrice)); //  999 number
console.log(courseName); // JavaScript
console.log(teacher); // Hitesh


// ***--- API --------- ******************

// {
//     "courseName": "JavaScript",
//     "cousrePrice":999,
//     "courseInstructor":"Hitesh"
// }

