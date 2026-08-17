const express = require('express');

const app = express();

app.use("/", (req, res, next) => {
    console.log("First Middleware", req.url);
    next();
});

app.use("/", (req, res, next) => {
    console.log("Second Middleware", req.methods);
    next();
});

app.use("/",(req, res, next) => {
    console.log("Third Middleware");
    res.send("<h1>Welcome to Mustafa Site - Express Test</h1>");
    next();
});

app.get("/contact-us",(req, res, next) => {
    console.log("Fourth Middleware", req.url);
    res.send("<h1>Welcome to Mustafa Site Contact Page - Express Test</h1><br>");
    res.send('<form method="POST" action="/submit-details" method="POST">');
    res.send('<input type="text" id="name" name="name" placeholder="Enter Your Name"><br><br>');
    res.send('<label for="gender">Gender:</label><br>');
    res.send('<input type="radio" id="male" name="gender" value="male">');
    res.send('<label for="male">Male</label>');
    res.send('<input type="radio" id="female" name="gender" value="female">');
    res.send('<label for="female">Female</label>');
    res.send('</form>');
    next();
}

const PORT = 3001;

app.listen(PORT, () => {
    console.log("Server Listening on address http://localhost:" + PORT);
});
