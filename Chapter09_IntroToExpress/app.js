//Core Modules
const http = require('http');
//External Modules
const express = require('express');
//Local Modules
const requestlistener = require('./user');

const app = express();

app.use((req, res, next) => {
    console.log("First Middleware", req.url, req.method);
    next();
});

app.use((req, res, next) => {
    console.log("Second Middleware", req.url, req.method);
    res.send("<h1>Welcome to Mustafa Site - Express Test</h1>");
    next();
});

const server = http.createServer(app);

const PORT = 3001;

server.listen(PORT, () => {
    console.log("Server Listening on address http://localhost:" + PORT);
});
