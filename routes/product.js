const express = require("express");
const productController = require("../controller/product.js");

const router = express.Router();

// Create POST /products C R U D
router
.post("/products", productController.createProduct)
.get("/products", productController.getProducts)
.get("/products/:id", productController.getProduct)
.put("/products/:id", productController.updateProduct)
.patch("/products/:id", productController.replaceProduct)
.delete("/products/:id", productController.deleteProduct)

exports.router = router;