const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const userRouter = express.Router();
userRouter.use(bodyParser.urlencoded({ extended: false }));

userRouter.use("/", (req, res, next) => {
    console.log("First Middleware", req.url, req.method);
    next();
});

userRouter.use("/submit-details",(req, res, next) => {
    console.log("Second Middleware", req.url, req.method);
    res.send("<h1>Welcome to Mustafa Site - Express Test</h1>");
    next();
});

module.exports = userRouter;
