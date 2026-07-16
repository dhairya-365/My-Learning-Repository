// creating a simple middleware function 

const express = require('express');
const app = express();

// app.use(Middleware) can be used to apply a single middleware to every route below.
const MyMiddleWare = ((req, res, next) => {
    const name = "Dhairya";
    const age = 22;
    console.log(`My name is ${name} and age is ${age}`)
    next();
});

const authorize = ((req, res, next) => {
    const { userName, password } = req.query;

    if (userName === "Dhairya" && password === "12345678") {
        res.send("User approved")
    }
    else {

        res.status(401).send("Invalid user")
    }
})

// app.use([authorize])

// root
app.get("/", MyMiddleWare, (req, res) => {
    console.log("In root")
    res.send("Hello world");
})


app.get("/next", MyMiddleWare, (req, res) => {
    res.send("Currently at next page")
})

app.listen(5000, () => {
    console.log("The server is listening on port : 5000....")
})


