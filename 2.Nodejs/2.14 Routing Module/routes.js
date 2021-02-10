const fs = require('fs');
const queryString = require('querystring');

const  routeHandler = (req,res) => {
    const url = req.url;
    const method = req.method;
    if (url === "/") {
        res.setHeader("Content-Type", "text/html");
        res.statusCode = 200;
        res.statusMessage = "OK";
    
        return res.end(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>
                <form method="POST" action="/log">
                    <input type="text" name="message"/>
                    <button type="submit">Send</button>
                </form>
            </body>
            </html>
            `)
    }
    if (url === "/log" && method === "POST") {
        //body parsing (bodyParser)
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
            // console.log(chunk);
    
    
        });
        req.on("end", () => {
            const bodyParsed = Buffer.concat(body).toString()
            // 1.Yontem 
            //const message = bodyParsed.split('=')[1]
            //2.Yotem
            const message = queryString.parse(bodyParsed)
            fs.appendFileSync("UserInformation.txt", message.message + "\n")
        });
    
    
        res.statusCode = 302;
        res.setHeader("Location", '/')
        return res.end()
    }
}

module.exports = routeHandler;