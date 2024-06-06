

const taskModel=require('../model/taskModule');


const addTask = async (req, res) => {
    try {
        
        const { name, description, priority, status, dueDate } = req.body;

        if (!name || !description || !priority || !status || !dueDate) {
            return res.status(400).json({
                status: 400,
                success: false,
                msg: "Enter All feilds"
            });
        }else{
            
         const data=new taskModel(
            {
                taskName:name,
                taskDes:description,
                taskPriority:priority,
                taskStatus:status,
                dueDate:dueDate
            }
         )
         await data.save()

        return res.status(200).json({
            status: 200,
            success: true,
            msg: "data saved",
            data: data
        });
    }
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: 500,
            success: false,
            msg: "Internal Server Error"
        });
    }
};

const deleteTask=async (req,res)=>{



    await taskModel.findByIdAndDelete(req.body.id).then(data => {
        if (!data) {
          res.status(404).send({
            message: `Task not found.`
          });
        } else {
          res.send({
            message: "Task deleted successfully!"
          });
        }
    }).catch(err => {
        res.status(500).send({
          message: err.message
        });
    });
}

const update= async (req,res)=>{

    if(!req.body) {
        res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }
    
    const id = req.body.id;
    
    await taskModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
        if (!data) {
            res.status(404).send({
                message: `Data not found.`
            });
        }else{
            res.status(200).send({ message: "Daya updated successfully." })
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
}

const getOneTask= async (req,res) =>{
    try {
        const task = await taskModel.findById(req.body.id);
        res.status(200).json(task);
    } catch(error) {
        res.status(404).json({ message: error.message});
    }
}
const getAllTask = async (req, res) => {
    try {
        const task = await taskModel.find();
        res.status(200).json(task);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
};



module.exports={
    addTask,
    deleteTask,
    update,
    getOneTask,
    getAllTask
}