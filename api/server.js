const express = require('express');

const server = express();

const middleware = require('./config/middleware');

// import routers
const {
  zooRouter,
} = require('./routes');

middleware(server); // third-party middleware

server.use(express.json());

// routers
server.use("/api/zoos", zooRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Database Playground</h2>`)
});

module.exports = server;
