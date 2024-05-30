setTimeout(()=>{
    console.log("setTimeOUt");
},0)

new Promise((res,rej)=>{
    if (true) {
        res(fetch("https://api.github.com/users/Vivekjadhav0511"))
    }else{
        rej("Error : Something went Wrong")
    }
}).then((data)=>{
    // console.log("thennnn");
    console.log(data);
let result = data.json()
console.log(result);
return result
}).then((resultData)=>{
    console.log(resultData);
}).catch((error)=>{
    console.log("Error");
})

let movie={
    movieName:"PATHAN",
    IMdRathing:"⭐⭐⭐⭐⭐",
    type:"Thrillred , suspence ",
    arroww : function(){
        console.log(this.movieName);
    }
}

console.log(movie.arroww());

fetch("https://api.github.com/users/Vivekjadhav0511",{movie})
.then((res,moviee)=>{
    console.log(res,movie);
    let inJson=res.json()
    return inJson
}).then((resultData)=>{
    console.log(resultData ,movie.IMdRathing);
}).catch((error)=>{
    console.log(error);
})

// ++++++++++++++++++++++++++++++++++

// XMLHttpRequest() was desined to fetch data viw HTTP

async function postJSON(data) {
    try {
      const response = await fetch("https://api.github.com/users/Vivekjadhav0511", 
      {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  const data = { username: "example" };
  postJSON(data);
  


  // Example POST method implementation:
async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

postData("https://api.github.com/users/Vivekjadhav0511", { answer: 42 }).then((data) => {
    console.log(typeof data);
    console.log(data); // JSON data parsed by `data.json()` call
  });
  