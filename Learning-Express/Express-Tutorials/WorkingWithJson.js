const express = require('express');
const app = express()
const { info } = require("./data/employee")

app.get("/", (req, res) => {
    res.send("<h1> Welcome </h1>")
})

app.get("/api/getInfo", (req, res) => {
    res.json(info);
})

app.get("/api/getInfo/45", (req, res) => {
    const single_employee = info.find((employee) => employee.id === 45);
    res.json(single_employee)
})

app.listen(5000, () => {
    console.log("Server is listening at port 5000....")
})