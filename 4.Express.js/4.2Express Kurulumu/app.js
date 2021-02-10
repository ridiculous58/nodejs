const express = require('express');
const app = express(); //express objesi olusturduk

 // () => {} ///arrow function

app.get('/',(req,res) => {
    res.send('Hello World')
});

app.get('/api/products',(req,res) =>{
    res.send('Urunler Listelendi');
})

app.listen(3000, () => {
    console.log('listening on port 3000');
});