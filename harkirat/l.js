const express=require("express");
const app=express();
let port =8080;
function usermiddleware(req,res,next){
    let username=req.headers.username;
    let password=req.headers.password;
    if(username!="praneeth" && password!="pass"){
        res.status(404).json({"msg":"there is something worng in the username or the password"})
    }else{
        next();
    }
}
function idmiddleware(req,res,next){
    let userid=req.params.userid;
    if(userid!=1 && userid!=2){
        res.status(404).json({"msg":"check user id"});
    }else{
        next();
    }
}
app.listen(port,(err)=>{
    if(err){
        console.log("route giving  the error ");
    }else{
        console.log(" this port is listening ");
    }
})
// app.get("/kidney-checkup",function(req,res,next){
//     console.log(" this is first function");
//     next();

// },function(req,res){
//     console.log(" this is second function");
// });
app.get("/health-checkup",idmiddleware,usermiddleware,(req,res)=>{
res.send("don't worry your kidney is fine");
});
app.get("/kidney-checkup",idmiddleware,usermiddleware ,(req,res)=>{
    res.send(" ya don't wory your kidney is also fine");
})
app.get("")