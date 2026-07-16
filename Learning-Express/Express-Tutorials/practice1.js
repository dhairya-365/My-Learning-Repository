// const http = require('http');

// const server = http.createServer((req, res) => {
//     console.log("User hits the server.");
//     console.log(req.url);
//     res.writeHead(200, { "content-type": "text/html" });
//     res.write("<h1>Welcome to my server.</>");
//     res.end();
// });

// server.listen(5050);

const express = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.status(200).send('Hello World!')
})

app.get("/about", (req, res) => {
    res.status(200).send("<h1>This is our About page</h1>");

})

app.get("/contact", (req, res) => {
    res.status(200).send("<h1>This is our Contact page.</h1>")
})

app.all("/{*splat}", (req, res) => {
    res.status(404).send("<h1>Resource not Found</h1>")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})