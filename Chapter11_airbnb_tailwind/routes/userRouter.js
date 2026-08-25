//Core Modules
const path = require("path");
//Main Module for the Airbnb Application
const express = require('express');
const userRouter = express.Router();
//Local Modules
const rootDir = require('../utils/pathUtil');

userRouter.get("/", (req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "home.html"));
});

module.exports = userRouter;