const express = require("express")
const response = require("../../network/response")
const controller = require("./controller")

const router = express.Router()

router.get("/", (req,res)=>{
    controller.getMessages()
    .then(messages=>response.success(req,res,messages,200))
    .catch(error=> response.error(req,res,"Error", 400, "[error get messageControlle]"+ error))
    
    
})
router.post("/", (req,res)=>{
    controller.addMessage(req.body.user, req.body.message)
    .then(message=>{
        response.success(req,res,"Create success",200,)}
    )
    .catch(error=>
        {response.error(req,res,"Incomplete data", 400,error)  }
    )
})

module.exports=router;