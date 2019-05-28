const express = require('express');

const server = express();

const middleware = require('./config/middleware');

// import routers
const {
  zooRouter,
  bearRouter
} = require('./routes');

middleware(server); // third-party middleware

server.use(express.json());

// routers
server.use("/api/zoos", zooRouter);
server.use("/api/bears", bearRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Database Playground</h2>`)
});

module.exports = server;
