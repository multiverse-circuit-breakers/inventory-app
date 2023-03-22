const express = require("express");
const router = express.Router();
const { Sauce } = require("../models");

// GET /sauce
router.get("/", async (req, res, next) => {
  try {
    const sauces = await Sauce.findAll();
    res.send(sauces);
  } catch (error) {
    next(error);
  }
});

<<<<<<< HEAD
=======


>>>>>>> d2ec51321e9d229edf0537086ba10ad31a5ac7a3
module.exports = router;
