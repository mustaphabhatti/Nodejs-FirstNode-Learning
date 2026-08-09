const http = require('http');

function requestlistener(req, res) {
    console.log(req.url, req.method, req.headers);

    if (req.url === "/") {
        res.setHeader("Content-Type", "text/html");
        res.write(`<title>Mustafa's site</title>`);
        res.write(`<h1>Welcome to the Home Page</h1>`);
        res.write('<body><h1>Enter Your Details:</h1>');
        res.write('<form method="POST" action="/submit-details" method="POST">');
        res.write('<input type="text" id="name" name="name" placeholder="Enter Your Name"><br><br>');
        res.write('label for="gender">Gender:</label><br>');
        res.write('<input type="radio" id="male" name="gender" value="male">');
        res.write('<label for="male">Male</label>');
        res.write('<input type="radio" id="female" name="gender" value="female">');
        res.write('<label for="female">Female</label><br>');
        res.write('button type="submit">Submit</button>');
        res.write('</form>');
        res.write('</body>');
        return res.end();
    }
}

const server = http.createServer(requestlistener);

const PORT = 3001;

server.listen(PORT, () => {
    console.log("Server Listening on address http://localhost:" + PORT);
});