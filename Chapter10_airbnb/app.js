const express = require('express');

const app = express();

app.get("/", (req, res, next) => {
    console.log(req.url, req.methods);
    res.send(
        `<h1>Welcome to Airbnb Clone Project</h1>
        <a href="/add-home">Add Home</a>`
    );
    next();
});


const PORT = 3000;

app.listen(PORT, () => {
    console.log("Server Listening on address http://localhost:" + PORT);
});