const express = require("express")
const response = require("../../network/response")
const controller = require("./controller")

const router = express.Router()

router.post("/", (req,res)=>{
 
    controller.addUser(req.body.name)
    .then(data=>response.success(req,res,data,200))
    .catch(error=> response.error(req,res,"Error", 400, "[error get userControlle]"+error))
    
})
router.get("/", (req,res)=>{
 
    controller.getUsers()
    .then(data=>response.success(req,res,data,200))
    .catch(error=> response.error(req,res,"Error", 400, "[error get userControlle]"+ error))
    
})


module.exports=router;