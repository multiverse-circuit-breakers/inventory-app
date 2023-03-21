const express = require('express')
const router = express.Router()
const { Item } = require('../models/index')
const app = express();
app.use(express.json());

//GET route for viewing all items
router.get('/', async (req, res) => {
    try {
        const items = await Item.findAll()
        res.send(items)
    } catch (error){
        console.error(error)
    }
})

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    const findItem = await Item.findByPk(id);
    const deleteItem = await findItem.destroy();
    res.json(deleteItem);
})


module.exports = router;