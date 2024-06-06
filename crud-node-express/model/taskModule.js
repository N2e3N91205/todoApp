const mongoose=require('mongoose');


const taskModel=new mongoose.Schema(
    {
        taskName:{
            type:String,
            required:true
        },
        taskDes:{
            type:String,
            required:true
        },
        taskStatus:{
            type:String,
            required:true
        },
        taskPriority:{
            type:String,
            required:true
        },
        dueDate:{
            type:String,
            required:true
        }
    }


)

const task=mongoose.model('tasks',taskModel)

module.exports=task