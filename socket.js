const socketIO= require("socket.io")
const socket= {}
function connect(server){
    socket.io=socketIO(server)
    // socket.io.on("connection", (socket)=>{
    //     console.log(socket.id);
    // })
}
module.exports={
    connect,
    socket
}