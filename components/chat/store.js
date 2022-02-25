const Model =require("./model")

function addChat(chat){
    const myChat=new Model(chat)
    return myChat.save()
}
function getChats(userId){
    return new Promise((resolve,reject)=>{
        let filter={}
        if(userId){
            filter={
                users:userId
            }
        }
        Model.find(filter)
        .populate("users")
        .exec((err,res)=>{
            if(err) return reject(err)
            return resolve(res)
        })
    })
}
module.exports ={
    add:addChat,
    list:getChats
}