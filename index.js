// load the express application
const express = require("express");
const morgan = require("morgan");
const server = express();
const productRouter = require("./routes/product")

server.use(express.json());
server.use(morgan("default"));
server.use(express.static("public"));
server.use('/', productRouter.router)

server.listen(8080, () => {
  console.log("Server started");
});