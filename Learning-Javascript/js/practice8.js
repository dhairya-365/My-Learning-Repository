const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// map function this function returns new array after applying transformation on the data

const doubled_arr = arr.map((val) => {
    val = val ** 2;
    return val
});
console.log(doubled_arr);
console.log(arr);

// filter functions : this function return new array with elements that satisfy a condition. 

const oddArr = arr.filter((val) => {
    if (val % 2 !== 0) {
        return val
    }
});

console.log(oddArr);

// reduce function : this function reduces the complete array into single.

const reduced_number = arr.reduce((prev, next) => {
    return prev * next;
});

console.log(reduced_number);

// Constructing and De-constructing in javascript 

// rest 
const [one, two, ...rest] = arr;

console.log("First and second element : ", one, two, "rest of elements : ", rest)

const user = {
    firstName: "Dhairya",
    lastName: "Vaghela",
    age: 22,
    address: "Surat",
}

// spread
const user_details = { ...user, pincode: 395005 };

console.log(user_details);

// closure and lexcial scope 

function getInfo() {
    const name = "Dhairya"

    return function print_name() {
        console.log(name);
        return name;
    }
}

getInfo()()


// this keyword and explicit key binding 

function greet(place) {
    console.log(`Hello ,${this.name} so you live in ${place}`);
}
const details = { name: "dhairya" }

greet.call(details, "Surat"); // uses simple comma seperated values.
greet.apply(details, ['surat']); // uses array as values to be inserted.
const greetUser = greet.bind(details, "Surat"); // binds the values and generates a new function that can be used through out the program execution.

console.log(greetUser());

// Generator functions in javascript

function* idGenerator() {
    let id = 1;
    while (id < 10) {
        yield id++;
    }
}

const generator = idGenerator();
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)


// symbol & map \ set 

const secretKey = Symbol("id"); // generates super unique and immutable value that cannot be accessed by for in or any other object value and key methods.

const users = { [secretKey]: 12345 }

console.log(secretKey)

// weakmap is a map which removes the reference as soon as the object gets remove or set to null, prevents memory leaks.
const user_infomation = new WeakMap();
user_infomation.set(details, "Vaghela");
console.log(user_infomation.get(details))

// proxy and reflect in javascript 

// proxy is used to validate the operations that can be performed on the object, reflect helps to interact with objs more clearly and in a safe manner.

const Person = { name: "Dhairya", age: 22, Country: "India" }
const handler = {
    get(target, prop) {
        console.log("Trying to change the property of an object");
        return target[prop];
    },

    set(obj, prop, value) {
        if (prop === "age" && typeof value !== "number") {
            console.log("AGE MUST BE A NUMBER");
        }
        return Reflect.set(obj, prop, value)
    }

};

const proxyExample = new Proxy(Person, handler);

console.log(proxyExample.name)

proxyExample.age = 10;

console.log(proxyExample)

