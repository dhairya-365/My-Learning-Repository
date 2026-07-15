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
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})