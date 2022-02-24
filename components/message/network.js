const express = require("express")
const response = require("../../network/response")

const router = express.Router()

router.get("/", (req,res)=>{
    if(req.query.error=="ok"){
      response.error(req,res,"Error", 400, "Error de prueba")  
    }else{
        response.success(req,res,"message",200)
    }
    
})

module.exports=router;