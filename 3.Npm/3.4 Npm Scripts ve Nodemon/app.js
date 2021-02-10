//package jsonda script alnlarını ogrendik


//  
/*"scripts": {
    "start":"node app.js", //bu alanı calıstırmak için 'node start' dememiz yeterli olcaktir
    "start-server":"node app.js", //bu alanı calıstırmak için 'node run start-server' dememiz yeterli olcaktir
    "test": "echo \"Error: no test specified\" && exit 1"
  }
*/


/* 
Yaptıgımız her değişiklik sonucu surekli projeyi durdurup tekrar çalıstırıyorduk fakat buna bi çözüm gerekliydi bunu nasıl yapabiliriz işte cevabı:

bunun için cok guzel araç gerçekleştirmişler bu araç nodemon 

bunu nasıl yukliyeceğiz

npm install nodemon@1.18.9 --save-dev

*/

const http = require('http');

const server = http.createServer((req,res) =>{
    if(req.url === "/"){
        res.write("<h2> Hello Papa </h2>")
        res.end()
    }else{
        res.write("<h1 style='margin:0 auto;text-align:center;' > 404 NOT FOUND </h1>")
        res.end()
    }
});

server.listen(3000);