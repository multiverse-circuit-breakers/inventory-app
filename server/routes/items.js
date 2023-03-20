const express = require("express");
const router = express.Router();

const { Item } = require("../models");

// POST /items
router.post("/", async (req, res) => {
  try {
    // validate the request body first
    let missing = "";
    const requiredFields = [
      "name",
      "description",
      "price",
      "category",
      "image",
    ];
    for (const field of requiredFields) {
      if (!req.body[field]) missing += field + ", ";
    }

    if (missing)
      // return missing fields without comma using slice
      return res
        .status(400)
        .json({ message: `Missing fields: ${missing.slice(0, -2)}` });
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
