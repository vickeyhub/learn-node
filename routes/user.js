const express = require("express");
const userController = require("../controller/user.js");

const router = express.Router();

// Create POST /users C R U D
router
.post("/users", userController.createProduct)
.get("/users", userController.getusers)
.get("/users/:id", userController.getProduct)
.put("/users/:id", userController.updateProduct)
.patch("/users/:id", userController.replaceProduct)
.delete("/users/:id", userController.deleteProduct)

exports.router = router;