//Main Module for the Airbnb Application
const express = require('express');
//Local Modules
const userRouter = require('./routes/userRouter');
const hostRouter = require('./routes/hostRouter');

const app = express();

app.use(express.urlencoded());
app.use(userRouter);
app.use(hostRouter);

app.use((req, res, next) => {
    res.status(404).send("<h1>404 Error - Page Not Found</h1>");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Server Listening on address http://localhost:" + PORT);
});