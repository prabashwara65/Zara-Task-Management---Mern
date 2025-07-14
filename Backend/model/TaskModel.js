const mongoose = require('mongoose')

const Schema = mongoose.Schema
const TaskSchema = new Schema({
    Name: {
        type: String
    },
    description: {
        type: String
    },
    Date: {
        type: String
    },
    Priority: {
        type: Number
    },
    tags: {
        type: String
    },
    members: {
        type: String
    }, 
},{timestamps: true})

module.exports = mongoose.model("task" , TaskSchema)
