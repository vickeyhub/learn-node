const fs = require("fs");
// const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync("data/products.json", "utf-8"));
const products = data.products;

// load the express application
const express = require("express");
const morgan = require("morgan");
const server = express();

server.use(express.json());
server.use(morgan('default'));
server.use(express.static("public"));


// server.use((req, res, next) => {
//   console.log(
//     req.method,
//     req.ip,
//     req.hostname,
//     new Date(),
//     req.get("User-Agent")
//   );
//   next();
// });

const auth = (req, res, next) => {
  if (req.body.password == 123) {
    next();
  } else {
    res.sendStatus(401);
  }
};

// API - Endpoints - Route
server.get("/", auth, (req, res) => {
  res.json({ type: "GET" });
});
server.post("/", auth, (req, res) => {
  res.json({ type: "POST" });
});

server.put("/", (req, res) => {
  res.json({ type: "PUT" });
});
server.delete("/", (req, res) => {
  res.json({ type: "DELETE" });
});
server.patch("/", (req, res) => {
  res.json({ type: "PATCH" });
});

server.get("/demo", (req, res) => {
  // res.sendStatus(404);
  res.status(200).send("<h1>hello</h1>");
  // res.sendFile('C:/MERN/learn-node/index.html');
  // res.json(products);
});
server.listen(8080, () => {
  console.log("Server started");
});
