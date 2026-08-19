//Main Module for the Airbnb Application
const express = require('express');
//Local Modules
const userRouter = require('./routes/userRouter');
const hostRouter = require('./routes/hostRouter');

const app = express();

app.use((req, res, next) => {
    console.log(req.url, req.methods);
    next();
});

app.use(express.urlencoded());

app.use(userRouter);

app.use(hostRouter);

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Server Listening on address http://localhost:" + PORT);
});