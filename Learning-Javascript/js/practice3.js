// # functions in js 

function addition(num1, num2) {
    return num1 + num2
}

c = addition(10, 20)
console.log(c)

// function as a variable 
const subtract = function subtraction(num1, num2) {
    return num1 - num2
}

console.log(subtract(10, 5))

// nested function 

function map(a, j) {
    const result = new Array(a.length);
    for (let i = 0; i <= 5; i++) {
        result[i] = j[i]
    }
    return result
}

const nums = [1, 2, 3, 4, 5, 6]
const squareRoot = map(function (x) {
    return x * x
}, nums)

console.log(squareRoot)

// simple recursion function 

function loop(x) {
    if (x >= 10) {
        return;
    }
    console.log(x)
    loop(x + 1);
}
loop(0);

// Closure : A closure is a function returning with its lexical environment 

function animal() {
    let name = "Tiger"
    {
        console.log("wow !!, " + name)
    }
    let lion = function animal2() {
        let name = "Lion"
        console.log("Wooww !! , " + name)
    }

    return lion
}

a = animal()
a()

// here we return 

// name confict 

function Outer() {
    let num = 5
    function innner(num) {
        console.log(num * 2)
        return num * 2
    }
    return innner
}

console.log(Outer()(10))

// rest parameters 

function multiply(multiplier, ...args) {
    return args.map((x) => multiplier * x);
}

const arr = [1, 2, 3, 4]
console.log(multiply(5, arr))



// Arrow function 
arr2 = ["Dhairya", "Vaghela"]
const a2 = arr2.map((s => s.length))
console.log(a2)

let add = arr.map((ele => ele + 2))
console.log(add)

// "this" keyword in javascript 

const car = {
    car_name: "Porsche 911 GT3",
    info: function () {
        console.log(`${this.car_name} is priced at 9000000`);
    },
};

console.log(car.info())


const person1 = {
    name: "Dhairya",
    age: 21
}

const person2 = {
    name: "S1mple",
    age: 21
}

function sayMyName() {
    return `${this.name} and ${this.age}`
}

// binding the function to other function is must.
person1.sayMyName = sayMyName
person2.sayMyName = sayMyName

console.log(person1.sayMyName())
console.log(person2.sayMyName())