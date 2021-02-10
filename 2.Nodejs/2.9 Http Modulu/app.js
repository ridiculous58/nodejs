const http = require('http');

/*
var server = http.createServer()

server.on("connection",() => {
    console.log("Connection Ok")
})

server.listen(3000)
console.log("Listening port on 3000... ")
*/

var server = http.createServer((req,res)=>{
    if(req.url == "/"){
        res.write("Hello World")
        res.end()
    }

    if(req.url == "/api/getProducts"){
        res.write("Product")
        res.end()
    }

})

server.listen(3000)
console.log("Listening port on 3000... ")