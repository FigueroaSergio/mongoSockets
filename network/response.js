exports.success=function(req,res,body,status,header){
    res
    .header(header||{})
    .status(status||200)
    .send(
        {
            error:"",
            body:body,
        }
    )
}
exports.error=function(req,res,error,status, details){
    let date =formData(new Date())
    console.error(`${date} ${details}`);

    res
    .status(status||500)
    .send(
        {
            error:error,
         body:""
        }
    )
}
function formData(date){
    return `${date.getDay()}:${date.getFullYear()}:${date.getMonth()}-${date.getHours()}:${date.getMinutes()}`
}