const express = require('express')
const router = express.Router()
const { Item } = require('../models')

//GET route for viewing all items
router.get('/', async (req, res) => {
    try {
        const items = await Item.findAll()
        res.send(items)
    } catch (error){
        console.error(error)
    }
});

// get /items
router.get('/items', async (res, req) => {
//GET route for viewing all items
router.get("/", async (req, res) => {
  try {
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    console.error(error);
  }
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

// UPDATE /items/:id
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  // get the item
  const oldItem = await Item.findByPk(id);
  // update using body
  // update should ignore anything besides correct params
  const updatedItem = await oldItem.update(req.body);
  res.json(updatedItem);
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const findItem = await Item.findByPk(id);
  const deleteItem = await findItem.destroy();
  res.json(deleteItem);
});

});

module.exports = router;
