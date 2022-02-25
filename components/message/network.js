const express = require("express")
const multer = require("multer")
const response = require("../../network/response")
const controller = require("./controller")

const router = express.Router()

const upload = multer({
    dest:"public/files",//donde queremos que se guarden los archivos
})

router.get("/", (req,res)=>{
    let filterChat= req.query.chat||null
    controller.getMessages(filterChat)
    .then(messages=>response.success(req,res,messages,200))
    .catch(error=> response.error(req,res,"Unexpected error", 400, "[error get messageControlle]"+ error))
    
    
})
router.post("/", upload.single("file"),(req,res)=>{
    let {chat,user,message}=req.body
    controller.addMessage(chat,user,message,req.file)
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