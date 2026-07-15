const http = require('http');

const server = http.createServer((req, res) => {
    console.log("User hits the server.");
    console.log(req.url);
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>Welcome to my server.</>");
    res.end();
});

server.listen(5050);
