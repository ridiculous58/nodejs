const Product = require("../models/product");
const Category = require("../models/category");

exports.getProducts = (req, res, next) => {
  //res.sendFile(path.join(__dirname,'../','views','index.html'));
  const products = Product.getAll();
  res.render("admin/products", {
    title: "Admin Products",
    products: products,
    path: "/admin/products",
    action:req.query.action
  });
};

exports.getAddProduct = (req, res, next) => {
  //res.sendFile(path.join(__dirname,'../','views','add-product.html'));
  const categories = Category.getAll();
  res.render("admin/add-product", {
    title: "New Product",
    path: "/admin/add-product",
    categories:categories
  });
};

exports.postAddProduct = (req, res, next) => {
  //res.sendFile(path.join(__dirname,'../','views','add-product.html'));
  // products.push( {name:req.body.name, price: req.body.price , image:req.body.image,description:req.body.description})
  const product = new Product();

  product.name = req.body.name;
  product.price = req.body.price;
  product.description = req.body.description;
  product.imageUrl = req.body.imageUrl;
  product.categoryid = req.body.categoryid;

  product.saveProduct();
  res.redirect("/");
};



exports.getEditProduct = (req, res, next) => {
  const categories = Category.getAll();
  const product = Product.getById(req.params.productid);

  res.render("admin/edit-product", {
    title: "Edit Product",
    path: "/admin/products",
    product:product,
    categories:categories
  });
};

exports.postEditProduct = (req, res, next) => {

  const product = Product.getById(req.body.id);

  product.name = req.body.name;
  product.price = req.body.price;
  product.description = req.body.description;
  product.imageUrl = req.body.imageUrl;
  product.categoryid = req.body.categoryid;

  // Product.Update(product); // buna zaten gerek yok çünkü yukarıda reference üzerinden işlem yapıyoruz değişiklik listeye direk yansıyor

  res.redirect("/admin/products?action=edit");
};

exports.postDeleteProduct = (req,res,next) => {
  Product.DeleteById(req.body.productid);
  res.redirect('/admin/products?action=delete');
}
