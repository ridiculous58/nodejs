const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {

    // 1.Example
    // res.setHeader('Content-Type','text/plain');
    // res.statusCode = 200;
    // res.statusMessage = 'OK';
    // res.write("Hello World")
    // res.end()


    // 2.Example
    // res.setHeader('Content-Type','application/json');
    // res.statusCode = 200;
    // res.statusMessage = 'OK';
    // res.write(JSON.stringify({id:1,name:"Emirhan"}));
    // res.end()

    // 3.Example
    // res.setHeader('Content-Type','text/html');
    // res.statusCode = 200;
    // res.statusMessage = 'OK';
    // res.write('<html>');

    // res.write('<head><title>Application Node Js</title></head>');
    // res.write('<body><h2>Hello World</h2></body>')
    // res.write('</html>');

    // res.end()
    fs.readFile("index.html", (err, data) => {
        if (err) {
            res.setHeader('Content-Type', 'text/plain');
            res.statusCode = 404;
            res.statusMessage = 'NOT FOUND';
            res.end("Sayfa Bulunamadi")
        } else {
            res.setHeader('Content-Type', 'text/html');
            res.statusCode = 200;
            res.statusMessage = 'OK';
            res.end(data)
        }
    })
})

server.listen(3000)
