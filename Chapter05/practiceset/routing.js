const addNumbers = require('./addition');

const requesthandler = (req, res) => {
    console.log(req.url, req.method, req.headers);

    if (req.url === "/") {
        res.setHeader("Content-Type", "text/html");
        res.write(`<title>Mustafa's site</title>`);
        res.write(`<h1>Welcome to the Home Page</h1><br>`);
        res.write('<button><a href="/calculator">Open Calculator</a></button>');
        return res.end();
    }

    else if (req.url === "/calculator") {
        res.setHeader("Content-Type", "text/html");
        res.write(`<title>Calculator</title>`);
        res.write(`<h1>Welcome to the Calculator Page</h1><br>`);
        res.write('<form method="POST" action="/calculate-result">');
        res.write('<input type="number" id="num1" name="num1" placeholder="Enter First Number"><br><br>');
        res.write('<input type="number" id="num2" name="num2" placeholder="Enter Second Number"><br><br>');
        res.write('<button type="submit">Sum</button>');
        res.write('</form>');
        return res.end();
    }

    else if (req.url === "/calculate-result" && req.method === "POST") {
        const body = [];

        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });

        req.on('end', () => {
            const userData = Buffer.concat(body).toString();

            const params = new URLSearchParams(userData);
            const bodyObject = Object.fromEntries(params.entries());

            const num1 = parseFloat(bodyObject.num1);
            const num2 = parseFloat(bodyObject.num2);

            const sum = addNumbers(num1, num2);

            console.log(`The sum of ${num1} and ${num2} is: ${sum}`);

            res.setHeader("Content-Type", "text/html");
            res.write(`<h1>The sum of ${num1} and ${num2} is: ${sum}</h1>`);
            res.write('<br><a href="/calculator">Go Back</a>');
            return res.end();
        });

        
    else {
        res.setHeader("Content-Type", "text/html");
        res.write(`<title>Mustafa's site</title>`);
        res.write(`<h1>404 Page Not Found</h1><br>`);
        res.write('<button><a href="/">Go Back to Home Page</a></button>');
        return res.end();
    }
    }

};

module.exports = requesthandler;