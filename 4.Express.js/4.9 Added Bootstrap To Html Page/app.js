const express = require('express');
const app = express();
const bodyParser = require('body-parser'); //npm install body-parser //bodyparser olmadan kullanıcıdan post edilen data undifined olarak gelir bunun yuzunden ek paket olan body parser ı kullanmamız gerekir
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');
const path = require('path');
app.use(bodyParser.urlencoded({extended: false }));

app.use(express.static(path.join('public')))

app.use("/admin",adminRoutes);
app.use(userRoutes);

app.use((req,res) =>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
});

app.listen(3000, () => {
    console.log('Listening on port 3000')
});

