const http = require('http');

function requestlistener(req, res) {
    console.log(req.url, req.method, req.headers);

    if (req.url === "/") {
        res.setHeader("Content-Type", "text/html");
        res.write(`<h1>Welcome to the Home Page</h1>`);
        res.end();
    }

    else if (req.url === "/about") {
        res.setHeader("Content-Type", "text/html");
        res.write(`<h1>Welcome to the About Page</h1>`);
        res.end();
    }

    else {
        res.setHeader("Content-Type", "text/html");
        res.write(`<h1>404 Page Not Found</h1>`);
        res.end();
    }
}

const server = http.createServer(requestlistener);

const PORT = 3001;

server.listen(PORT, () => {
    console.log("Server Listening on address http://localhost:" + PORT);
});