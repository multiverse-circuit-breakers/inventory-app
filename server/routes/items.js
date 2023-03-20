const express = require("express");
const router = express.Router();
const { Sauce } = require("../models");

// GET /sauce
router.get("/", async (req, res) => {
  res.send("Hello, World!");
});

module.exports = router;
