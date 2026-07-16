const express = require('express');
const app = express()
const { info } = require("./data/employee")

app.get("/", (req, res) => {
    res.send("<h1> Welcome </h1>")
})

app.get("/api/getInfo", (req, res) => {
    res.json(info);
})

app.get("/api/getInfo/:EmpId", (req, res) => {
    const { EmpId } = req.params;
    const single_employee = info.find((employee) => employee.id === Number(EmpId));
    if (!single_employee) {
        return res.status(404).send("<h1> Employee not found </h1>")
    }
    res.json(single_employee)
})


app.get("/api/v1/query", (req, res) => {
    const { search, limit } = req.query;
    let results = [...info]

    if (search) {
        console.log("found the person")
        results = results.filter((employee) => {
            return employee.Name.toLowerCase().includes(search.toLowerCase())
        });
    }

    if (limit) {
        console.log("returning " + limit + " entries");
        results = results.slice(0, Number(limit));
    }
    res.status(200).json(results)
})

app.listen(5000, () => {
    console.log("Server is listening at port 5000....")
})