const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

const taskRouter = require("./routes/TaskRouter")
const { default: mongoose } = require('mongoose')

app.use(cors())

//routes 
app.use("/api/tasks" , taskRouter)

//database connection
mongoose.connect(process.env.MongoDB)
.then(() => {
    app.listen(process.env.PORT , () => {
        console.log("Server is running on port " + process.env.PORT)
    })
}).catch((error)=> {
    console.log(error)
})