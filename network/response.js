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
    let date =new Date()
    console.error(`[error ${date.getTimezoneOffset()}] ${details}`);

    res
    .status(status||500)
    .send(
        {
            error:error,
         body:""
        }
    )
}