const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log(req.url, req.methods);
    next();
});

app.use(express.urlencoded());

app.get("/", (req, res, next) => {
    res.send(
        `<h1>Welcome to Airbnb Clone Project</h1>
        <a href="/add-home">Add Home</a>`
    );
    next();
});

app.get("/add-home", (req, res, next) => {
    res.send(
        `<h1>Register Your Home</h1>
        <form method="POST" action="/add-home">
            <input type="text" name="title" placeholder="Home Title" required>
            <input type="text" name="description" placeholder="Home Description" required>
            <input type="text" name="location" placeholder="Location" required>
            <input type="number" name="price" placeholder="Price per night" required>
            <button type="submit">Register Home</button>
        </form>`
    );
    next();
});

app.post("/add-home", (req, res, next) => {
    console.log("Home Details Received:", req.body);
    res.send(
        `<h1>Home Registered Successfully</h1>
        <a href="/">Go Back to Home</a>`
    );
    next();
});


const PORT = 3000;

app.listen(PORT, () => {
    console.log("Server Listening on address http://localhost:" + PORT);
});