const db = require("mongoose")
async function connect(url){
    await db.connect(url, {useNewUrlParser:true})
    console.log("[db]Connect successfully");
}
module.exports = connect;