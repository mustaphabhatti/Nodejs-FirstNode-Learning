const html = require('html');

function requestlistener(req,res){
    console.log(req);
}

const server = http.createServer(requestlistener);
const PORT = 3001;
server.listen(PORT,()=> {console.log("Server Listening at Port:" + PORT)});
