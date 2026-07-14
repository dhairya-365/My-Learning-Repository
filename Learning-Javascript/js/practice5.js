// Async javascripts 
console.log("Hello js")
setTimeout(() => {
    console.log("js welcomes you.")
}, 1000)

console.log("This statement comes after timeout method.")

// callback function examples 

const employee = ["Dhairya", "Rohit", "Virat", "Bumrah"]

employee.forEach(introduce);

function greet(value) {
    console.log(`Hello Myself ${value}`)
}

// this function is an example of a callback function.
function introduce(value) {
    console.log(`Welcome ${value}`)
    greet(value)

}

// // promise states demo - Fulfilled
fetch("test.txt")
    .then(
        function (response) {
            let res = response.text()
            console.log(res)
            return res
        }
    )
    .then(
        function (text) {
            document.getElementById("demo").innerHTML = text;
        }
    )

// promise states demo - rejected 

fetch("missing.txt")
    .then(function (response) {
        return response.text();
    })
    .catch(
        function (error) {
            console.log(error)
        }
    )
    .finally(
        function () {
            console.log("freed resources")
        }
    )


// creating own promise 

function promise_test() {
    return new Promise((resolve, reject) => {
        fetch("test.txt")
            .then(response => {
                if (response.ok) {
                    resolve(response.text());
                } else {
                    reject('file not found')
                }
            })
            .catch(error => {
                reject(error)
            })
    })
}

const myPromise = promise_test()
myPromise
    .then(data => console.log("success : " + data))
    .catch((err => console.log("error", err)))

// async function
const getData = async () => {
    let name = "Dhairya";
    let age = "22";
    let dept = "AI";
    return { name, age, dept }
}

getData().then(({ name, age, dept }) => {
    console.log(name, age, dept)
})

// use of await keyword 
const readFile = async () => {
    let content = await myPromise;
    console.log(content)
}

console.log(1)
readFile()
console.log(2)

// Using fetch API 

const getUserDetails = async function () {
    const response = await fetch("test.txt"); // here we can use our url.
    const data = await response.text()
    return data
}

console.log(getUserDetails())

// sending a post request 

const setUserDetails = async (data) => {
    const response = await fetch("https://api.example.com/users", {
        method: "POST",
        header: {
            'Content-Type': 'application/json',
        },
        body: "Hello world",
    });
    const result = response.text()

    return result
}

console.log(setUserDetails())

function alertUser() {
    alert("So you clicked here..!")
}