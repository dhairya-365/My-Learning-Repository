// String and its methods in javascript 

const name = "Dhairya"; 
let age = 30;

let work = `${name} is learning js `
console.log(`Hello ${name}, your age is :${age}`) 
console.log(work.toUpperCase())
console.log(work.toLowerCase())

// Arrays in Javascript 
const myarr = ["Apple","Banana","Mangoes","Grapes"] 

myarr.push("liches") 
myarr.pop()
myarr.unshift("watermelon")
console.log(myarr)
console.log(Array.isArray(myarr)) // wheather the provided object or variable is an array or not 


// Conditional statements 
age = 18; 

if (age == 18){
    console.log("You are an adult")
}
else{
    console.log("you are a child.")
}


// switch statement 
let choice = "B";

switch (choice) {
    case "A":
        console.log("You selected A.");
        break;
    case "B":
        console.log("You selected B.");
        break;
    case "C":
        console.log("You selected C."); 
        break;
    default:
        console.log("please select a valid char.")
        break;
}


// Error handling in Javascript 
const a = 10;

try {
    a = 11;
    console.log(num1);
} catch (error) {
    console.log(error)
}
finally{
    // to free the resources that we utilized during the try statement.
}

