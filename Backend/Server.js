const express = require('express')
const app = express()

app.get("/" , ( req , res ) =>{
    res.json("backend working with api ")
})

app.listen(4000 , () => {
    console.log("server is running on port 4000")
})