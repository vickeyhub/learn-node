const fs = require('fs');
// const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data/products.json', 'utf-8'));
const products = data.products;

const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.json({type: 'GET'});
});
server.post('/', (req, res) => {
    res.json({type: 'POST'});
});

server.put('/', (req, res) => {
    res.json({type:'PUT'})
});
server.delete('/', (req, res) => {
    res.json({type:'DELETE'})
});
server.patch('/', (req, res) => {
    res.json({type:'PATCH'})
});

server.get('/demo', (req, res) => {
    // res.sendStatus(404);
    res.status(200).send('<h1>hello</h1>');
    // res.sendFile('C:/MERN/learn-node/index.html');
    // res.json(products);
});
server.listen(8080, () => {
    console.log('Server started')
});
