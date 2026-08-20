const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const contactRouter = express.Router();
contactRouter.use(bodyParser.urlencoded({ extended: false }));

contactRouter.get("/contact-us", (req, res) => {
    console.log("Fourth Middleware");

    res.send(`
        <h1>Welcome to Mustafa Site Contact Page - Express Test</h1>
        <br>

        <form method="POST" action="/submit-details">
            <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Enter Your Name"
            >
            <br><br>

            <label for="gender">Gender:</label>
            <br>

            <input type="radio" id="male" name="gender" value="male">
            <label for="male">Male</label>

            <input type="radio" id="female" name="gender" value="female">
            <label for="female">Female</label>

            <br><br>
            <button type="submit">Submit</button>
        </form>
    `);
});

contactRouter.post("/contact-us", (req, res) => {
    console.log("Fifth Middleware", req.body);

    res.send(`
        <h1>POST request received on Contact Page</h1>
    `);
    next();
});

contactRouter.use(bodyParser.urlencoded());
{

}

contactRouter.post("/contact-us", (req, res) => {
    console.log("Fifth Middleware", req.body);

    res.send(`
        <h1>POST request received on Contact Page</h1>
    `);
});

module.exports = contactRouter;
