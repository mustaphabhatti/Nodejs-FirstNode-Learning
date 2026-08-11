const http = require('http');

const requestlistener = require('./routing');

const server = http.createServer(requestlistener);

const PORT = 3002;
server.listen(PORT, () =>{
console.log("Server Listening on address http://localhost:" + PORT)});