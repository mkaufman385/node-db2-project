const express = require("express");
const Car = require("./cars-model");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const cars = await Car.getAll();
    res.json(cars);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  res.send(`getting car with id ${req.params.id}`);
});

router.post("/", async (req, res, next) => {
  res.send("posting new car");
});

module.exports = router;
