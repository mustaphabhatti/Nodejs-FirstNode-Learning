//External Modules
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
//Local Modules
const userRouter = require('./routes/UserRouter');
const contactRouter = require('./routes/ContactRouter');
const rootDir = require('./utils/pathUtil');

const app = express();

app.use(bodyParser.urlencoded());
app.use(userRouter);
app.use(contactRouter);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

const PORT = 3001;

app.listen(PORT, () => {
    console.log("Server Listening on address http://localhost:" + PORT);
});
