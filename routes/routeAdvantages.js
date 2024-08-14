const route = require("express").Router();
const advantages = require("../data/data")

route.get('/advantages', (req, res) => {
    try {
        res.status(200).json({data: advantages})
    } catch (error) {
        res.status(404).json({error: 'Info not found'})
    }
})

module.exports = route;