const express = require("express")


const router = express.Router()
router.all("*",(req, res, next)=>{
    console.log(req.body);
    console.log(req.query);
    next()

})
router.get("/", (req,res)=>{
    res.send("index.html")
})
router.get("/message", (req,res)=>{
    
    res.send(` lista de mensajes`)
})
router.get("/message/:id", (req,res)=>{
    res.send(` mensaje ${req.params.id}`)
})
module.exports=router;