const db = require("mongoose")
const Model = require ("./model")
db.connect(process.env.MONGOURL,{useNewUrlParser:true})
console.log("[db]Connect successfully");

async function getMessages(){
    return await Model.find()
}
function addMessage(message){
    const myMessage= new Model(message);
    myMessage.save()
}

module.exports={
    add:addMessage,
    list:getMessages,
}