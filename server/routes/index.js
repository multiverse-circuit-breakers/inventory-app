const express = require("express");
const router = express.Router();

// different model routers
<<<<<<< HEAD
router.use('/sauces', require('./sauces'));

router.use('/items', require('./items'));
=======
router.use("/items", require("./items"));
>>>>>>> d2ec51321e9d229edf0537086ba10ad31a5ac7a3

module.exports = router;
