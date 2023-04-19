const fs = require("fs");
// const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync("data/products.json", "utf-8"));
const products = data.products;

// REST APIs standard functions
exports.getProducts = (req, res) => {
    res.json(products);
  };
  exports.getProduct = (req, res) => {
    const id = +req.params.id;
    const product = products.find((p) => p.id === id);
    res.json(product);
  };
  exports.createProduct = (req, res) => {
    products.push(req.body);
    res.json({
      message: "created",
      product_id: req.body.id,
    });
  };
  exports.updateProduct = (req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex((p) => p.id === id);
    products.splice(productIndex, 1, { ...req.body, id: id });
    res.status(201).json({
      type: "PUT",
      message: "updated",
    });
  };
  exports.replaceProduct = (req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex((p) => p.id === id);
    const product = products[productIndex];
    products.splice(productIndex, 1, { ...product, ...req.body });
    res.status(201).json({
      type: "PATCH",
      message: "updated with patch method",
    });
  };
  exports.deleteProduct = (req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex((p) => p.id === id);
    const product = products[productIndex];
    products.splice(productIndex, 1);
    res.status(201).json({
      type: "PATCH",
      deleted_product: product,
    });
  };