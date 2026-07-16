const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/ExampleProject/index.html"))
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "/ExampleProject/about.html"))
})
app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "/ExampleProject/contact.html"))
})

app.listen(5000, () => {
    console.log("server is listening on port 5000....")
})

// console.log(__dirname)