const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: false }));

app.get("/add-product",(req,res,next) => {
    res.send(`
        <html>
            <head>
                <title>Add A New Product</title>
            </head>
            <body>
                <form action="/product" method="POST">
                    <input type="test" name="productName" />
                    <input type="submit" value="Save Product" />
                </form>
            </body>
        </html>
    `)
});

app.post('/product',(req,res,next) => {
    // database kayıt
    console.log(req.body);
    res.redirect("/");
});

app.use('/',(req,res,next) => {
    res.send('<h1>Hello From express.js</h1>')
});

app.listen(3000, () => {
    console.log('Listening on port 3000')
});

