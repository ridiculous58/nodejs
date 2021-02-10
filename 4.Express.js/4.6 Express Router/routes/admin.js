const express = require('express');
const routes = express.Router();

routes.get("/add-product",(req,res,next) => {
    res.send(`
        <html>
            <head>
                <title>Add A New Product</title>
            </head>
            <body>
                <form action="/add-product" method="POST">
                    <input type="test" name="productName" />
                    <input type="submit" value="Save Product" />
                </form>
            </body>
        </html>
    `)
});

routes.post('/add-product',(req,res,next) => {
    // database kayıt
    console.log(req.body);
    res.redirect("/");
});

module.exports = routes;