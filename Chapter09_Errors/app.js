const http = require('http');
const logicalError = require('./logical');
const runtimeError = require('./runtime');

const server = http.createServer((req, res) => {
    console.log(req);
});
const PORT = 3001;

server.listen(PORT, () => {
    console.log("Server Listening on address http://localhost:" + PORT);
});
