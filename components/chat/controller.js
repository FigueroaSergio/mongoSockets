
const store = require("./store")
function addChat(users){
    if(users==null || !Array.isArray(users)||users.length==0){
        return Promise.reject("No users in the request")
    }
    let myChat ={
        users:users
    }
    return store.add(myChat)
}
function getChats(userId){

    return store.list(userId)
}
module.exports={
    getChats,
    addChat
}