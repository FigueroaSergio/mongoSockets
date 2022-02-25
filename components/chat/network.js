const express = require("express")
const response = require("../../network/response")
const controller = require("./controller")

const router = express.Router()

router.get("/:userId", (req,res)=>{
    //get the chats of a user
    controller.getChats(req.params.userId)
    .then(chats=>response.success(req,res,chats,200))
    .catch(error=> response.error(req,res,"Unexpected error", 400, "[error get chatControlle]"+ error))
    
    
})
router.post("/", (req,res)=>{
    controller.addChat(req.body.users)
    .then(data=>{
        response.success(req,res,data,200,)}
    )
    .catch(error=>
        {response.error(req,res,"Chat needs at least one user", 400,"[error post chatControlle]"+  error)  }
    )
})
module.exports=router