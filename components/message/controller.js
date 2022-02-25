const store = require("./store")

function addMessage(chat,user,message){
    return new Promise((resolve,reject)=>{
        if(!user||!message){
            reject("[error post messageController] Error incomplete data")
        }else{
            let fullMessage={
                chat:chat,
                user:user,
                message:message,
                date:new Date()
            }
            resolve(store.add(fullMessage))
        }
    })
}
function getMessages(filterChat){
    return store.list(filterChat)

}
function updateMessage(id, message){
    return new Promise((resolve,reject)=>{
        if(!id||!message)
        {
            reject("[error patch messageController] Error invalid data")
        }
        else{
            resolve(store.updateMessage(id,message))
        }
    })
}
function deleteMessage(id){
    return new Promise((resolve,reject)=>{
        if(!id)
        {
            reject("[error delete messageController] No existe id")
        }
        else{
            resolve(store.deleteMessage(id))
        }
    })
}
module.exports={
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage
}