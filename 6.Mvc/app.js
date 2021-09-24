const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const errorsController = require('./controllers/errors');


app.set('view engine','pug')
app.set('views','./views')

const adminRoutes = require('./routes/admin')
const userRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({extended : false}));

app.use(express.static(path.join('public')));

app.use('/admin',adminRoutes);

app.use(userRoutes);



app.use(errorsController.get404Page);

app.listen(3000 ,() => {
    console.log('Listening on port 3000');
});


