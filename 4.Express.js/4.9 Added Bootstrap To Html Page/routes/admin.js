const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/add-product', (req,res,next) => {
    res.sendFile(path.join(__dirname,'../','views','add-product.html'))
})

module.exports = router;