const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');
const path = require('path');
app.use(bodyParser.urlencoded({extended: false }));

app.use("/admin",adminRoutes);
app.use(userRoutes);

app.use((req,res) =>{
    res.send('<h2>Eror Page</h2>')
});

app.listen(3000, () => {
    console.log('Listening on port 3000')
});

