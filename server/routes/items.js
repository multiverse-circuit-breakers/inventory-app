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

//GET route for viewing individual items
router.get('/items', async (res, req) => {
    try {
        const item = await Item.findByPk(req.params.id);
        res.send(item);
    } catch (error) {
        console.error(error);
    }
})

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    const findItem = await Item.findByPk(id);
    const deleteItem = await findItem.destroy();
    res.json(deleteItem);
})


module.exports = router;
