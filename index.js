require('dotenv').config()
const express = require("express")
const path = require("path")
const route=require("./network/routes")
const db = require("./db")
var app = express()
const server= require("http").Server(app)
const socket = require("./socket")

db(process.env.MONGOURL)



app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use("/app",express.static(path.join(__dirname, 'public')))

socket.connect(server)
route(app)

server.listen(3000,()=>{
    console.log("la applicacion esta esta escuchando");
})
