const express = require("express");

const carsRouter = require("./cars/cars-router");

const server = express();

server.use(express.json());

server.use("/api/cars", carsRouter); // why is this not working?

server.use("*", (req, res, next) => {
  next({ status: 404, message: "not found from server.js!" });
});

server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
  });
});

module.exports = server;
