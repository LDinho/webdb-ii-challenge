const express = require('express');

const server = express();

const middleware = require('./config/middleware');

middleware(server); // third-party middleware

server.use(express.json());

server.get('/', (req, res) => {
  res.send(`<h2>Database Playground</h2>`)
});

module.exports = server;
