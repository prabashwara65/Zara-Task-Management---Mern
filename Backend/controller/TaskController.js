const { default: mongoose } = require('mongoose')
const taskModel = require('../model/TaskModel')

//Get all tasks
const getAllTasks = async (req , res) => {
    const tasks = await taskModel.find({}).sort({createdAt: -1})
    res.stauts(200).json(tasks)
}

//Get Single Task
const getSingleTask = async (req , res) => {
    const {id} = req.params;
    const task = await taskModel.findById(id)

    if(mongoose.Types.ObjectId.isValid){
        return res.status(400).json({error: "mongoose.Types.ObjectId.isValid"})
    }
    if(!task){
        res.status(400).json({error: "No such Task"})
    }
    res.status(200).json(task)
}




module.exports = {
    getAllTasks,
    getSingleTask,

}