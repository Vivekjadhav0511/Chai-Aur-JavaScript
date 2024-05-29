

// +++++++++ promise 1 ++++++++++

const promise1 = new Promise((resolved,reject)=>{
    // Do an Async Task 
    // DB Calls , Cryptography , newtworkCall

    setTimeout(()=>{
        console.log("Task task Completed");
        resolved()
    },1000)
})

promise1.then((data)=>{
  console.log("promiss consumed");
})


// +++++++++ promise 2 ++++++++++

new Promise((resolved,reject)=>{
    setTimeout(()=>{
        console.log("Aysnc Task 2");
        resolved()
    },1000)
}).then(()=>{
    console.log("promis comsumed 2");
})

// +++++++++ promise3 ++++++++++

const promise3 = new Promise((res,rej)=>{
    setTimeout(()=>{
          res({userName: "chai", email: "chaiOrCode"}) 
    },1000)
})

promise3.then((data)=>{
     console.log(data);
})

// +++++++++ promise 4   ++++++++++


const promise4 = new Promise((res,rej)=>{

    setTimeout(()=>{
         let error = false
         if (!error) {
            res("error Resolved And Promis Completed Succesfully...")
         }else{
            rej("Promiss Get Rejected....")
         }
    },1000)

})

promise4.then((data)=>{
    console.log("promise got it");
    console.log(data);
}).catch((errorF)=>{
    console.log("Error Founde");
})


// +++++++++ promise 5   ++++++++++


const promise5 = new Promise((res,rej)=>{

    setTimeout(()=>{
         let error = false
         if (!error) {
            res({userName:"vivek" , pass:"123"})
         }else{
            rej("ERROR : Something Went Wrong")
         }
    },1000)

})

promise5.then((data)=>{
    console.log("Data Got");
    console.log(data);
   return data.userName  //whatever data we get in 1st then is passes to next then as a Answer and return
}).then((userName)=>{      // chaining 
    console.log(userName);
}).catch((errorF)=>{
    console.log("Error Founde");
})


// +++++++++ promise 6  ++++++++++


let Promise6 = new Promise((res,rej)=>{
    if(false) {
        res({userName:"vivej Jadhav" , Password : "vivek5555"})
    }else{
        rej("Error : Error { Async Await try Catch}Somethige Went Wrong .....")
    }
});

async  function consumePromis6(){
  try {
   let response = await Promise6
  console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromis6()


// +++++++++ promise 6 (fetch) ++++++++++

async function getAllUSer(){
 let reponse= await fetch("https://api.github.com/users/Vivekjadhav0511")
    let dataResult = await(reponse.json());
 console.log(dataResult);
}

getAllUSer()


// ++++++ fetch the data From Url+++++++++++++

new Promise((res,rej)=>{
    if (true) {
        res(fetch("https://api.github.com/users/Vivekjadhav0511"))
    }else{
        rej("Error : data Not Acessable ")
    }
}).then((response)=>{
    console.log(response);
    inJson = response.json()  // Response {type: 'cors', url: 'https://api.github.com/users/Vivekjadhav0511', redirected: false, status: 200, ok: true, …}
    console.log(inJson);  // pending stage 
    return inJson // return the injson the response.json()  pass to the next then
}).then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
})

// ++++++++ then Then Chaining theing+++++++++++++++++++++++++

fetch("https://api.github.com/users/Vivekjadhav0511")
.then((response)=>{
    console.log(response); // Response {type: 'cors', url: 'https://api.github.com/users/Vivekjadhav0511', redirected: false, status: 200, ok: true, …}
    console.log(typeof response);
    let inJson = response.json()
    .then((resultData)=>{
    console.log(resultData);
    console.log(typeof inJson,inJson); // object Promise {<pending>}
})
}).catch((error)=>{
    console.log(error);
})