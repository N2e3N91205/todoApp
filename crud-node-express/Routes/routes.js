const express = require('express')
const taskController = require('../controllers/taskController')
const router = express.Router();



router.get('/addTask',taskController.addTask);
router.get('/delete',taskController.deleteTask);
router.get('/update',taskController.update);
router.get('/getonetask',taskController.getOneTask);
router.get('/getallTask',taskController.getAllTask);




module.exports=router