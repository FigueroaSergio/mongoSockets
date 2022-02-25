const express = require("express")
const response = require("../../network/response")
const controller = require("./controller")

const router = express.Router()

router.get("/", (req,res)=>{
    let filterUser= req.query.user||null
    controller.getMessages(filterUser)
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

router.patch("/:id",(req,res)=>{
    controller.updateMessage(req.params.id,req.body.message)
    .then(data=>{
        response.success(req,res,data, 201)
    })
    .catch(error=>{
        response.error(req,res,"Internal error",500,error)
    })
   
})
router.delete("/:id",(req,res)=>{
    controller.deleteMessage(req.params.id)
    .then(data=>{
        response.success(req,res,data, 200)
    })
    .catch(error=>{
        response.error(req,res,"No se pudo eliminar",500,error)
    })

})
module.exports=router;