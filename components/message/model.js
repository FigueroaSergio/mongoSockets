const mongoose= require("mongoose")
const Schema = mongoose.Schema
const mySchema = new Schema({
    file:{
        type:String
    },
    chat:{
        type:Schema.ObjectId,
        ref:"chat",
        required:true
    },
    user:{ 
        type:Schema.ObjectId,
        ref:"user",
        required:true
    },
    message:{ 
        type:String,
        required:true
    },
    date:{ 
        type:Date,
        required:true
    }
})

const model = mongoose.model("message", mySchema)
module.exports= model