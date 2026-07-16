const express = require("express")
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, "/public")))
app.use(express.urlencoded({ extended: false }))

const Authorized = ((req, res, next) => {
    const { name, email, message } = req.body;
    if (name === "Dhairya" && email === 'dhairya12@gmail.com') {
        res.send(`${name} says ${message}`);
    }
    else {
        res.status(401).send("Invalid")
    }
});


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/ExampleProject/contact.html"))
});

app.post("/send", Authorized, (req, res) => {
    res.send("very well done")
});

app.put("/api/v1/users/:id", (req, res) => {
    const { id } = req.params;
    const { name, age } = req.body;

    const user = users.find(u => u.id === Number(id));
    if (!user) return res.status(404).json({ message: "User not found" });

    user.name = name;
    user.age = age;

    res.status(200).json(user);
});


app.listen(5000, () => {
    console.log("Server running on port 5000....")
});