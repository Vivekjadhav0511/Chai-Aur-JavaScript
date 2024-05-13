// **********  ------- Array------ ****************

// Array is used to store Different types of Value in Single varibale 

//An array in JavaScript is a special type of object used to store multiple values in a single variable.
// It allows for the storage of elements of any data type, and these elements can vary in type within the same array.
// Arrays are zero-indexed, meaning the first element is at index 0, the second at index 1, and so on. 

let arr = [1,1,5,5,8,88,77,77,66,77]

let newArray = [...new Set(arr)]

console.log(newArray);