const express = require("express")
const path = require("path")

const indexRouter= require("./routes/index")

var app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(indexRouter)
 
app.listen(3000)
console.log("la applicacion esta esta escuchando");