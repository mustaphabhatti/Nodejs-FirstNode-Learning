const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const rootDir = require('../utils/pathUtil');

const contactRouter = express.Router();
contactRouter.use(bodyParser.urlencoded({ extended: false }));

contactRouter.get("/contact-us", (req, res) => {
    res.sendFile(path.join(rootDir, "views", "contactus.html"));
});

contactRouter.post("/contact-us", (req, res) => {
    res.sendFile(path.join(rootDir, "views", "InfoSubmitted.html"));
});

module.exports = contactRouter;
