const Model = require ("./model")

function addMessage(message){
    const myMessage= new Model(message);
    myMessage.save()
}
async function updateMessage(id,message){
    return await Model.findByIdAndUpdate(id,{message:message},{new:true})

}
async function getMessages(filterUser){
    let filter = { }
    if( filterUser!=null){
        filter={user:filterUser}
    }
    return await Model.find(filter)
}
async function deleteMessage(id){
    return await Model.findByIdAndDelete(id)
}
module.exports={
    add:addMessage,
    list:getMessages,
    updateMessage:updateMessage,
    deleteMessage:deleteMessage

}