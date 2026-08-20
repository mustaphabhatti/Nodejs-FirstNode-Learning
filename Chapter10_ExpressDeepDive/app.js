//External Modules
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
//Local Modules
const requestlistener = require('./user');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/user', userRouter);
app.use('/contact', contactRouter);


const PORT = 3001;

app.listen(PORT, () => {
    console.log("Server Listening on address http://localhost:" + PORT);
});
