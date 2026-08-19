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
        `<h1>Add Home</h1>
        <a href="/">Back to Home</a>`
    );
    next();
});


const PORT = 3000;

app.listen(PORT, () => {
    console.log("Server Listening on address http://localhost:" + PORT);
});