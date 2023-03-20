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

module.exports = router;