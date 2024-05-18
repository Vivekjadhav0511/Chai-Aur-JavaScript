
// +++++ Switch ++++++++++=

// by using switch we can Easly Check Multiple Condition At A Time And in Easy Way 

// IMP => AFTER EACH CASE WE HAVE TO PROVIDE A BREAK STATEMENT CAUSE ,
//IF WE NOT PROVIDE A BREAK STATEMENT AFTER  CASE CHECK IT WILL EXECUTE A HOLE REMAINING STATEMENT { EXPECT DEFAULT }


// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


const month = 2

switch (month) {
    case 1: 
        console.log("january");
        break;
    case 2 :
        console.log("febuary");
        break;
    case 1:
        console.log("March");
        break;
    default:
        console.log("Defalut Value ");
        break;
}

const month2 = 'march'

switch (month2) {
    case "jan": 
        console.log("january");
        break;
    case "feb" :
        console.log("febuary");
        break;
    case "march":
        console.log("March");
        break;
    default:
        console.log("Defalut Value ");
        break;
}

const AddWithArrow = (num1=10, num2 )=>{  // Defalt parameter 
    return num1 * num2 
    }

 console.log(AddWithArrow(50));   // Nan




