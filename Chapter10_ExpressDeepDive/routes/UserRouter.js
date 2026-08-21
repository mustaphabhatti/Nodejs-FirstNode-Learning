const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const rootDir = require('../utils/pathUtil');

const userRouter = express.Router();
userRouter.use(bodyParser.urlencoded({ extended: false }));

userRouter.use("/", (req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "index.html"));
    next();
});


userRouter.use("/submit-details",(req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "submitdetails.html"));
    next();
});


module.exports = userRouter;