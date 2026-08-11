const fs = require('fs');

const requestlistener = (req, res) => {
    console.log(req.url, req.method, req.headers);

    if (req.url === "/") {
        res.setHeader("Content-Type", "text/html");
        res.write(`<title>Mustafa's site</title>`);
        res.write(`<h1>Welcome to the Home Page</h1>`);
        res.write('<body><h1>Enter Your Details:</h1>');
        res.write('<form method="POST" action="/submit-details" method="POST">');
        res.write('<input type="text" id="name" name="name" placeholder="Enter Your Name"><br><br>');
        res.write('<label for="gender">Gender:</label><br>');
        res.write('<input type="radio" id="male" name="gender" value="male">');
        res.write('<label for="male">Male</label>');
        res.write('<input type="radio" id="female" name="gender" value="female">');
        res.write('<label for="female">Female</label><br>');
        res.write('<input type="submit" value="Submit">');
        res.write('</form>');
        res.write('</body>');
        return res.end();
    }

    else if( req.url.toLowerCase() === "/submit-details" && req.method === "POST") {

        const body = [];

        req.on('data', (chunk) => {
            console.log(chunk), body.push(chunk);
        });

        req.on('end', () => {
            const userData = Buffer.concat(body).toString();

            const params = new URLSearchParams(userData);
            // const bodyObject ={};

            // for (const [key, val] of params.entries()) {
            //     bodyObject[key] = val;
            //     console.log(bodyObject);
            // }

            const bodyObject = Object.fromEntries(params.entries());
            console.log(bodyObject);
            fs.writeFileSync('D:\\NodeJs\\user-details.txt', JSON.stringify(bodyObject));
        });
    }
    
    req.statusCode = 302;
    res.setHeader('Location', '/');
}

module.exports = requestlistener;
