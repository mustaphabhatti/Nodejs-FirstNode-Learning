const http = require('http');
const fs = require('fs');

function requestlistener(req, res) {
    console.log(req.url, req.method, req.headers);

    if (req.url === "/" || req.url === "/home") {
        res.setHeader("Content-Type", "text/html");
        res.write(`<title>Myntra</title>`);
        res.write(`<h1>Welcome to the Home Page</h1>`);
        res.write('</body>');
        return res.end();
    }

    else if( req.url.toLowerCase() === "/men") {
        res.setHeader("Content-Type", "text/html");
        res.write(`<title>Myntra Men</title>`);
        res.write(`<h1>Welcome to the Men's Section</h1>`);
        res.write('</body>');
        return res.end();
    }

    else if( req.url.toLowerCase() === "/women") {
        res.setHeader("Content-Type", "text/html");
        res.write(`<title>Myntra Women</title>`);
        res.write(`<h1>Welcome to the Women's Section</h1>`);
        res.write('</body>');
        return res.end();
    }

    if( req.url.toLowerCase() === "/kids") {
        res.setHeader("Content-Type", "text/html");
        res.write(`<title>Myntra Kids</title>`);
        res.write(`<h1>Welcome to the Kids' Section</h1>`);
        res.write('</body>');
        return res.end();
    }

    if( req.url.toLowerCase() === "/cart") {
        res.setHeader("Content-Type", "text/html");
        res.write(`<title>Your Cart</title>`);
        res.write(`<h1>Checkout</h1>`);
        res.write('</body>');
        return res.end();
    }
}

const server = http.createServer(requestlistener);

const PORT = 3001;

server.listen(PORT, () => {
    console.log("Server Listening on address http://localhost:" + PORT);
});