const products = [
    {name:"Samsung S8", price: 3000 , image:"1.jpg",description:"iyi telefon"},
    {name:"Samsung S7", price: 2000 , image:"2.jpg",description:"idare eder"},
    {name:"Samsung S9", price: 4000 , image:"3.jpg",description:"çok iyi"},
    {name:"Iphone 7S", price: 4500 , image:"4.jpg",description:"guzel telefon"},
 ]

exports.getProduct = (req,res,next) => {
    //res.sendFile(path.join(__dirname,'../','views','index.html')); 
    res.render('index',{
       title:"Home Page",
       products:products,
       path: "/"
    });
}

exports.getAddProduct = (req,res,next) => {
    //res.sendFile(path.join(__dirname,'../','views','add-product.html'));
    res.render('add-product',{
        title:"Add A New Product",
        path:"/admin/add-product"
    });
};

exports.postAddProduct = (req,res,next) => {
    //res.sendFile(path.join(__dirname,'../','views','add-product.html'));
    products.push( {name:req.body.name, price: req.body.price , image:req.body.image,description:req.body.description})
    res.redirect("/")   
}