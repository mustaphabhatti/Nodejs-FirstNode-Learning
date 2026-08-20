const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');


app.use("/", (req, res, next) => {
    console.log("First Middleware", req.url, req.method);
    next();
});

app.use("/submit-details",(req, res, next) => {
    console.log("Second Middleware", req.url, req.method);
    res.send("<h1>Welcome to Mustafa Site - Express Test</h1>");
    next();
});
