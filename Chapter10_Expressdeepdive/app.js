const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use((req, res, next) => {
    console.log("First Middleware", req.url);
    next();
});

app.use((req, res, next) => {
    console.log("Second Middleware", req.url, req.method);
    next();
});

app.get("/", (req, res) => {
    console.log("Third Middleware");
    res.send("<h1>Welcome to Mustafa Site - Express Test</h1>");
});

app.get("/contact-us", (req, res) => {
    console.log("Fourth Middleware");

    res.send(`
        <h1>Welcome to Mustafa Site Contact Page - Express Test</h1>
        <br>

        <form method="POST" action="/submit-details">
            <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Enter Your Name"
            >
            <br><br>

            <label for="gender">Gender:</label>
            <br>

            <input type="radio" id="male" name="gender" value="male">
            <label for="male">Male</label>

            <input type="radio" id="female" name="gender" value="female">
            <label for="female">Female</label>

            <br><br>
            <button type="submit">Submit</button>
        </form>
    `);
});

app.post("/contact-us", (req, res) => {
    console.log("Fifth Middleware");

    res.send(`
        <h1>POST request received on Contact Page</h1>
    `);
});

const PORT = 3001;

app.listen(PORT, () => {
    console.log("Server Listening on address http://localhost:" + PORT);
});