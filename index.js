require('dotenv').config()
const express = require("express")
const path = require("path")
const route=require("./network/routes")
const db = require("./db")
db(process.env.MONGOURL)
var app = express()


app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use("/app",express.static(path.join(__dirname, 'public')))
route(app)
 
app.listen(3000)
console.log("la applicacion esta esta escuchando");