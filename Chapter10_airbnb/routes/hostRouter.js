const express = require('express');
const hostRouter = express.Router();


hostRouter.get("/add-home", (req, res, next) => {
    res.send(
        `<h1>Register Your Home</h1>
        <form method="POST" action="/host/add-home">
            <input type="text" name="title" placeholder="Home Title" required>
            <input type="text" name="description" placeholder="Home Description" required>
            <input type="text" name="location" placeholder="Location" required>
            <input type="number" name="price" placeholder="Price per night" required>
            <button type="submit">Register Home</button>
        </form>`
    );
});

hostRouter.post("/add-home", (req, res, next) => {
    console.log("Home Details Received:", req.body);
    res.send(
        `<h1>Home Registered Successfully</h1>
        <a href="/host/add-home">Add Another Home</a>
        <a href="/">Go Back to Home</a>`
    );
});


module.exports = hostRouter;
