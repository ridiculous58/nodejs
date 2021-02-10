const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {

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
    if(url === "/log" && method === "POST" ){
        fs.appendFileSync("UserInformation.txt","\ndeneme")
        res.statusCode = 302;
        res.setHeader("Location",'/')
        return res.end()
    }
})

server.listen(3000)