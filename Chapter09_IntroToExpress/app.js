const http = require('http');
const requestlistener = require('./user');

const server = http.createServer(requestlistener);
const PORT = 3001;

server.listen(PORT, () => {
    console.log("Server Listening on address http://localhost:" + PORT);
});
