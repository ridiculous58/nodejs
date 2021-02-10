const express = require('express');
const app = express();

app.use('/',(req,res,next) =>{
    console.log("Istek Geldi");
    next();
});

app.use("/add-product",(req,res,next)=>{
    res.send("<h2>Added Product Successfly</h2>")
})
 
app.use("/product-list",(req,res,next)=>{
    res.send("<h2>Product Listed Successfly</h2>")
})

app.use("/",(req,res,next)=>{
    res.send("<h1>Show Home Page</h1>")
})

app.listen(3000);