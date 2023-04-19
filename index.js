const fs = require('fs');
// const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data/products.json', 'utf-8'));
const products = data.products;

const express = require('express');

const server = express();

server.get('/', (req, res) => {
    // res.sendStatus(404);
    res.status(200).send('<h1>hello</h1>');
    // res.sendFile('C:/MERN/learn-node/index.html');
    // res.json(products);
});
server.listen(8080, () => {
    console.log('Server started')
});
