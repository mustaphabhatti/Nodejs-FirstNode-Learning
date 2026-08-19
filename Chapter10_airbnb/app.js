const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log(req.url, req.methods);
    next();
});

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
            <textarea name="description" placeholder="Home Description" required></textarea>
            <input type="text" name="location" placeholder="Location" required>
            <input type="number" name="price" placeholder="Price per night" required>
            <button type="submit">Register Home</button>
        </form>`
    );
    next();
});


const PORT = 3000;

app.listen(PORT, () => {
    console.log("Server Listening on address http://localhost:" + PORT);
});