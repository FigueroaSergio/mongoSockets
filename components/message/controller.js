const { socket } = require("../../socket")
const store = require("./store")

function addMessage(chat,user,message,file){
    return new Promise((resolve,reject)=>{
        if(!user||!message){
            reject("[error post messageController] Error incomplete data")
        }else{
            let fileUrl=""
            if(file){
                fileUrl=`http://localhost:3000/app/files/${file.filename}`
            }
            let fullMessage={
                file:fileUrl,
                chat:chat,
                user:user,
                message:message,
                date:new Date()
            }
            store.add(fullMessage)
            .then(message=>{
                socket.io.emit("message",message)
                resolve(message)
            })
            .catch(e=>reject(e))
            
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