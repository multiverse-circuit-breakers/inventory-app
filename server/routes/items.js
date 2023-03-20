const express = require("express");
const router = express.Router();

const { Item } = require("../models");

// GET /items
router.get("/", async (req, res) => {
  res.send("Hello, World!");
});

// POST /items
router.post("/", async (req, res) => {
  try {
    // validate the request body first
    // .
    // .
    // .
    // then create a new item
    const item = Item.create(req.body);
    // then send back the new item in the response
    res.json(item);
  } catch (err) {
    console.log(err);
    res
      .status(400)
      .json({ message: "Something went wrong in your request", error: err });
  }
});

module.exports = router;
