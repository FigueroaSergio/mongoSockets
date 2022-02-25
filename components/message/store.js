const Model = require ("./model")

function addMessage(message){
    const myMessage= new Model(message);
    return myMessage.save()
}
async function updateMessage(id,message){
    return await Model.findByIdAndUpdate(id,{message:message},{new:true})

}
async function getMessages(filterUser){
    return new Promise((resolve,reject)=>{
        let filter = { }
        if( filterUser!=null){
            filter={user:filterUser}
        }
        Model.find(filter)
        .populate("user")
        .exec((err, messages)=> {
                if (err) return reject(err);
                return resolve(messages)

        })
    
    })
    
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