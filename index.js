const express = require("express")
const path = require("path")

//const indexRouter= require("./components/message/network")
const route=require("./network/routes")
var app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended:false}));
app.use(express.json());

route(app)
 
app.listen(3000)
console.log("la applicacion esta esta escuchando");