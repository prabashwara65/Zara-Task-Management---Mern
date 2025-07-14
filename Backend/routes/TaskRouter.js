const express = require('express')
const router = express.Router()

router.get('/' , (req , res) => {
    res.json({mssg: "get all tasks"})
})

router.get('/:id' , (req , res) => {
    res.json({mssg: "get one task record"})
})

router.post('/' , (req , res) => {
    res.json({mssg: "create new task"})
})

module.exports = router