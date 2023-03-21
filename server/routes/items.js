const express = require("express");
const router = express.Router();

const { Item } = require("../models");

// get /items

router.get("/", async (req, res) => {
  res.json(await Item.findAll());
});

// POST /items
router.post("/", async (req, res) => {
  try {
    // validate the request body first
    // TODO: probably better to add in using express-validator instead
    let missing = "";
    const requiredFields = [
      "title",
      "description",
      "price",
      "category",
      "image",
    ];
    for (const field of requiredFields) {
      if (!req.body[field]) missing += field + ", ";
    }

    if (missing) {
      // return missing fields without comma using slice
      const error = `Missing fields: ${missing.slice(0, -2)}`;
      console.log(error);
      return res.status(400).json({ error });
    }
    // then create a new item
    const item = await Item.create(req.body);
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
