const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log(req.url, req.methods);
    res.send("Welcome to Airbnb Clone Project");
    next();
});


const PORT = 3000;

app.listen(PORT, () => {
    console.log("Server Listening on address http://localhost:" + PORT);
});