const fs = require("fs");
// const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync("data/products.json", "utf-8"));
const products = data.products;

// load the express application
const express = require("express");
const morgan = require("morgan");
const server = express();

server.use(express.json());
server.use(morgan("default"));
server.use(express.static("public"));

// REST APIs standard functions

// Create POST /products C R U D
server.post("/products", (req, res) => {
  console.log(req.body);
  products.push(req.body);
  res.json({
    message: "created",
    product_id: req.body.id,
  });
});

// Read GET /products
server.get("/products", (req, res) => {
  res.json(products);
});
server.get("/products/:id", (req, res) => {
  const id = +req.params.id;
  const product = products.find((p) => p.id === id);
  res.json(product);
});

// Update||PUT /products/:id
server.put("/products/:id", (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  products.splice(productIndex, 1, { ...req.body, id: id });
  res.status(201).json({
    type: "PUT",
    message: "updated",
  });
});

// Update||Patch /products/:id
server.patch("/products/:id", (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex]
  products.splice(productIndex, 1, { ...product, ...req.body });
  res.status(201).json({
    type: "PATCH",
    message: "updated with patch method",
  });
});

// API - Endpoints - Route
server.get("/", (req, res) => {
  res.json({ type: "GET" });
});

server.listen(8080, () => {
  console.log("Server started");
});
