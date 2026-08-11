const html = require('html');
const requestlistener = require('./routing');

const server = http.createServer(requestlistener);

PORT = 3001;
server.listen(PORT);
console.log("Server Listening on address http://localhost:" + PORT);