const express = require('express')
const app = express()
require('dotenv').config()

app.get("/" , ( req , res ) =>{
    res.json("backend working with api ")
})

app.listen(process.env.PORT , () => {
    console.log("server is running on port " + process.env.PORT)
})